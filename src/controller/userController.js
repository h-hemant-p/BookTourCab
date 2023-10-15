
import { request, response } from 'express';
import users from '../model/userModel.js';
import bcrypt from 'bcrypt';


export const indexRegisterDriverController = async (request, response) => {
    const { drivername, gender, driveremail, dateofbirth, licenceissuedate, licenceexpirydate, aadharnumber, aadharimage, pancardnumber, pancardimage, licencenumber, licenceimage, experienceyear } = request.body;

    try {
        const existingdriver = await schema.findOne({ contact_no: contact_no });
        if (existingdriver) {

        }
    }
    catch (err) {
        console.log("Error While Driver Registration");

    }
}

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
    console.log("Inside userCompleteProfileController");
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
            pan_number : request.body.pannumber,
        };
        console.log(temp);
        console.log(request.session.log);

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


