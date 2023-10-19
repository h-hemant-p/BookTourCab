"use strict"

import express from 'express';

// import {checkSigninController} from "../controller/indexController.js";
import {userLogoutUserController,userCompleteProfileController,userCreatePasswordController,userContactUsController,userChangePasswordController,userOwnerDashboardController,userDriverDashboardController,userDashboardController,userVehicleBookingController,userBecomeDriverController} from "../controller/userController.js";
import  {upload}  from '../middleware/fileUpload.js';


let router = express.Router();

router.use(express.static('public'));
router.use(express.static('api'));
// router.use("/upload",express.static('upload'));

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


// router.post('/registerdriver',userRegisterDriverController)

router.get('/logoutuser',userLogoutUserController)

router.post('/createpassword',userCreatePasswordController);
router.post('/changepassword',userChangePasswordController);

router.post('/contactus',userContactUsController);

router.get("/ownerdashboard",userOwnerDashboardController)
router.get("/driverdashboard",userDriverDashboardController)
router.get("/userdashboard",userDashboardController);
router.get("/booking",userVehicleBookingController);
router.post('/registerdriver',userBecomeDriverController)
// router.post('/vehicleregistration',userVehicleRegistrationController);
export default router;