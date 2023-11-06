"use strict"
import express from 'express';
import {adminUserListController,adminVehicleListController,adminChangePasswordController,adminBlockUserController,adminBlockedUsersListController,adminUnBlockUserController,adminLogOutController,adminBlockVehicleController,adminBlockVehicleListController,adminUnBlockVehicleController,adminFilterUserController, adminFilterBlockedUserController, adminFilterVehicleController} from '../controller/adminController.js'

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
/* Filter By Aarti  */
adminRouter.post('/filterusers',adminFilterUserController);
adminRouter.post('/filterblockedusers',adminFilterBlockedUserController);
adminRouter.post('/filtervehicle',adminFilterVehicleController);
export default adminRouter;