import { request, response } from 'express';
import users from '../model/userModel.js';
import admin from '../model/adminModel.js';
import wallets from '../model/walletModel.js';
import ownerDetails from '../model/ownerDetailModel.js';
import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { sendMail } from '../middleware/nodeMailer.js';
import fs from 'fs';
import { error } from 'console';


var writeSecretKey = (secretKey)=>{
    let path = './config.json';
    var data = {
        SECRET_KEY : secretKey
    }
    fs.writeFileSync(path,JSON.stringify(data));
}

export const indexSignupUserController = async (request, response) => {
    if ( request.session.otp == request.body.otp) {
        try {
            const existingUser = await users.findOne({ email: request.session.email });
            if (existingUser) {
                console.log("User allready Exist");
                response.render("./pages/index",{user:""});
            }
            else{
                const existingAdmin = await admin.findOne({email:request.session.email});
                if(existingAdmin){
                    console.log('You are an admin');
                    response.render("./pages/index",{user:""});
                }else{
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

                    var user_wallet = await wallets.create({
                        email : request.session.email
                    }); 
                    console.log("wallet created");
                    console.log(user_wallet);
                    
                    const newuser = await users.create({
                        contact_no: request.session.contact_no,
                        email: request.session.email,
                        wallet : user_wallet._id
                    });
                    console.log(newuser)
                    console.log('Data inserted successfully');

                    var loggedUser = await users.findOne({email:request.session.email});
                    request.session.log = loggedUser;
                    request.session.role = "user";
                    request.session.save();
                    console.log('user saved in session successfully');
                    
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
        
    }else {// sign in with password
        try{
            console.log(password);
            const sha256Hash = crypto.createHash('sha256');
            sha256Hash.update(request.body.password);
            var password = sha256Hash.digest('hex');
            var existingUser = await users.findOne({
                email : request.body.email,
                password : password
            });
            if(!existingUser){
                var existingAdmin = await admin.findOne({
                    email: request.body.email,
                    password : password
                });
                if(!existingAdmin){
                    console.log('User has not any account.');
                    response.render("./pages/index",{user : ""});
                }else{
                    is_admin = true;
                    request.session.email = request.body.email;
                    request.session.save();
                }
            }else{
                is_user = true;
                request.session.email = request.body.email;
                request.session.save();
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
        request.session.log = loggedAdmin;
        request.session.role = "admin";
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
        request.session.log = loggedUser;
        request.session.role = "admin";
        request.session.save();
        response.render('./pages/index', { user: request.session.log});
    }
}


export const indexGetOtpController = (request, response) => {
    var min = 1000; // Minimum four-digit number
    var max = 9999; // Maximum four-digit number
    var otp = Math.floor(Math.random() * (max - min + 1)) + min;
    var email = request.body.email;
    var subject =  `Welcome to BOOK TOUR CAB - Your Ultimate Vehicle Booking Solution!`;
    var message = `Thank you for choosing us as your trusted partner for all your vehicle booking needs. Our team is dedicated to providing you with a seamless and convenient experience for your transportation requirements. Your One time Password is ${otp}`;
    var html = '';
    try{
        sendMail(email,subject,message,html);
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
    }catch(error){
        console.error("Error while sending Email.");
        console.error(error);
        response.render("./pages/index",{user:""});
    }    
};

export const indexRenderSignController = (request,response)=>{
    response.render('./pages/sign',{user : request.session.log});
}