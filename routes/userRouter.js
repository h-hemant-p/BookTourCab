"use strict"

import express from 'express';

import {userCurrentBookingDataController,userRequestedBookingDataController,userOwnerVehicleDataController,userLogoutUserController,userCompleteProfileController,userCreatePasswordController,userContactUsController,userChangePasswordController,userDashboardController,userVehicleBookingController,userRegisterOwnerController,userAddVehicleController,userAddDriverController,userSearchVehicleDetailsController,userBookNowVehicleController,userAddInsuranceController,userViewBookingHistoryController,userDeleteVehicleCOntroller,userUpdateInsuranceController,userUpdateVehicleInsuranceDetailsController,userVehicleBookingRequestDataController,userUpdateUserDataController,userAcceptOwnerBookingController,userOwnerCurrentBookingDataController,userVerifyBookingStartPinController,userWalletDataController,userOwnerDriverDataController,userDeleteDriverController,userStartBookingController} from "../controller/userController.js";
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
router.get("/registerowner",userRegisterOwnerController)
router.post('/adddriver',upload.single('licenceimage'),userAddDriverController);
router.post('/addvehicle',upload.fields([
    {name: 'rcbookimage', maxCount: 1},
    {name: 'vehicleimage', maxCount: 1}
]),userAddVehicleController);
router.post("/searchvehicle",userSearchVehicleDetailsController);
router.post("/booknow",userBookNowVehicleController);
router.post('/acceptbooking',userAcceptOwnerBookingController);
router.post('/verifybookingstartpin',userVerifyBookingStartPinController);
router.get('/walletdata',userWalletDataController);
router.get('/ownercurrentbookingdata',userOwnerCurrentBookingDataController);
router.get('/ownervehiclebookingrequestdata',userVehicleBookingRequestDataController);
router.get('/ownerdriverdata',userOwnerDriverDataController);
router.get('/ownervehicledata',userOwnerVehicleDataController);
router.get('/userrequestedbookingdata',userRequestedBookingDataController);
router.get('/usercurrentbookingdata',userCurrentBookingDataController);

router.post('/updateuserdata',userUpdateUserDataController);
router.post('/deletedriver',userDeleteDriverController)
router.post('/startbooking',userStartBookingController);
router.post('/updateinsurancedetails',userUpdateVehicleInsuranceDetailsController);
router.post('/updateinsurance',userUpdateInsuranceController);
router.get('/viewbookinghistory',userViewBookingHistoryController);
router.get('/deletevehicle',userDeleteVehicleCOntroller);
router.post('/addInsurance',userAddInsuranceController);
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