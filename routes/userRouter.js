"use strict"

import express from 'express';

import {userLogoutUserController,userCompleteProfileController,userCreatePasswordController,userContactUsController,userChangePasswordController,userDashboardController,userVehicleBookingController,userRegisterDriverController,userRegisterOwnerController,userAddVehicleController,userAddDriverController,userSearchVehicleDetailsController,userBookNowVehicleController,userAddInsuranceController,userViewBookingHistoryController,userDeleteVehicleCOntroller,userRemoveOwnerDriverController,userUpdateInsuranceController,userUpdateVehicleInsuranceDetailsController,userVehicleBookingsController,userUpdateUserDataController} from "../controller/userController.js";
import  {upload}  from '../middleware/fileUpload.js';


let router = express.Router();

router.use(express.static('public'));
router.use("/uploads",express.static('uploads'));
router.use(express.static('api'));

router.get('/',function (req,res){
    res.render('pages/index',{user:req.session.log});
});

router.get('/about',function (req,res){
    res.render('pages/about',{user:req.session.log});
});

router.get('/privacy_policy',function (req,res){
    res.render('pages/privacy_policy',{user:req.session.log});
});

router.get('/safety',function (req,res){
    res.render('pages/safety',{user:req.session.log});
});
router.get('/services',function (req,res){
    res.render('pages/services',{user:req.session.log});
});

router.post('/completeprofile',upload.fields([
    { name: 'aadharimg', maxCount: 1 },
    { name: 'panimg', maxCount: 1 }
]),userCompleteProfileController);



router.get('/logoutuser',userLogoutUserController)
router.get("/booking",userVehicleBookingController);
router.post('/contactus',userContactUsController);

router.get("/userdashboard",userDashboardController);
router.post('/createpassword',userCreatePasswordController);
router.post('/changepassword',userChangePasswordController);

router.post('/registerdriver',upload.single('licenceimage'),userRegisterDriverController);
router.get("/registerowner",userRegisterOwnerController)

router.post('/adddriver',upload.single('licenceimage'),userAddDriverController);
router.post('/addvehicle',upload.fields([
    {name: 'rcbookimage', maxCount: 1},
    {name: 'vehicleimage', maxCount: 1}
]),userAddVehicleController);

router.post("/searchvehicle",userSearchVehicleDetailsController);
router.post("/booknow",userBookNowVehicleController);

router.post('/addInsurance',userAddInsuranceController);
router.get('/viewbookinghistory',userViewBookingHistoryController);
router.get('/deletevehicle',userDeleteVehicleCOntroller);
router.get('/ownerremovedriver',userRemoveOwnerDriverController)
router.post('/updateinsurance',userUpdateInsuranceController);
router.post('/updateinsurancedetails',userUpdateVehicleInsuranceDetailsController);
router.get('/ownervehiclebooking',userVehicleBookingsController);
router.post('/updateuserdata',userUpdateUserDataController);
export default router;




/*
-----------------------
Success message show 
1. owner
2. Booking 
3. signin 
4. logout
-------------------
My bookings table scrollable
Add New Rough data
Correct all validatioin 
--------------------
User registration form modify
----------------------------
modify fetch code
---------------------------

verify user while booking start by owner 
---------------------------
vehicle booking status bar for owner 
---------------------------
generate a notification on owner when user book vehicle 
---------------------------
payment status on owner
---------------------------


*/