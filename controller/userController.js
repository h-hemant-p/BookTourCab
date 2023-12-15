import { request, response } from 'express';
import users from '../model/userModel.js';
import contactUs from '../model/contactUs.js';
import ownerDetails from '../model/ownerDetailModel.js';
import drivingDetails from '../model/drivingDetailModel.js';
import vehicles from '../model/vehicleModel.js';
import bookings from '../model/vehicleBookingModel.js';
import vehiclesInsurance from '../model/vehicleInsuranceModel.js'
import wallets from '../model/walletModel.js';
import crypto from 'crypto';
import swal from 'sweetalert';
import session from 'express-session';
import { log } from 'console';
import newsletter from '../model/newsLetterModel.js';
import axios from 'axios';



export const userLogoutUserController = (request, response) => {
    request.session.email = "";
    request.session.contact_no = "";
    request.session.log = "";
    request.session.destroy();
    response.cookie('jwt', '', { expires: new Date(0) })
    response.render('./pages/index', { user: "" })
}


export const userCompleteProfileController = async (request, response) => {
    const aadharimg = request.files['aadharimg'][0];
    const panimg = request.files['panimg'][0];
    try {
        await users.updateOne(
            {
                email: request.session.log.email
            }, {
            $set: {
                name: request.body.name,
                is_complete: true,
                gender: request.body.gender,
                address: request.body.address,
                city: request.body.city,
                state: request.body.state,
                pin_code: request.body.pincode,
                aadhar_number: request.body.aadharnumber,
                pan_number: request.body.pannumber,
                aadhar_image: aadharimg.filename,
                pan_image: panimg.filename
            }
        }
        );

        var loggedUser = await users.findOne({ email: request.session.log.email });
        request.session.log = loggedUser;
        request.session.save();
        console.log("Profile Updated Successfully");
        response.render("./pages/vehicle_booking_page", { user: request.session.log });
    } catch (error) {
        console.log("Error while updating user data inside complete profile." + error);
        response.render("./pages/index", { user: request.session.log });
    }
};


