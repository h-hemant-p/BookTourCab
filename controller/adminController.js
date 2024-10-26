import users from '../model/userModel.js';
import ownerDetails from '../model/ownerDetailModel.js'
import crypto from 'crypto';
import session from 'express-session';
import admin from '../model/adminModel.js';
import contactUs from '../model/contactUs.js';
import newsletter from '../model/newsLetterModel.js';
import { sendMail } from '../middleware/nodeMailer.js';
export const adminUserListController = async (request, response) => {
  try {
    var alluser = await users.find({ user_status: true });
    response.json({ message: alluser });
  } catch (error) {
    console.log("Error While Fetching All User Data");
  }
}


export const adminBlockUserController = async (request, response) => {
  try {
    const userId = request.body.userid;
    const updatedUser = await users.findByIdAndUpdate(
      userId,
      {
        is_owner: false,
        is_driver: false,
        user_status: false,
      },
      { new: true } // To get the updated user document as a result
    );

    response.json({ message: updatedUser });

  } catch (error) {
    console.error("Error updating user:", error);
    return response.status(500).json({ message: "An error occurred" });
  }
}


export const adminVehicleListController = async (request, response) => {
  try {
    // console.log("Inside vehicle controller");
    const allvehicles = await ownerDetails.aggregate([
      {
        $unwind: "$vehicles"
      },
      {
        $replaceRoot: { newRoot: "$vehicles" }
      },
      {
        $match: {
          vehicle_status: "active"
        }
      }
    ]);
    response.json({ message: allvehicles })
  } catch (error) {
    console.log("Error While Fetching Vehicle List Controller");
  }
}


export const adminChangePasswordController = async (request, response) => {
  try {
    // console.log("Inside Change Password .... ");

    var newpass = crypto.createHash('sha256');
    newpass.update(request.body.changecnfpassword);
    var newpassword = newpass.digest('hex');
    var oldpass = crypto.createHash('sha256');
    oldpass.update(request.body.changeoldpassword);
    var oldpassword = oldpass.digest('hex');
    await admin.updateOne({
      email: request.session.log.email,
      password: oldpassword
    },
      {
        $set: {
          password: newpassword
        }
      });
    console.log("Password Update Successfull ..... ");
    var loggedAdmin = await admin.findOne({ email: request.session.log.email });
    // console.log(loggedAdmin);
    request.session.log = loggedAdmin;
    request.session.role = "admin";
    request.session.save();
    response.render('./pages/admin_dashboard', { admin: request.session.log });
  }
  catch (error) {
    console.log("Error While Updating Password." + error);
    response.render('./pages/admin_dashboard', { admin: request.session.log });
  }
}


export const adminUnBlockUserController = async (request, response) => {
  try {
    const userId = request.body.userid;
    console.log(userId);
    // Update the user's fields
    const updatedUser = await users.findByIdAndUpdate(
      userId,
      {
        user_status: true
      },
      { new: true } // To get the updated user document as a result
    );

    if (!updatedUser) {
      return response.status(404).json({ message: "User not found" });
    }
    return response.json({ message: updatedUser });
  } catch (error) {
    console.error("Error while unblocking the user:", error);
    return response.status(500).json({ message: "An error occurred" });
  }
}


export const adminBlockedUsersListController = async (request, response) => {
  var allBlockedusers = await users.find({ user_status: false });
  response.json({ message: allBlockedusers });
}


export const adminBlockVehicleController = async (request, response) => {

  try {
    // console.log(request.body);
    console.log("Inside Block Vehicle ");
    var blockvehicle = await ownerDetails.updateOne({
      "vehicles": {
        $elemMatch: { "reg_number": request.body.reg_number }
      }
    },
      {
        $set: {
          "vehicles.$.vehicle_status": "deactive"
        }
      });
    response.json({ message: blockvehicle });
  } catch (err) {
    console.log("Error while admin block vehicle controller");
  }
}


