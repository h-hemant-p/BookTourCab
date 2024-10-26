"use strict"

import express from 'express';

import {userUpdateProfileController,userUploadProfileImageController,userNewsLetterController,userCurrentBookingDataController,userRequestedBookingDataController,userOwnerVehicleDataController,userLogoutUserController,userCompleteProfileController,userCreatePasswordController,userContactUsController,userChangePasswordController,userDashboardController,userVehicleBookingController,userRegisterOwnerController,userAddVehicleController,userAddDriverController,userSearchVehicleDetailsController,userBookNowVehicleController,userAddInsuranceController,userViewBookingHistoryController,userDeleteVehicleController,userUpdateInsuranceController,userUpdateVehicleInsuranceDetailsController,userVehicleBookingRequestDataController,userUpdateUserDataController,userAcceptOwnerBookingController,userOwnerCurrentBookingDataController,userVerifyBookingStartPinController,userWalletDataController,userOwnerDriverDataController,userDeleteDriverController,userCancelBookingController} from "../controller/userController.js";
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
router.post('/newsletter',userNewsLetterController);
router.post('/uploadprofileimage',upload.single('profileimage'),userUploadProfileImageController);
router.post('/updateprofile',userUpdateProfileController);
router.post('/addInsurance',userAddInsuranceController);
router.post('/updateuserdata',userUpdateUserDataController);
router.post('/updateinsurance',userUpdateInsuranceController);
router.post('/updateinsurancedetails',userUpdateVehicleInsuranceDetailsController);
router.post('/cancelbooking',userCancelBookingController);

router.post('/deletedriver',userDeleteDriverController);
router.post('/deletevehicle',userDeleteVehicleController);

router.get('/viewbookinghistory',userViewBookingHistoryController);
export default router;





/*       
-----------------: Remaining Tasks :----------------

    1. Pop Up Apply
        |-- show success alert on booking 
        |-- Accept Booking in owner Vehicle
        |-- Block User and Vehicle in admin
        |-- Message sent button
        |-- Booking Cancel
        |-- Add Vehicle
        |-- Add Insurance
        |-- Delete Vehicle
        |-- Sign Up & Sign Welcome PopUp
        |-- Add Driver & Update Insurance & Delete Driver
        |-- 


    2. Booking History on User Dashboard
    3. Booking History on Owner Dashboard
    4. Current Booking on User Dashboard
    5. Cancel Booking On User Dashboard
    
    6. Delete Vehicle and Driver on Owner Dashboard
    7. Payment Gateway Api
    8. Forget Password 
    12. Filter Option on Vehicle Booking Page
    13. Route Managment on All Pages
    14. Apply Datatable 


    9. Navbar On Signin Page
    10. View Profile on User & Admin Dashboard
    11. Update Profile Image On User & Admin Dashboard

    Additional Work

    1. Set Address using pincode
    2. Auto Complete Address on User Registration Form
    3. Vehicle Model and Company API 

*/