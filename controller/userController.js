
import { request, response } from 'express';
import users from '../model/userModel.js';
import contactUs from '../model/contactUs.js';
import drivingDetails from '../model/drivingDetailModel.js';
import wallets from "../model/walletModel.js";
import bcrypt from 'bcrypt';


export const userLogoutUserController = (request, response) => {
    request.session.email = "";
    request.session.contact_no="";
    request.session.log = "";
    request.session.destroy();
    response.cookie('jwt','',{ expires: new Date(0) })
    response.cookie('SECRET_KEY','',{ expires: new Date(0) })
    response.render('./pages/index', { user: "" })
}


export const userCompleteProfileController = async(request,response)=>{
    const aadharimg = request.files['aadharimg'][0];
    const panimg = request.files['panimg'][0];
    console.log(request.files);
    // console.log("Inside userCompleteProfileController");
    try{
        await users.updateOne(
            {
                email:request.session.log.email
            },{
                $set:{
                    name:request.body.name,
                    is_complete : true,
                    gender : request.body.gender,
                    address : request.body.address,
                    city : request.body.city,
                    state : request.body.state,
                    pin_code : request.body.pincode,
                    aadhar_number : request.body.aadharnumber,
                    pan_number : request.body.pannumber,
                    aadhar_image : `/uploads/${aadharimg.filename}`,
                    pan_image : `/uploads/${panimg.filename}`
                }
            }
        );
        console.log("Profile Updated Successfully");
        response.render("./pages/vehicle_booking_page",{user : request.session.log});
    }catch(error){
        console.log("Error while updating user data inside complete profile.");
        response.render("./pages/index",{user : request.session.log});
    }
};

export const userCreatePasswordController = async(request,response) => {
    try{
        var temp = {
            name:request.body.name,
            isComplete : true,
            gender : request.body.gender,
            address : request.body.address,
            city : request.body.city,
            state : request.body.state,
            pin_code : request.body.pincode,
            aadhar_number : request.body.aadharnumber,
            pan_number : request.body.pannumber
        };
        console.log(temp);
        console.log(request.session.log);
        console.log("pass : "+request.body.confirmpassword);
        await users.updateOne(
            {
                email:request.session.log.email
            },{
                $set:{
                    password : request.body.createconfirmpass
                }
            }
        );
        console.log("Password Created Successfully");
        response.render('./pages/user_dashboard',{user : request.session.log})
    }catch(error){
        console.log("Error while Create a user Password.");
        response.render("./pages/user_dashboard",{user : request.session.log});
    }
}

export const userChangePasswordController = async(request,response) => {
    try{
        await users.updateOne({
            $and:[
                { email : request.session.log.email},
                { password : request.body.changeoldpassword }
            ]
        },
        {
            $set : {
                password : request.body.changenewpassword
            }
        });
        console.log("Password Updated Successfully.....");
        console.log(request.session.log);
        response.render("./pages/user_dashboard",{user : request.session.log});
    }
    catch(error){
        console.log("Error While Updating Password.");
        response.render("./pages/user_dashboard",{user : request.session.log});
    }
}

export const userContactUsController = async(request, response) => {
    try{
        await contactUs.create({
            name : request.body.name,
            email : request.body.email,
            contact_no : request.body.mobile,
            role : request.body.role,
            query : request.body.comment
        });
        console.log("Data Inserted ");
        response.render("./pages/index",{user : request.session.log});
    }catch(error){
        console.log("Error While Contact With BTC."+error);
        response.render("./pages/index",{user : request.session.log});
    }
}


export const userOwnerDashboardController = (request,response)=>{
    var user = request.session.log;
    if(user && user.is_owner ){
        response.render("./pages/owner_dashboard",{user:user});
    }else{
        response.status(404).render("./pages/404");
    }
}

export const userDriverDashboardController = (request,response)=>{
    var user = request.session.log;
    if(user && user.is_driver){
        response.render("./pages/driver_dashboard",{user:user});
    }else{
        response.status(404).render("./pages/404");
    }
}

export const userDashboardController = (request,response)=>{
    var user = request.session.log;
    console.log(user);
    console.log(request.session);

    
    if(user){
        response.render("./pages/user_dashboard",{user:user});
    }else{
        response.status(404).render("./pages/404");
    }
}

export const userVehicleBookingController = (request,response)=>{
    var user = request.session.log;
    if(user && user.is_complete){
        response.render("./pages/vehicle_booking_page",{user:user});
    }else{
        response.status(404).render("./pages/404");
    }
}

export const signInReloadController = (request,response,next)=>{
    var user = request.session.log;
    if(user){
        response.render("./pages/index",{user : user});
    }else{
        next();
    }
}


export const userBecomeDriverController = async(request,response) => {
    console.log(request.body);
    try{
        await wallets.create({
            email : request.session.log.email,
            wallet_amount : 0,
            user_role : "driver"
        });

        var driver_wallet= wallets.findOne({
            email:request.session.log.email,
            user_status : "driver"
        });
        console.log(driver_wallet);

        var res = await drivingDetails.create ({
            dl_number : request.body.licencenumber,
            dl_issue_date : request.body.licenceissuedate,
            dl_expiry_date : request.body.licenceexpirydate,
            dl_class : request.body.licenceclass,
            experience_year : request.body.experienceyear,
            wallet : driver_wallet._id
        });

        console.log(res);
        console.log("data inserted Successfullly ... ");
        response.render("./pages/driver_dashboard",{user : request.session.log});
    }
    catch(error){
        console.log("Error While Become a BTC Driver."+error);
        response.render("./pages/user_dashboard",{user : request.session.log});
    }
}




// vvvvvvvvv
export const vehicleRegistrationController = async(request,response)=>{
    // console.log(request.body);
    // const haveInsuranceValue = request.body.haveinsurance;
    // const haveInsurance = haveInsuranceValue === "Yes";
    // try{
    //     var res = await vehicles.create({
    //         reg_number : request.body.registrationnumber,
    //         company : request.body.companyname,
    //         model : request.body.modelname,
    //         manufacture_year : request.body.manufactureyear,
    //         registration_year : request.body.registrationyear,
    //         fuel_type : request.body.fueltype,
    //         vehicle_class : request.body.selectvehicle,
    //         seating_capacity : request.body.seatingcapacity,
    //         rc_book_image : request.body.rcbookimage,
    //         have_insurance : haveInsurance,
    //     });
        
    //     console.log(res);
    //     console.log("Vehicle Data Inserted Successfully.. ");
    //     response.render("./Pages/owner_dashboard",{user : request.session.log});   
    // }
    // catch(error){
    //     console.log("Error While Register."+error);
    // }
}