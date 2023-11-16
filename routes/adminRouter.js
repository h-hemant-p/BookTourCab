"use strict"
import express from 'express';
import {adminUserListController,adminVehicleListController,adminChangePasswordController,adminBlockUserController,adminBlockedUsersListController,adminUnBlockUserController,adminLogOutController,adminBlockVehicleController,adminBlockVehicleListController,adminUnBlockVehicleController,adminContactUsListController,adminProfileDetails,adminUpdateProfileDetailsController,adminGetNewslettterListController,adminSendNotificationController,adminUploadProfileImageController} from '../controller/adminController.js'
import  {upload}  from '../middleware/fileUpload.js';
let adminRouter = express.Router();

adminRouter.use(express.static('public'));
adminRouter.use("/uploads",express.static('uploads'));

adminRouter.get('/userslist',adminUserListController);
adminRouter.get('/blockuserslist',adminBlockedUsersListController);

adminRouter.get('/allvehicles',adminVehicleListController);
adminRouter.post('/changepassword',adminChangePasswordController);

adminRouter.post('/blockuser',adminBlockUserController);
adminRouter.post('/unblockuser',adminUnBlockUserController);
adminRouter.get('/adminlogout',adminLogOutController);
adminRouter.post('/blockvehicle',adminBlockVehicleController);
adminRouter.get('/blockvehiclelist',adminBlockVehicleListController);
adminRouter.post('/unblockvehicle',adminUnBlockVehicleController);
adminRouter.get('/contactuslist',adminContactUsListController);
adminRouter.post('/adminprofiledata',adminProfileDetails);
adminRouter.post('/updateprofile',adminUpdateProfileDetailsController);
adminRouter.get('/newsletterlist',adminGetNewslettterListController);
adminRouter.post('/sendnotification',adminSendNotificationController);
adminRouter.post('/uploadprofileimg',upload.single('profileimage'),adminUploadProfileImageController);

export default adminRouter;