export const adminBlockVehicleListController = async (request, response) => {
  try {
    console.log("block vehicle controller");
    const blockvehicle = await ownerDetails.aggregate([
      {
        $unwind: "$vehicles"
      },
      {
        $replaceRoot: { newRoot: "$vehicles" }
      },
      {
        $match: {
          vehicle_status: "deactive"
        }
      }
    ]);
    response.json({ message: blockvehicle })
  } catch (err) {
    console.log("Error while fetching block vehicle list controller");
  }
}


export const adminUnBlockVehicleController = async (request, response) => {
  try {
    var unblockvehicle = await ownerDetails.updateOne({
      "vehicles": {
        $elemMatch: { "reg_number": request.body.reg_number }
      }
    },
      {
        $set: {
          "vehicles.$.vehicle_status": "active"
        }
      });
    response.json({ message: unblockvehicle });
  } catch (err) {
    console.log("Error while unblock vehicle controller");
  }
}


export const adminLogOutController = (request, response) => {
  request.session.loggedAdmin = "";
  // request.session.role = "";
  request.session.destroy();
  response.cookie('jwt', '', { expires: new Date(0) })
  response.cookie('SECRET_KEY', '', { expires: new Date(0) })
  response.render('./pages/index', { user: "" });
}

export const adminContactUsListController = async (request, response) => {
  try {
    console.log("conatct us controller");
    var contactusdata = await contactUs.find();
    response.json({ data: contactusdata });
  } catch (error) {
    console.log("Error While Fetching The Contact Us Data.");
  }
}

export const adminProfileDetails = async (request, response) => {
  try {
    var admindata = await admin.findOne({ _id: request.body.id });
    response.json({ data: admindata });
  } catch (error) {
    console.log("Error While Fetching The Admin Profile Data");
  }
}

export const adminUpdateProfileDetailsController = async (request, response) => {
  try {
    var update = await admin.updateOne(
      {
        _id: request.session.log._id
      },
      {
        $set: {
          name: request.body.adminname,
          email: request.body.adminemail,
          contact_no: request.body.admincontact,
          gender: request.body.admingender
        }
      });
    console.log("Profile Update Successfull", update);
    var loggedAdmin = await admin.findOne({ email: request.session.log.email });
    // console.log(loggedAdmin);
    request.session.log = loggedAdmin;
    request.session.role = "admin"
    request.session.save();
    response.render('./pages/admin_dashboard', { admin: request.session.log });

  } catch (error) {
    console.log("Error While Update Admin Profile Controller" + error);
  }
}

export const adminGetNewslettterListController = async (request, response) => {
  try {
    var newsletterlist = await newsletter.find();
    response.json({ data: newsletterlist });
  } catch (error) {
    console.log("Error While Fetching Newsletter List Controller");
  }
}

export const adminSendNotificationController = async (request, response) => {
  try {
    let senttomail = request.body.to_send_notification;
    var subject = "Existing Update By BTC";
    var message = request.body.notification;
    var html = "";

    if (senttomail == "users") {
      var allusers = await users.find();
      allusers.forEach(element => {
        sendMail(element.email,subject,message,html);
      });
    }
    else if (senttomail == "owners") {
      var allowners = await users.find({is_owner:true});
      console.log("all owners : ",allowners);

      allowners.forEach(element => {
        sendMail(element.email,subject,message,html);
      });
    }
    else if (senttomail == "newsletters") {
      var allnewsletters = await newsletter.find();

      allnewsletters.forEach(element => {
        sendMail(element.email,subject,message,html);
      });
    }
    response.render('./pages/admin_dashboard', { admin: request.session.log });
  } catch (error) {

  }
}

export const adminUploadProfileImageController = async(request,response) => {
  try {
      await admin.updateOne({
        _id : request.session.log._id
      },
      {
      $set : {
          profile_image : request.file.filename
          }
      })
      console.log("Profile Updated Successfull");
      var loggedAdmin = await admin.findOne({ email: request.session.log.email });
      // console.log(loggedAdmin);
      request.session.log = loggedAdmin;
      request.session.role = "admin"
      request.session.save();
      response.render('./pages/admin_dashboard', { admin: request.session.log });
      
  } catch (error) {
    console.log("Error while Uploading profile image controller"+error);
  }
}

/* Admin@123 -->  2b3bdc53a332daaf96dc5afa224c9e86036b9b9c40cba884987835418848a997  */