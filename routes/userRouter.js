"use strict"

import express from 'express';

import {userLogoutUserController,userCompleteProfileController,userCreatePasswordController,userContactUsController,userChangePasswordController,userDashboardController,userVehicleBookingController,userRegisterDriverController,userRegisterOwnerController,userAddVehicleController,userAddDriverController} from "../controller/userController.js";
import  {upload}  from '../middleware/fileUpload.js';


let router = express.Router();

router.use(express.static('public'));
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


export default router;