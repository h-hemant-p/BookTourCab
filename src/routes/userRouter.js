"use strict"

import express from 'express';

// import {checkSigninController} from "../controller/indexController.js";
import {userLogoutUserController,userCompleteProfileController} from "../controller/userController.js";

let router = express.Router();

router.use(express.static('public'));

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

router.get('/user_dashboard',(req,res)=>{
    res.render('pages/user_dashboard',{user:req.session.log})
});
router.get('/vehicle_booking_page',(req,res)=>{
    res.render('pages/vehicle_booking_page',{user:req.session.log})
});


router.get('/driver_dashboard',function(req,res){
    res.render('pages/driver_dashboard',{user:req.session.log});
});


router.get('/owner_dashboard',function (req,res){
    res.render('pages/owner_dashboard',{user:req.session.log});
});

// router.post('/',checkSigninController);
// router.get('/',checkSigninController);
// router.get('',checkSigninController);
// router.post('',checkSigninController);

router.post('/completeprofile',userCompleteProfileController);
// router.post('/registerdriver',userRegisterDriverController)
router.get('/logoutuser',userLogoutUserController)
export default router;