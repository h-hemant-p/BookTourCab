import jwt from 'jsonwebtoken';
import fs from "fs";
import users from '../model/userModel.js';
import admin from '../model/adminModel.js';

export const aunthicateJWT = (request,response,next)=>{
    console.log('inside authenticateJWT');
    try{
        let path = './config.json';
        var SECRET_KEY =JSON.parse(fs.readFileSync(path)).SECRET_KEY;
        
        const token = request.cookies.jwt;
        // var SECRET_KEY = request.cookies.SECRET_KEY;
        if(token){
            console.log('tocken ');
            console.log(jwt)
            jwt.verify(token,SECRET_KEY,(error,payload)=>{//secret key not found
                if(error){
                    console.log('error inside verify method.');
                    response.render("./pages/index",{user:""});
                }else{
                    console.log('verify Successfull');
                    request.payload = payload;
                    next();
                }
            });
        }else{
            console.log('tocken not avilable.');
            response.render("./pages/index",{user:""})
        }
    }catch(error){
        console.error("error while reading secret key");
        response.render("./pages/index",{user:""});
    }
}



export const authorizeUser = async(request,response,next)=>{
    console.log('inside authorizeUser');
    console.log(request.payload);
    
    if(request.payload.data.role == "user"){
        try{
            var loggedUser = await users.findOne({ email: request.payload.data.email });
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
                password: loggedUser.password
            }
            request.session.log = user;
            request.session.save();

            console.log("Logged user : "+user);
            response.render("./pages/index",{user : user});

        }catch(error){

            console.error('user not found inside authorize user.');
            response.render("./pages/index",{user:""});
            
        }
    }else if(request.payload.data.role=="admin"){
        try{
            var loggedAdmin = await admin.findOne({ email: request.payload.data.email });
            var adminData = {
                contact_no : loggedAdmin.contact_no,
                email : loggedAdmin.email,
                role : request.payload.data.role
            }
            request.session.log = adminData;
            request.session.save();

            response.render("./pages/admin_dashboard",{admin : request.session.log});
        }catch(error){
            console.error('Admin data not found inside authorize user.');
            response.render("./pages/index",{user:""});
        }
    }else{
        console.error('Authorization failed');
        response.render("./pages/index",{user:""});
    }
    next();
}