export const userCreatePasswordController = async (request, response) => {
    try {
        console.log(request.session.log);
        var sha256Hash = crypto.createHash('sha256');
        sha256Hash.update(request.body.createconfirmpass);
        var password = sha256Hash.digest('hex');
        console.log(password);
        console.log("pass : " + request.body.confirmpassword);
        await users.updateOne(
            {
                email: request.session.log.email
            },{
            $set: {
                password: password
            }
        }
        );

        var loggedUser = await users.findOne({ email: request.session.log.email });
        request.session.log = loggedUser;
        request.session.save();
        console.log("Password Created Successfully");
        response.render('./pages/user_dashboard', { user: request.session.log })
    } catch (error) {
        console.log(error);
        console.log("Error while Create a user Password.");
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}


export const userChangePasswordController = async (request, response) => {
    try {
        var newpass = crypto.createHash('sha256');
        newpass.update(request.body.changecnfpassword);
        var newpassword = newpass.digest('hex');
        console.log(newpassword);

        var oldpass = crypto.createHash('sha256');
        oldpass.update(request.body.changeoldpassword);
        var oldpassword = oldpass.digest('hex');
        console.log(oldpassword);

        await users.updateOne({
            email: request.session.log.email,
            password: oldpassword
        },
            {
                $set: {
                    password: newpassword
                }
            });

        var loggedUser = await users.findOne({ email: request.session.log.email });
        request.session.log = loggedUser;
        request.session.save();
        console.log("Password Updated Successfully.....");
        console.log(request.session.log);
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
    catch (error) {
        console.log("Error While Updating Password.");
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}


export const userContactUsController = async (request, response) => {
    try {
        await contactUs.create({
            name: request.body.name,
            email: request.body.email,
            contact_no: request.body.mobile,
            role: request.body.role,
            query: request.body.comment
        });
        console.log("Data Inserted ");
        response.render("./pages/index", { user: request.session.log });
    } catch (error) {
        console.log("Error While Contact With BTC." + error);
        response.render("./pages/index", { user: request.session.log });
    }
}


export const userDashboardController = (request, response) => {
    var user = request.session.log;
    console.log(user);
    console.log(request.session);

    if (user) {
        response.render("./pages/user_dashboard", { user: user });
    } else {
        response.status(404).render("./pages/404");
    }
}


export const userVehicleBookingController = (request, response) => {
    var user = request.session.log;
    if (user && user.is_complete) {
        response.render("./pages/vehicle_booking_page", { user: user });
    } else {
        response.status(404).render("./pages/404");
    }
}


export const signInReloadController = (request, response, next) => {
    var user = request.session.log;
    if (user) {
        response.render("./pages/index", { user: user });
    } else {
        next();
    }
}


export const userRegisterOwnerController = async (request, response) => {
    try {
        console.log("Hii1 .. ");
        var owner = await ownerDetails.create({
            email: request.session.log.email
        });
        console.log("Hii2 .. ");

        console.log(owner);

        await users.updateOne({
            email: request.session.log.email
        }, {
            $set: {
                is_owner: true,
                owner_details: owner._id
            }
        })
        console.log("Hii3 .. ");
        var loggedUser = await users.findOne({ email: request.session.log.email });
        request.session.log = loggedUser;
        request.session.save();
        console.log("Hii4 .. ");
        console.log("data inserted Successfullly ... ");
        response.render("./pages/user_dashboard", { user: request.session.log });
        console.log("Hii5 .. ");
    } catch (error) {
        console.log(".Error while becoming Owner ");
        console.log(error)
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}


export const userAddDriverController = async (request, response) => {
    console.log(request.body);
    try {
        var driving_datails = await drivingDetails.create({
            experience_year: request.body.experienceyear,
            dl_number: request.body.licencenumber,
            dl_issue_date: request.body.issuedate,
            dl_expiry_date: request.body.expirydate,
            dl_class: request.body.licenceclass,
            dl_image: request.file.filename
        });

        var reserved_driver = {
            contact_no: request.body.contactno,
            email: request.body.email,
            name: request.body.name,
            gender: request.body.gender,
            driving_detail: driving_datails._id
        };

        var user = await users.findOne({
            email: request.session.log.email
        });

        var owner = await ownerDetails.updateOne({
            _id: user.owner_details
        }, {
            $push: {
                drivers: reserved_driver
            }
        });
        console.log("Driver Added Successfully.");
        var loggedUser = await users.findOne({ email: request.session.log.email });
        request.session.log = loggedUser;
        request.session.save();
        response.render("./pages/user_dashboard", { user: request.session.log });
    } catch (error) {
        console.log("Error while Adding Driver.")
        console.log(error);
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}


export const userAddVehicleController = async (request, response) => {
    console.log(request.body);
    console.log(request.files);
    var rcimg = request.files['rcbookimage'][0];
    var vehicleimage = request.files['vehicleimage'][0];

    try {
        var vehicle_image = {
            image: vehicleimage.filename
        }
        var vehicle = {
            reg_number: request.body.registrationno,
            company: request.body.companyname,
            model: request.body.modelname,
            manufacture_year: request.body.manufactureyear,
            registration_year: request.body.registrationyear,
            fuel_type: request.body.fueltype,
            vehicle_class: request.body.vehicleclass,
            seating_capacity: request.body.seatingcapacity,
            doors: request.body.doors,
            air_bags: request.body.airbags,
            mileage: request.body.mileage,
            rent: request.body.rent,
            automatic: (request.body.automatic == "true"),
            ac: (request.body.ac == "true"),
            driver: (request.body.driver == "true"),
            rc_book_image: rcimg.filename,
            images: vehicle_image
        };
        var user = await users.findOne({ email: request.session.log.email });
        var owner = await ownerDetails.updateOne({
            _id: user.owner_details
        }, {
            $push: {
                vehicles: vehicle
            }
        });

        var loggedUser = await users.findOne({ email: request.session.log.email });
        var loggedOwnerDetails = await ownerDetails.findOne({
            _id: loggedUser.owner_details
        });
        request.session.log = loggedUser;
        request.session.ownerDetails = loggedOwnerDetails;
        request.session.role = "user";
        request.session.save();
        console.log("Vehicle Data Inserted Successfully.. ");
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
    catch (error) {
        console.log("Error While Register." + error);
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}


export const userSearchVehicleDetailsController = async (request, response) => {
    var pickuplat, pickuplon, lat2, lon2;
    var arr = [];

    const startDate = new Date(`${request.body.bookstartdate}T${request.body.bookstarttime}`);
    const endDate = new Date(`${request.body.bookenddate}T${request.body.bookendtime}`);

    var totalHours = 0;
    if (!isNaN(startDate) && !isNaN(endDate)) {
        const timeDifference = Math.abs(endDate - startDate);
        totalHours = Math.floor(timeDifference / (1000 * 60 * 60)); // Hours

        const totalMinutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)); // Minutes
        if (totalMinutes > 30) {
            totalHours = totalHours + 1;
        }
    }
    var res = await users.aggregate([{
        $lookup: {
            from: "ownerDetails",
            foreignField: "_id",
            localField: "owner_details",
            as: "OwnerDetails"
        }
    }]);
    // console.log("res : ",res);
    // Find Piuckup Location Latitude longitude
    await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${request.body.pickuplocation}`)
        .then(response => response.json())
        .then(data => {
            if (data.length > 0) {
                var latitude = data[0].lat;
                var longitude = data[0].lon;
                pickuplat = parseFloat(latitude);
                pickuplon = parseFloat(longitude);
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });

    for (var i = 0; i < res.length; i++) {
        await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${res[i].address}`)
            .then(response => response.json())
            .then(data => {
                if (data.length > 0) {
                    var latitude = data[0].lat;
                    var longitude = data[0].lon;
                    lat2 = parseFloat(latitude);
                    lon2 = parseFloat(longitude);
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
        // calculate Distance
        const R = 6371;
        const dLat = (lat2 - pickuplat) * (Math.PI / 180);
        const dLon = (lon2 - pickuplon) * (Math.PI / 180);
        const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(pickuplat * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);

        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
        const distance = R * c;
        let fixed_distance = parseFloat(distance).toFixed(2);

        // console.log(res);
        
        if (res[i].OwnerDetails.length != 0) {
            // console.log("ownerDetails : ",res[i].ownerDetails);
            for (var j = 0; j < res[i].OwnerDetails[0].vehicles.length; j++) {
                
                if(res[i].OwnerDetails[0].vehicles[j].have_insurance && !res[i].OwnerDetails[0].vehicles[j].is_booked && res[i].OwnerDetails[0].vehicles[j].vehicle_status){
                    var amount = res[i].OwnerDetails[0].vehicles[j].rent * totalHours;
                    var gst_amount = (amount * 18) / 100;
                    var totalamount = (amount + gst_amount).toFixed(0);

                    var obj = {
                        owner_contact: res[i].contact_no,
                        owner_name: res[i].name,
                        address: res[i].address,
                        nearbyvehicle: fixed_distance,
                        registerno: res[i].OwnerDetails[0].vehicles[j].reg_number,
                        company: res[i].OwnerDetails[0].vehicles[j].company,
                        model_name: res[i].OwnerDetails[0].vehicles[j].model,
                        manufactureyear: res[i].OwnerDetails[0].vehicles[j].manufacture_year,
                        fueltype: res[i].OwnerDetails[0].vehicles[j].fuel_type,
                        vehicleclass: res[i].OwnerDetails[0].vehicles[j].vehicle_class,
                        seatingcapacity: res[i].OwnerDetails[0].vehicles[j].seating_capacity,
                        totaldoors: res[i].OwnerDetails[0].vehicles[j].doors,
                        airbags: res[i].OwnerDetails[0].vehicles[j].air_bags,
                        mileage: res[i].OwnerDetails[0].vehicles[j].mileage,
                        rateperhr: res[i].OwnerDetails[0].vehicles[j].rent,
                        automatic: res[i].OwnerDetails[0].vehicles[j].automatic,
                        haveac: res[i].OwnerDetails[0].vehicles[j].ac,
                        havedriver: res[i].OwnerDetails[0].vehicles[j].driver,
                        vehicleimg: res[i].OwnerDetails[0].vehicles[j].images[0].image,
                        totalamount: totalamount,
                        startdate: request.body.bookstartdate,
                        starttime: request.body.bookstarttime,
                        enddate: request.body.bookenddate,
                        endtime: request.body.bookendtime,
                        pickuplocation: request.body.pickuplocation,
                        droplocation: request.body.droplocation,
                        vehicleobjid: res[i].OwnerDetails[0].vehicles[j]._id,
                        ownerobjid: res[i].OwnerDetails[0]._id,
                        totalHours: totalHours,
                        gst: gst_amount,
                        amount: amount,
                        owneruserid : res[i]._id
                    }
                    console.log(obj);
                    arr.push(obj);
                    
                }
            }
        }
    }
    var finalsorted = arr.sort((a, b) => a.nearbyvehicle - b.nearbyvehicle);
    // console.log("Vehicles : ",finalsorted);
    response.json({ finalsorted });
}


export const userBookNowVehicleController = async (request, response) => {
    try {
        
        var data = request.body;

        var min = 1000; // Minimum four-digit number
        var max = 9999; // Maximum four-digit number
        var userGetOtp = Math.floor(Math.random() * (max - min + 1)) + min;
        console.log("userGetOtp ", userGetOtp);

        var splitedDataArray = data.bookingdata.split("$$")
        let amount = splitedDataArray[0];
        let droplocation = splitedDataArray[1];
        let enddate = splitedDataArray[2];
        let endtime = splitedDataArray[3];
        let ownerobjid = splitedDataArray[4];
        let pickuplocation = splitedDataArray[5];
        let startDate = splitedDataArray[6];
        let starttime = splitedDataArray[7];
        let vehicleobjid = splitedDataArray[8];
        let totalamount = splitedDataArray[9];
        let gst = splitedDataArray[10];
        let totalHours = splitedDataArray[11];
        let bookingdate = new Date();
        let bookingtime = bookingdate.toTimeString();
        let driver_status = splitedDataArray[12];
        let booking_status = splitedDataArray[13];
        let owneruserid = splitedDataArray[14];

        
        var user = await users.findOne({ email: request.session.log.email });

        await bookings.create({
            customer: user._id,
            owner: owneruserid,
            vehicle: vehicleobjid,
            start_date: startDate,
            end_date: enddate,
            booking_date: bookingdate,
            start_time: starttime,
            end_time: endtime,
            booking_time: bookingtime,
            pickup_location: pickuplocation,
            destination_location: droplocation,
            booking_charges: amount,
            gst_charges: gst,
            total_charges: totalamount,
            total_time: totalHours,
            bookingpin: userGetOtp,
            driver_status: driver_status,
            booking_status :booking_status
        });
        

        response.render("./pages/index", { user: user });
        console.log("===============Booking Successfull===================");
    }
    catch (err) {
        console.log("Error While Booking A Vehicle .. " + err);
        response.render("./pages/index", { user: user });
    }
}

export const userAddInsuranceController = async (request, response) => {
    console.log(request.body);
    
    try {
        var insurance = await vehiclesInsurance.create({
            policy_number: request.body.policynumber,
            policy_holder_name: request.body.policyholdername,
            policy_holder_contact_info: request.body.policyholdercontact,
            policy_holder_aadhar_no: request.body.policyholderaadhar,
            insurance_provider: request.body.insuranceprovider,
            coverage_start_date: request.body.coveragestartdate,
            coverage_end_date: request.body.coverageenddate,
            premium_amount: request.body.insurancepremiumamount,
            coverage_amount: request.body.coverageamount
        });
        await ownerDetails.updateOne({
            "vehicles": {
                $elemMatch: { "reg_number": request.body.registrationNumber }
            }
        },
        {
            $set: {
                "vehicles.$.have_insurance": true,
                "vehicles.$.insurance_details": insurance._id
            }
        });

        console.log("Vehicle Insurance Added Successfully.. ");
        response.render("./pages/user_dashboard", { user: request.session.log});
    } catch (error) {
        console.log("Error While Insurance vehicle." + error);
        response.render("./pages/user_dashboard", { user: request.session.log});
    }
}


export const userViewBookingHistoryController = async (request, response) => {
    try {
        var bookingarray = [];
        var bookingsdata = await bookings.find({ 
            customer: request.session.log._id,
            booking_status : "Completed"
        });

        for (var i = 0; i < bookingsdata.length; i++) {
            var ownerid = bookingsdata[i].owner;
            var vehicleid = bookingsdata[i].vehicle;
            var ownerdata = await users.findOne({ owner_details: ownerid });

            var vehicledata = await ownerDetails.findOne({
                "_id": ownerid,
                "vehicles._id":  vehicleid
            },
            {
                "vehicles.$": 1
            });

            var obj = {
                manufacture_year : vehicledata.manufacture_year,
                vehicle_image : vehicledata.images[0],
                vehicle_company : vehicledata.company,
                vehicle_model : vehicledata.model,
                start_date: bookingsdata[i].start_date,
                end_date: bookingsdata[i].end_date,
                vehicle_reg_no : vehicledata.vehicles[0].reg_number,
                booking_date: bookingsdata[i].booking_date,
                start_time: bookingsdata[i].start_time,
                end_time: bookingsdata[i].end_time,
                booking_time: bookingsdata[i].booking_time,
                total_time: bookingsdata[i].total_time,
                booking_charges: bookingsdata[i].booking_charges,
                gst_charges: bookingsdata[i].gst_charges,
                total_charges: bookingsdata[i].total_charges,
                owner_name : ownerdata.name,
                ownercontact: ownerdata.contact_no,
                owneraddress : ownerdata.address,
            }
            bookingarray.push(obj)
        }
        response.json({ bookings: bookingarray });
    } catch (err) {
        console.log("Error While user view Booking History Controller" + err);
    }
}


// Pending
export const userDeleteVehicleController = async (request, response) => {
    var id = request.body.vehicleid;
    try {
        await ownerDetails.updateOne(
            { _id: request.session.log.owner_details,},
            { $pull: { vehicles: { _id: id, is_booked:false} } }
        );
    } catch (error) {
        console.log(error)
    }
}


// Pending
export const userDeleteDriverController = async (request, response) => {
    console.log('inside userDeleteDriverController');
    
    var id = request.body.driverid;

    try {
        await ownerDetails.updateOne(
            { _id: request.session.log.owner_details},
            { $pull: { drivers: { _id: id } } }
        );
    } catch (error) {
        console.log(error)
    }
}

export const userUpdateInsuranceController = async (request, response) => {
    try {
        var res = await vehiclesInsurance.findOne({ _id: request.body.id })
        response.json({ data: res });
    } catch (err) {
        console.log("Error While user view Booking History Controller" + err);
    }
}

export const userUpdateVehicleInsuranceDetailsController = async (request, response) => {
    try {
        await vehiclesInsurance.updateOne({ _id: request.body.insuranceid },
            {
                $set: {
                    policy_number: request.body.policynumber,
                    policy_holder_name: request.body.policyholdername,
                    policy_holder_contact_info: request.body.policyholdercontact,
                    policy_holder_aadhar_no: request.body.policyholderaadhar,
                    insurance_provider: request.body.insuranceprovider,
                    coverage_start_date: request.body.coveragestartdate,
                    coverage_end_date: request.body.coverageenddate,
                    premium_amount: request.body.insurancepremiumamount,
                    coverage_amount: request.body.coverageamount
                }
            });

        var loggedUser = await users.findOne({ email: request.session.log.email });
        var loggedOwnerDetails = await ownerDetails.findOne({
            _id: loggedUser.owner_details
        });
        request.session.log = loggedUser;
        request.session.ownerDetails = loggedOwnerDetails;
        request.session.role = "user";
        request.session.save();

        response.render("./pages/user_dashboard", { user: request.session.log });
        console.log("Insurance Updated Successfully");

    } catch (err) {
        console.log("Error while Update Vehicle Insurance Controller" + err);
        response.render("./pages/user_dashboard", { user: request.session.log, result: "" });
    }
}

// Owner Dashboard
export const userVehicleBookingRequestDataController = async (request, response) => {
    try {
        console.log("123");
        var userbookings = [];
        // console.log(request.session.log);
        var res = request.session.log._id;
        // console.log(res);

        var vehiclebookings = await bookings.find({
            $and : [
                { owner: request.session.log._id },
                {booking_status : "Pending"}
            ]
        });
        console.log("check : ",vehiclebookings);

        for (var i = 0; i < vehiclebookings.length; i++) {
            var userid = vehiclebookings[i].customer;
            var ownerid = vehiclebookings[i].owner;
            var vehicleid = vehiclebookings[i].vehicle;

            var userdetails = await users.findOne({_id : userid});
            // console.log("Userdagta :  ",userdata);
            console.log("check 4 : ",userdetails);
            const ownerDetailsDocument = await ownerDetails.findOne({ _id: userdetails.owner_details });
            console.log("check 3 : ",ownerDetailsDocument);
            if (ownerDetailsDocument) {
                const specificVehicle = ownerDetailsDocument.vehicles.find(vehicle => vehicle._id.toString() === vehicleid.toString());

                if (specificVehicle) {
                    // console.log(specificVehicle);
                }
            
                var obj = { 
                    username : userdetails.name,
                    usercontact : userdetails.contact_no,
                    total_time : vehiclebookings[i].total_time,
                    startdate :  vehiclebookings[i].start_date,
                    start_time : vehiclebookings[i].start_time,
                    vehicle_reg_no : specificVehicle.reg_number,
                    totalamount :  vehiclebookings[i].total_charges,
                    bookingid : vehiclebookings[i]._id
                }
                userbookings.push(obj);
                console.log("check 2 : ", userbookings);
            }
        }
        console.log("Requested Booking Data : ",userbookings);
        response.json({ vehiclebookings: userbookings })
    } catch (error) {
        console.log("Error while Fetching Requested Booking Data for Owner Dashboard : ",error);
    }
}



export const userUpdateUserDataController = async(request,response) => {
    console.log("user Update User Data Controller ");
    
    console.log(request.body.id);
    try{
        var user = await users.findOne({_id : request.body.id});
        response.json({data : user});

    }catch(err){
        console.log("Error While Update User Profile Data Controller");
    }
}

export const userAcceptOwnerBookingController = async(request,response) => {
    try {
        await bookings.updateOne({_id : request.body.id
        },
        {$set : {
            booking_status : "Confirm"
        }
    })
    } catch (error) {
        console.log("Error While Owner Accept Booking Controller");
    }
}


export const userOwnerCurrentBookingDataController = async(request,response) => {
    try {
        var userbookings = [];
        var owner_userid = request.session.log._id;
        var ownerid = request.session.log.owner_details;

        var currentbookings = await bookings.find({
            $or:[ 
                {
                    $and : [
                        {   
                            owner: owner_userid 
                        },
                        {   
                            booking_status : "Confirm"
                        }
                    ]
                },
                {
                    $and : [
                        {   
                            owner: owner_userid 
                        },
                        {   
                            booking_status : "Running"
                        }
                    ]
                }
            ]
        });
        console.log(currentbookings);
        
        var ownerDetail = await ownerDetails.findOne({ _id: ownerid });
        console.log(ownerDetail);
        
        for (var i = 0; i < currentbookings.length; i++) {
            var customerid = currentbookings[i].customer;
            var vehicleid = currentbookings[i].vehicle;

            var customerDetails = await users.findOne({_id : customerid});

            if (ownerDetail) {
                var specificVehicle = ownerDetail.vehicles.find(vehicle => vehicle._id.toString() === vehicleid.toString()) ?? {};
                console.log('sv : ',specificVehicle);
                
                var obj = { 
                    username : customerDetails.name,
                    usercontact : customerDetails.contact_no,
                    total_time : currentbookings[i].total_time,
                    startdate :  currentbookings[i].start_date,
                    start_time : currentbookings[i].start_time,
                    endDate :  currentbookings[i].end_date,
                    end_time : currentbookings[i].end_time,
                    vehicle_reg_no : specificVehicle.reg_number,
                    company_name : specificVehicle.company,
                    modelname : specificVehicle.model,
                    manufacture_year : specificVehicle.manufacture_year,
                    rent : specificVehicle.rent,
                    booking_status : currentbookings[i].booking_status,
                    totalamount :  currentbookings[i].total_charges,
                    bookingid : currentbookings[i]._id,
                    havedriver : specificVehicle.driver,
                    drivers : ownerDetail.drivers,
                    completion_pin : currentbookings[i].completion_pin,
                    payment_status : currentbookings[i].payment_status
                }
                userbookings.push(obj);
            }
        }
        console.log("check 1 : ", userbookings);
        response.json({ bookings: userbookings })
    } catch (err) {
        console.log("Error While Fetching Current Booking Controller. \n"+err);
    }
}


export const userVerifyBookingStartPinController = async(request,response)=>{
    try{
        var bookingDetail = await bookings.findOne({_id : request.body.bookingid});
        if(bookingDetail.bookingpin==request.body.pin){
            var min = 1000; 
            var max = 9999;
            var completionPin = Math.floor(Math.random() * (max - min + 1)) + min;
            await bookings.updateOne(
                {
                    _id : request.body.bookingid
                },
                {
                    $set : {
                        booking_status : "Running",
                        completion_pin : completionPin
                    }
                }
            );
            response.json({message: true});
        }else{
            response.json({message : false});
        }
    }catch(error){
        console.log(error);
    }
}

export const userWalletDataController = async(request,response)=>{
    try{
        var walletdata = await wallets.findOne({_id:request.session.log.wallet});
        console.log(walletdata)
        response.json({wallet : walletdata});
    }catch(error){
        console.log(error);
    }
}

export const userOwnerDriverDataController = async(request,response)=>{
    try{
        var ownerDetail = await ownerDetails.findOne({_id:request.session.log.owner_details});
        console.log(ownerDetail.drivers)
        response.json({drivers : ownerDetail.drivers});
    }catch(error){
        console.log(error);
    }
}


export const userOwnerVehicleDataController = async(request,response)=>{
    try{
        var ownerDetail = await ownerDetails.findOne({_id:request.session.log.owner_details});
        console.log(ownerDetail.vehicles)
        response.json({vehicles : ownerDetail.vehicles});
    }catch(error){
        console.log(error);
    }
};

// pending 
export const userRequestedBookingDataController = async(request,response)=>{//user dashboard
    console.log("hiii");
    try{
        var bookingDetails = await bookings.find(
            {
                $and:[
                    {
                        customer:request.session.log._id
                    },
                    {
                        booking_status : "Pending"
                    }
                ]
                
            }
        );
        console.log(bookingDetails)
        // if(bookingDetails)
        var data = [];
        for(let i=0;i<bookingDetails.length;i++){
            console.log('bookign details : ',bookingDetails[i]);
            
            var ownerdata = await users.findOne({
                "_id" : bookingDetails[i].owner 
            }) ;

            var vehicledata = await ownerDetails.findOne({
                $and:[
                    {   
                        "_id": ownerdata.owner_details
                    },
                    { 
                        "vehicles._id":  bookingDetails[i].vehicle
                    }
                ]
            },
            {
                "vehicles.$": 1
            });
            console.log('vehicle data : ', vehicledata);
            console.log('Owner data : ',ownerdata);
            
            var details = {
                bookingid : bookingDetails[i]._id,
                reg_no : vehicledata.vehicles[0].reg_number,
                company : vehicledata.vehicles[0].company,
                model : vehicledata.vehicles[0].model,
                owner : ownerdata.name,
                contact_no : ownerdata.contact_no,
                booking_date : bookingDetails[i].booking_date,
                hours : bookingDetails[i].total_time,
            }
            data.push(details);
            console.log(details)
        }
        console.log(data);
        response.json({bookings : data});
    }catch(error){
        console.log("Error while Fetching Requested Booking Data for User Dashboard : ",error);
    }
}

export const userCancelBookingController = async(request,response)=>{
    console.log('booking id :',request.body.bookingid);
    
    try{
        await bookings.updateOne({
            "_id" : request.body.bookingid
        },{
            $set:{
                "booking_status" : "Cancelled"
            }
        });
        var bookingdata = await bookings.findOne({"_id" : request.body.bookingid});
        var ownerdata = await users.findOne({"_id" : bookingdata.owner});
        await ownerDetails.updateOne({
            "vehicles": {
                $elemMatch: { "_id": bookingdata.vehicle }
            }
        },
        {
            $set: {
                "vehicles.$.is_booked": false,
            }
        })
    }catch(error){
        console.log('Error while userCancelBookingController : ',error );
    }
}

export const userCurrentBookingDataController = async(request,response)=>{
    try{
        var bookingDetails = await bookings.find(
            {
                $or:[
                    {
                        $and:[
                            {
                                customer:request.session.log._id
                            },
                            {
                                booking_status : "Running"
                            }
                        ]
                    },
                    {
                        $and:[
                            {
                                customer:request.session.log._id
                            },
                            {
                                booking_status : "Confirm"
                            }
                        ]
                    },
                ]
                
            }
        );
        console.log(bookingDetails)
        // if(bookingDetails)
        var data = [];
        for(let i=0;i<bookingDetails.length;i++){
            var owner_userDetails = await users.findOne({_id:bookingDetails[i].owner},{owner_details:1});
            console.log("check : ",owner_userDetails);
            var vehicledata = await ownerDetails.findOne({
                "_id":owner_userDetails.owner_details,
                "vehicles._id":  bookingDetails[i].vehicle
            },
            {
                "vehicles.$": 1
            });
            console.log("check 1 : ",vehicledata);
            var details = {
                bookingid : bookingDetails[i]._id,
                reg_no : vehicledata.vehicles[0].reg_number,
                company : vehicledata.vehicles[0].company,
                model : vehicledata.vehicles[0].model,
                contact_no : request.session.log.contact_no,
                booking_date : bookingDetails[i].booking_date,
                hours : bookingDetails[i].total_time
            }
            data.push(details);
            console.log(details)
        }
        console.log(data);
        response.json({bookings : data});
    }catch(error){
        console.log(error);
    }
}
// export const userCurrentBookingDataController = async(request,response)=>{
//     try{
//         var bookingDetails = await bookings.find(
//             {
//                 $and:[
//                     {
//                         customer:request.session.log._id
//                     },
//                     {
//                         $or:[
//                             {

//                                 booking_status : "Running"
//                             },{
//                                 booking_status : "Confirm"
//                             }
//                         ]
//                     }
//                 ]
                
//             }
//         );
//         console.log(bookingDetails)
//         // if(bookingDetails)
//         var details = {
//             bookingid : bookingDetails._id,
//             reg_no : bookingDetails.reg_number,
//             company : bookingDetails.company,
//             model : bookingDetails.model,
//             contact_no : request.session.log.contact_no,
//             booking_date : bookingDetails.booking_date,
//             hours : bookingDetails.total_time
//         }
//         console.log(details)
//         response.json({bookings : details});
//     }catch(error){
//         console.log(error);
//     }
// }


export const userNewsLetterController = async(request,response) => {
    try {
        var newslett = await newsletter.create({
            email : request.body.email
        })
        console.log("Data Inserted Successfully ");
        response.render("./pages/index", { user: request.session.log });
    } catch (error) {
        console.log("Error While "+error);
        response.render("./pages/index", { user: request.session.log });
    }
}

export const userUploadProfileImageController = async(request,response) => {
    try {
        // console.log("Inside Profile image ");
        
        await users.updateOne({
            _id : request.session.log._id
        },
        {
        $set : {
            profile_img : request.file.filename
            }
        })
        var loggedUser = await users.findOne({ email: request.session.log.email });
        var loggedOwnerDetails = await ownerDetails.findOne({
            _id: loggedUser.owner_details
        });

        request.session.log = loggedUser;
        request.session.ownerDetails = loggedOwnerDetails;
        request.session.role = "user";
        request.session.save();
        console.log("Profile Updated Successfully");
        response.render("./pages/user_dashboard", { user: request.session.log });
       
    } catch (error) {
        console.error('Error uploading User Profile image');
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}

export const userUpdateProfileController = async (request, response) => {
    try {

        // console.log(request.body);
        await users.updateOne({
            _id: request.session.log._id
        },
            {
                $set: {
                    name: request.body.name,
                    gender: request.body.gender,
                    address: request.body.address,
                    pin_code: request.body.pincode,
                    state: request.body.state,
                    city: request.body.city
                }
            });

        var loggedUser = await users.findOne({ email: request.session.log.email });
        var loggedOwnerDetails = await ownerDetails.findOne({
            _id: loggedUser.owner_details
        });

        request.session.log = loggedUser;
        request.session.ownerDetails = loggedOwnerDetails;
        request.session.role = "user";
        request.session.save();
        console.log("Profile Updated Successfully");
        response.render("./pages/user_dashboard", { user: request.session.log });
    } catch (error) {
        console.log("Error While Updating User Profile Controller" + error);
        response.render("./pages/user_dashboard", { user: request.session.log });
    }
}