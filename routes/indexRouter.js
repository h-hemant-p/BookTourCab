"use strict"

import express from 'express';
import { indexSignupUserController,indexSigninUserController,indexGetOtpController,indexRenderSignController} from  '../controller/indexController.js';
import {aunthicateJWT,authorizeUser} from "../middleware/jwtVerification.js";
import {signInReloadController} from "../controller/userController.js";
let router = express.Router();

router.use(express.static('public'));
router.use(express.static('api'));

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



/*   --------------- pages routes----------------- */

router.get('/',aunthicateJWT,authorizeUser);
router.get('/sign',indexRenderSignController);
router.post('/signup',indexSignupUserController);
router.post('/signin',signInReloadController,indexSigninUserController);
router.post('/getotp',indexGetOtpController);

export default  router;