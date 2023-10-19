import { request, response } from 'express';
import users from '../model/userModel.js';
import admin from '../model/adminModel.js';
import wallets from '../model/walletModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import fs from 'fs';


var writeSecretKey = (secretKey)=>{
    let path = './config.json';
    var data = {
        SECRET_KEY : secretKey
    }
    fs.writeFileSync(path,JSON.stringify(data));
}

export const indexSignupUserController = async (request, response) => {
    console.log('hi');
    
    if ( request.session.otp == request.body.otp) {
        try {
            
            console.log('hii2');
            const existingUser = await users.findOne({ email: request.session.email });
            if (existingUser) {
                console.log("User allready Exist");
                response.render("./pages/index",{user:""});
            }
            else{
                console.log('hii3');
                const existingAdmin = await admin.findOne({email:request.session.email});
                if(existingAdmin){
                    console.log('You are an admin');
                    response.render("./pages/index",{user:""});
                }else{
                    console.log('hii4');
                    let payload = {};
                    const maxAge = 6 * 24 * 60 * 60 * 1000;
                    const SECRET_KEY = crypto.randomBytes(32).toString('hex');
                    payload.data = {
                        email:request.session.email,
                        role : "user"
                    };
                    
                    const expiryTime ={
                        expiresIn: "6d"
                    };
                    
                    var token = jwt.sign(payload, SECRET_KEY,expiryTime);
                    console.log('hi 5');
                    response.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
                    writeSecretKey(SECRET_KEY);
                    console.log("cookie saved successfully.");

                    var user_wallet = await wallets.create({});  
                    const newuser = await users.create({
                        contact_no: request.session.contact_no,
                        email: request.session.email,
                        wallets : user_wallet._id
                    });
                    console.log('Data inserted successfully');
                    

                    var loggedUser = await users.findOne({email:request.session.email});
                    var user = {
                        name : loggedUser.name,
                        contact_no : loggedUser.contact_no,
                        email : loggedUser.email,
                        is_driver : loggedUser.is_driver,
                        is_owner : loggedUser.is_owner,
                        is_complete : loggedUser.is_complete,
                        city : loggedUser.city,
                        state : loggedUser.state,
                        role : "user",
                        password : loggedUser.password
                    }
                    request.session.log = user;
                    request.session.save();
                    console.log('user saved in session successfully'+user);
                    
                    response.render("./pages/index",{user : request.session.log})
                }
            }
        }
        catch (err) {
            console.log('Error While fetching data.');
            console.log(err);
            response.render('./pages/index', { user: "" })
        }
    }else {
        console.log("Invalid Otp");
        response.render('./pages/index', { user: "" })
    }
};


export const indexSigninUserController = async(request, response) => {
    var is_admin = false;
    var is_user = false;
    
    if(request.session.otp){
        if(request.session.otp==request.body.otp){
            try{
                var existingUser = await users.findOne({email : request.session.email});
                if(!existingUser){
                    var existingAdmin = await admin.findOne({email: request.session.email});
                    if(!existingAdmin){
                        console.log('User has not any account.');
                        response.render("./pages/index",{user : ""});
                    }else{
                        console.log('You are an Admin.');
                        is_admin = true;   
                    }
                }else{
                    console.log('You are an user');
                    is_user = true;  
                }
            }catch(error){
                console.log('Error while fetching data in sign in.');
                response.render("./pages/index",{user:""});
            }
        }else{
            console.log("OTP does'nt match.");
            response.render("./pages/index",{user:""});
        }
    }else {
        try{
            var existingUser = await users.findOne({email : request.session.email});
            if(!existingUser){
                var existingAdmin = await admin.findOne({email: request.session.email});
                if(!existingAdmin){
                    console.log('User has not any account.');
                    response.render("./pages/index",{user : ""});
                }else{
                    console.log('You are an Admin.');
                    if(bcrypt.compare(request.body.password,existingAdmin.password)){
                        is_admin = true;
                        request.session.email = request.body.email;
                        request.session.save();
                    }else{
                        console.log("Password does'nt match.");
                        response.render("./pages/index",{user:""});
                    }
                }
            }else{
                console.log('You are an User.');
                if(bcrypt.compare(request.body.password,existingUser.password)){
                    is_user = true;
                    request.session.email = request.body.email;
                    request.session.save();
                }else{
                    console.log("Password does'nt match.");
                    response.render("./pages/index",{user:""});
                }
            }
        }catch(error){
            console.log('Error while fetching data in sign in.');
            response.render("./pages/index",{user:""});
        }
    }

    if(is_admin){
        let payload = {};
        const maxAge = 6 * 24 * 60 * 60 * 1000;
        const SECRET_KEY = crypto.randomBytes(32).toString('hex');
        payload.data = {
            email:request.session.email,
            role : "admin"
        };

        const expiryTime ={
            expiresIn: "6d"
        };

        var token = jwt.sign(payload, SECRET_KEY,expiryTime);
        response.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
        writeSecretKey(SECRET_KEY);
        console.log("cookie saved successfully.");

        var loggedAdmin = await admin.findOne({email:request.session.email});
        var adminData = {
            contact_no : loggedAdmin.contact_no,
            email : loggedAdmin.email,
            role : "admin"
        }

        request.session.log = adminData;
        request.session.save();

        response.render('./pages/admin_dashboard', { admin: request.session.log});

    }else if(is_user){
        let payload = {};
        const maxAge = 6 * 24 * 60 * 60 * 1000;
        const SECRET_KEY = crypto.randomBytes(32).toString('hex');

        payload.data = {
            email:request.session.email,
            role : "user"
        };

        const expiryTime ={
            expiresIn: "6d"
        };

        var token = jwt.sign(payload, SECRET_KEY,expiryTime);
        response.cookie('jwt', token, { httpOnly: true, maxAge: maxAge });
        writeSecretKey(SECRET_KEY);
        console.log("cookie saved successfully.");

        var loggedUser = await users.findOne({email:request.session.email});
        console.log(loggedUser)
        var user = {
            name : loggedUser.name,
            contact_no : loggedUser.contact_no,
            email : loggedUser.email,
            is_driver : loggedUser.is_driver,
            is_owner : loggedUser.is_owner,
            is_complete : loggedUser.is_complete,
            city : loggedUser.city,
            state : loggedUser.state,
            role : "user",
            password : loggedUser.password
        }
        request.session.log = user;
        request.session.save();
        console.log("SIgnin : ");
        console.log(user);
        response.render('./pages/index', { user: request.session.log});
    }
}


export const indexGetOtpController = (request, response) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "hemantpraja88@gmail.com",
            pass: "prou mshy xwev nygg",
        },
        secure: true,
    });
    var min = 1000; // Minimum four-digit number
    var max = 9999; // Maximum four-digit number
    var otp = Math.floor(Math.random() * (max - min + 1)) + min;

    
    const mailOptions = {
        from: 'aartimakwana2408@gmail.com',
        to: request.body.email,
        subject: `Your One time Password is ${otp}`,
        text: 'Send By BookTourCab(BTC)'
    };
    
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error("Error while sending Email.");
            response.render("./pages/index",{user:""});
            
        } else {
            request.session.otp = otp;
            request.session.email = request.body.email;
            try{
                request.session.contact_no = request.body.contactno;
            }catch(error){
                console.error("Contact number not saved in session.")
            }
            request.session.save();
            console.log('Email sent successfully!');
            console.log(otp);
        }
    });
}