// Function number : 4
/* ------------------  Dashboard Details  ----------------------------- */

function dashboardChoices(option) {
    if (option === "my-profile") {
        document.getElementById('my-profile').style.display = 'block'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === "user-current-bookings") {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "block";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'user-requested-bookings') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'block'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'user-booking-history') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'block'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option == 'owner-vehicles') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'block'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'owner-drivers') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'block'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'owner-current-bookings') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'block'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'owner-booking-request') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'block'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'owner-vehicle-booking-history') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'block';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option === 'my-wallet') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'block';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option == 'create-password') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'block';
        document.getElementById('change-password').style.display = 'none';
    }
    else if (option == 'change-password') {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('user-current-bookings').style.display = "none";
        document.getElementById('user-requested-bookings').style.display = 'none'
        document.getElementById('user-booking-history').style.display = 'none'
        document.getElementById('owner-vehicles').style.display = 'none'
        document.getElementById('owner-drivers').style.display = 'none'
        document.getElementById('owner-current-bookings').style.display = 'none'
        document.getElementById('owner-booking-request').style.display = 'none'
        document.getElementById('owner-vehicle-booking-history').style.display = 'none';
        document.getElementById('my-wallet').style.display = 'none';
        document.getElementById('create-password').style.display = 'none';
        document.getElementById('change-password').style.display = 'block';
    }
}

/* ------------------------------ Validation Start ------------------------------------ */

/*--------------------Change Password Start ---------------------------- */
function checkChangeOldPass4() {
    // console.log("hiii");
    let oldpassword = document.getElementById('changeoldpassword');

    let valid = false;
    let oldpassword_input = oldpassword.value.trim();

    if (!isRequired4(oldpassword_input)) {
        showError4(oldpassword, "password cannot be blank.")
    }
    else if (!isValidPass4(oldpassword_input)) {
        showError4(oldpassword, "password is not valid.")
    }
    else {
        showSuccess4(oldpassword);
        valid = true;
    }
    return valid;
}

function checkChangeNewPass4() {
    let newpassword = document.getElementById('changenewpassword');

    let valid = false;
    let newpassword_input = newpassword.value.trim();

    if (!isRequired4(newpassword_input)) {
        showError4(newpassword, "password cannot be blank.")
    }
    else if (!isValidPass4(newpassword_input)) {
        showError4(newpassword, "password is not valid.")
    }
    else {
        showSuccess4(newpassword);
        valid = true;
    }
    return valid;
}

function checkChangeCnfPass4() {

    let newpassword = document.getElementById('changenewpassword');
    let cnfpassword = document.getElementById('changecnfpassword');

    let valid = false;
    let newpassword_input = newpassword.value.trim();

    if (!isRequired4(newpassword_input)) {
        showError4(cnfpassword, "First enter the new password.");
    }
    else {
        let cnfpassword_input = cnfpassword.value.trim();

        if (!isRequired4(cnfpassword_input)) {
            showError4(cnfpassword, "password cannot be blank.")
        }
        else if (!isValidPass4(cnfpassword_input)) {
            showError4(cnfpassword, "password is not valid.");
        }
        else {
            if (!isCheckValidCnfPass(newpassword_input, cnfpassword_input)) {
                showError4(cnfpassword, "password mismatched enter correct password.");
            }
            else {
                showSuccess4(cnfpassword);
                valid = true;
            }
            return valid;
        }
    }
}

function submitchangepassword() {
    if (checkChangeOldPass4() && checkChangeNewPass4 && checkChangeCnfPass4) {
        return true;
    } else {
        checkChangeOldPass4();
        checkChangeNewPass4();
        checkChangeCnfPass4();
        return false;
    }
}
/*--------------------Change Password End ---------------------------- */


/*--------------------Create Password Start ---------------------------- */
function createCheckNewPass4() {
    let newpass = document.getElementById('createnewpass');
    console.log("hi..");
    let valid = false;
    let newpass_input = newpass.value.trim();

    if (!isRequired4(newpass_input)) {
        showError4(newpass, "password cannot be blank.");
    }
    else if (!isValidPass4(newpass_input)) {
        showError4(newpass, "password is not valid.");
    } else {
        showSuccess4(newpass);
        valid = true;
    }
    return valid;
}

function createCheckCnfPass4() {
    let newpass = document.getElementById('createnewpass');
    let cnfpass = document.getElementById('createconfirmpass');

    let valid = false;
    let newpass_input = newpass.value.trim();

    if (!isRequired4(newpass_input)) {
        showError4(cnfpass, "First enter the new password.");
        return valid;
    }
    else {
        let cnfpass_input = cnfpass.value.trim();

        if (!isRequired4(cnfpass_input)) {
            showError4(cnfpass, "password cannot be blank.");
        }
        else if (!isValidPass4(cnfpass_input)) {
            showError4(cnfpass, "password is not valid.");
        }
        else {
            if (!isCheckValidCnfPass(newpass_input, cnfpass_input)) {
                showError4(cnfpass, "password mismatched enter correct password.");
            }
            else {
                showSuccess4(cnfpass);
                valid = true;
            }

        }
        return valid;
    }
}

function submitCreateFormData() {
    if (createCheckNewPass4() && createCheckCnfPass4()) {
        return true
    }
    else {
        createCheckNewPass4();
        createCheckCnfPass4();
        return false;
    }
}
/*--------------------Create Password End ---------------------------- */


function isRequired4(value) {
    if (value == "")
        return false;
    else
        return true;
}

function isValidPass4(password) {
    const res = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    // console.log('hiiiii : '+password);
    return res.test(password);
}

function isCheckValidCnfPass(newpass, cnfpass) {
    if (newpass == cnfpass)
        return true;
    else
        return false;
}

function showError4(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess4(input) {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}
/* ------------------------------ Validation End -------------------------------------- */





/*----------------- show user requested booking data start---------------*/
var showUserRequestedBookingData = async()=>{
    const response = await fetch('/user/userrequestedbookingdata');
    const data = await response.json();
    console.log(data)
    const bookingData = data.bookings;
    console.log(bookingData)
    var table = "";
    table += ` <table class="table table-striped" border="1" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;" align="center">`;
    if(bookingData.length>0){
        table += `
            <thead  align="center">
                <th>Reg No</th>
                <th>Company</th>
                <th>Model</th>
                <th>Owner</th>
                <th>Contact No</th>
                <th>Booking Date</th>
                <th>Hours</th>
                <th>Action</th>
            </thead>
            <tbody> `        

            bookingData.forEach(booking => {
                table += 
                `<tr align="center">
                    <td >${booking.reg_no}</td>
                    <td >${booking.company}</td>
                    <td >${booking.model}</td>
                    <td >${booking.owner}</td>
                    <td >${booking.contact_no}</td>
                    <td >${booking.booking_date}</td>
                    <td >${booking.hours}</td>
                    <td >
                        <form action="/user/cancelbooking" method="post">
                            <input type="text" class="d-none" name="bookingid" value="${booking.bokingid}">
                            <input type="submit" class="btn btn-danger"  value="Cancel"  >
                        </form>
                    </td>
                </tr>`
            });
            table += " <tbody>";
    }else{
        table+=`<tbody><tr><td class="fw-bold text-danger" style="padding-top:15%; padding-left:40%; font-size:2rem; border-bottom-width:0px; box-shadow:inset 0 0 0 0px var(--bs-table-accent-bg)">No Requested Booking Found</td></tr></tbody>`;
    };
    table += "</table>";
    document.getElementById('user-requested-booking-data').innerHTML = table;
}
/*----------------- show user requested booking data start---------------*/

    
/*----------------- show user Currrent booking data start---------------*/
var showUserCurrentBookingData = async()=>{
    const response = await fetch('/user/usercurrentbookingdata');
    const data = await response.json();
    console.log(data);
    
    const bookingData = data.bookings ?? [];
    // console.log(bookingData.bookings)

    var table = "";
    table += ` <table class="table table-striped" border="1" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;" align="center">`;
    if(bookingData.length>0){///////
        table += `
            <thead  align="center">
                <th>Reg No</th>
                <th>Company</th>
                <th>Model</th>
                <th>Contact No</th>
                <th>Booking Date</th>
                <th>Hours</th>
                <th>Action</th>
            </thead>
            <tbody> `        

            bookingData.forEach(booking => {
                table += 
                `<tr align="center">
                    <td >${booking.reg_no}</td>
                    <td >${booking.company}</td>
                    <td >${booking.model}</td>
                    <td >${booking.contact_no}</td>
                    <td >${booking.booking_date}</td>
                    <td >${booking.hours}</td>
                    <td >
                        <form action="/user/cancelbooking" method="post">
                            <input type="text" class="d-none" name="bookingid" value="${booking.bokingid}">
                            <input type="submit" class="btn btn-danger"  value="Cancel"  >
                        </form>
                    </td>
                </tr>`
            });
            table += " <tbody>";
    }else{
        table+=`<tbody><tr><td class="fw-bold text-danger" style="padding-top:15%; padding-left:40%; font-size:2rem; border-bottom-width:0px; box-shadow:inset 0 0 0 0px var(--bs-table-accent-bg)">No Current Bookings Found</td></tr></tbody>`;
    };
    table += "</table>";
    document.getElementById('user-current-bookigs-data').innerHTML = table;
}
/*----------------- show user Current booking data end---------------*/




/* -----------------owner vehicle bookinigs Request start ----------------------------*/
var showBookingRequestData = async function(e){
    // e.preventDefault();
    // console.log("Hiiiiiiiii");

    const response = await fetch('/user/ownervehiclebookingrequestdata')
    console.log("server response",response);
    const data = await response.json();
    console.log("Booking Requests : ",data.vehiclebookings);

    var owner_vehicle_booking = data.vehiclebookings;

    var table = "";
    table += ` <table class="table table-striped" border="1" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;" >`;
    if(owner_vehicle_booking.length>0){
        table += `
            <thead align="center">
                <th>User Name</th>
                <th>Contact</th>
                <th>Start Date</th>
                <th>Start Time</th>
                <th>Total Time</th>
                <th>Vehicle Reg.No.</th>
                <th>Estimated Cost</th>
                <th>Accept Booking</th>
                <th>Decline Booking</th>
            </thead>
            <tbody> `        

            owner_vehicle_booking.forEach(element => {
               
                const start_date = element.startdate;
                const date2 = new Date(start_date);
                const day2 = date2.getDate().toString().padStart(2, '0');
                const month2 = (date2.getMonth() + 1).toString().padStart(2, '0');
                const year2 = date2.getFullYear();
        
                // Format the date as "dd-mm-yyyy"
                const startDate1 = `${day2}-${month2}-${year2}`
        
                table += 
                `<tr align="center">
                    <td >${element.username}</td>
                    <td >${element.usercontact}</td>
                    <td >${startDate1}</td>
                    <td >${element.start_time}</td>
                    <td >${element.total_time} hr</td>
                    <td >${element.vehicle_reg_no}</td>
                    <td >&#8377;${element.totalamount}</td>
                    <td ><button class="btn btn-success text-light" onclick = "ownerAcceptRequest('${element.bookingid}');showBookingRequestData()">Accept</button></td>
                    <td ><button class="btn btn-danger text-light" onclick = "">Decline</button></td>
                </tr>`
            });
            table += " <tbody>";
    }else{
        table+=`<tbody><tr><td class="fw-bold text-danger" style="padding-top:15%; padding-left:40%; font-size:2rem; border-bottom-width:0px; box-shadow:inset 0 0 0 0px var(--bs-table-accent-bg)">No Request Found</td></tr></tbody>`;
    };
    table += "</table>";
    document.getElementById('owner-booking-request-data').innerHTML = table;
}
/* ---------------------------owner vehicle bookinigs Request end ------------------------------------------ */


/* --------------------------- Delete Drivers Start ------------------------------------------ */
var deleteDrivers = ()=>{
    //    e.preventDefault();
    setTimeout(showOwnerDrivers,100);
}
 /* --------------------------- Delete Drivers end ------------------------------------------ */
    
    

/* ----------------Show owner Drivers start ----------------------------*/
var showOwnerDrivers = async function(){
    // e.preventDefault();

    const response = await fetch('/user/ownerdriverdata')
    const driverData = await response.json();
    console.log(driverData)
    var table = "";
    table += ` <table class="table table-striped" border="1" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;" align="center">`;
    if(driverData.drivers.length>0){
        table += `
            <thead  align="center">
                <th>Name</th>
                <th>Gender</th>
                <th>Contact No</th>
                <th>Email</th>
                <th>Action</th>
            </thead>
            <tbody> `        

            driverData.drivers.forEach(driver => {
                table += 
                `<tr align="center">
                    <td >${driver.name}</td>
                    <td >${driver.gender}</td>
                    <td >${driver.contact_no}</td>
                    <td >${driver.email}</td>
                    <td >
                        <form action="/user/deletedriver" method="post">
                            <input type="text" class="d-none" name="driverid" value="${driver._id}">
                            <input type="submit" class="btn btn-danger"  value="Delete"  onclick="deleteDrivers();">
                        </form>
                    </td>
                </tr>`
            });
            table += " <tbody>";
    }else{
        table+=`<tbody><tr><td class="fw-bold text-danger" style="padding-top:15%; padding-left:40%; font-size:2rem; border-bottom-width:0px; box-shadow:inset 0 0 0 0px var(--bs-table-accent-bg)">No Drivers Found</td></tr></tbody>`;
    };
    table += "</table>";
    document.getElementById('owner-driver-list-data').innerHTML = table;
}
/* --------------------------- Show owner Drivers end ------------------------------------------ */


/* --------------------------- Delete Vehicles Start ------------------------------------------ */
var deleteVehicles = ()=>{
    //    e.preventDefault();
    setTimeout(showOwnerVehicles,100);
}
 /* --------------------------- Delete Vehicles end ------------------------------------------ */
  

/* ----------------Show owner Drivers start ----------------------------*/
var showOwnerVehicles = async function(){
    const response = await fetch('/user/ownervehicledata');
    const vehicleData = await response.json();
    console.log(vehicleData)
    var table = "";
    table += ` <table class="table table-striped mt-1" border="1" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;" align="center">`;
    if(vehicleData.vehicles.length>0){
        table += `
            <thead  align="center">
                <th>Reg No</th>
                <th>Company</th>
                <th>Model</th>
                <th>Insurance</th>
                <th>Action</th>
            </thead>
            <tbody> `        

            vehicleData.vehicles.forEach(vehicle => {
                console.log('insurance : ',vehicle.insurance_details);
                $(document).ready(function () {
                    console.log('ready');
                    
                    $('.open-modal').click(function () {
                        var _id = $(this).data('insurance_id');
                        console.log(_id);
                        
                        var postData = {
                            id: _id
                        };
                
                        $.ajax({
                            url: '/user/updateinsurance',
                            type: 'POST',
                            data: JSON.stringify(postData),
                            contentType: 'application/json',
                            success: function (response) {
                                console.log('Success:', response);
                
                                const coveragestart1 = response.data.coverage_start_date;
                                const date1 = new Date(coveragestart1);
                                const day1 = date1.getDate().toString().padStart(2, '0');
                                const month1 = (date1.getMonth() + 1).toString().padStart(2, '0');
                                const year1 = date1.getFullYear();
                                const coverage_start_date = `${year1}-${month1}-${day1}`;
                
                                const bookDate = response.data.coverage_end_date;
                                const date2 = new Date(bookDate);
                                const day2 = date1.getDate().toString().padStart(2, '0');
                                const month2 = (date1.getMonth() + 1).toString().padStart(2, '0');
                                const year2 = date1.getFullYear();
                                const coverage_end_date = `${year1}-${month1}-${day1}`
                
                                $('#insuranceid').val(response.data._id);
                                $('#policynumber').val(response.data.policy_number);
                                $('#policyholdername').val(response.data.policy_holder_name);
                                $('#policyholdercontact').val(response.data.policy_holder_contact_info);
                                $('#policyholderaadhar').val(response.data.policy_holder_aadhar_no);
                                $('#coveragestartdate').val(coverage_start_date);
                                $('#coverageenddate').val(coverage_end_date);
                                $('#insurancepremiumamount').val(response.data.premium_amount);
                                $('#coverageamount').val(response.data.coverage_amount);
                                $('#insuranceprovider').val(response.data.insurance_provider);
                            },
                            error: function (xhr, status, error) {
                                console.error('Error:', status, error);
                            }
                        });
                
                    });
                });
                
                table += 
                `<tr align="center">
                    <td >${vehicle.reg_number}</td>
                    <td >${vehicle.company}</td>
                    <td >${vehicle.model}</td>`;
                    if(vehicle.have_insurance){
                        table += `<td><button class="open-modal btn btn-success" data-bs-toggle="modal" data-bs-target="#updateinsurance" data-insurance_id="${vehicle.insurance_details}" >Update</button></td>`;
                    }else{
                        table += `<td><button class="btn btn-success" data-bs-toggle="modal" data-bs-target="#vehicle_insurance" onClick="setRegistrationNo('${vehicle.reg_number}')">Add</button></td>`;
                    }
        table += `  <td >
                        <form action="/user/deletevehicle" method="post">
                            <input type="text" class="d-none" name="vehicleid" value="${vehicle._id}">
                            <input type="submit" class="btn btn-danger"  value="Delete"  onclick="deleteVehicles();">
                        </form>
                    </td>
                </tr>`
            });
            table += " <tbody>";
    }else{
        table+=`<tbody><tr><td class="fw-bold text-danger" style="padding-top:15%; padding-left:40%; font-size:2rem; border-bottom-width:0px; box-shadow:inset 0 0 0 0px var(--bs-table-accent-bg)">No Vehicles Found</td></tr></tbody>`;
    };
    table += "</table>";
    document.getElementById('owner-vehicle-list-data').innerHTML = table;
}
/* --------------------------- Show owner Drivers end ------------------------------------------ */
                    

/* --------------------------- SetRegistrationNo Start ------------------------------------------ */
var setRegistrationNo = (reg_no)=>{
    
    document.getElementById('registrationNumber').value = reg_no;
    console.log(document.getElementById('registrationNumber').value);
    
}
/* --------------------------- SetRegistrationNo End ------------------------------------------ */



/* --------- Accept Request start ------------------ */
async function ownerAcceptRequest(id){
    console.log("Inside Owner Accept request");
    var obj = { 
        id : id
    }
    
    var response = await fetch('/user/acceptbooking', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    });
}
/* --------- Accept Request end ------------------ */


/* -----------Update Details start ----------;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;*/
$(document).ready(function () {
    $('.open-modal-user').click(function () {

        var _id = $(this).data('user_details'); // Correct the data attribute name
        console.log("Id=>", _id);

        var postData = {
            id: _id
        };
        $.ajax({
            url: '/user/updateuserdata',
            type: 'POST',
            data: JSON.stringify(postData),
            contentType: 'application/json',
            dataType: 'json', // Specify the expected data type
            success: function (response) {
                console.log('Success:', response);
                $('#username').val(response.data.name);
                $('#useraddress').val(response.data.address);
                $('#userpincode').val(response.data.pin_code);
                $('#userupdatestate').val(response.data.state).change();
                $('#userupdatecity').val(response.data.city);
                $('#useraadharnumber').val(response.data.aadhar_number);
                $('#userpannumber').val(response.data.pan_number);
            },
            error: function (xhr, status, error) {
                console.error('Error:', status, error);
            }
        });
    });
});
/* ------------Update Details end-------------  */



/*------------------------------ howDataAfterBookingStartVerifyPin Start --------------------------------- */
var showDataAfterBookingStartVerifyPin = ()=>{
    setTimeout(showOwnerCurrentBookings,10)
}
/*------------------------------ howDataAfterBookingStartVerifyPin Start --------------------------------- */



/*------------------------------ Show Owner Current Booking Start --------------------------------- */
var showOwnerCurrentBookings =  async function(){
    var bookingdata = ``;
    const response = await fetch('/user/ownercurrentbookingdata')
    console.log("server response",response);
    const data = await response.json();
    var currentbookings = data.bookings;
    console.log(currentbookings);
    if(currentbookings.length>0){

        currentbookings.forEach((element) => {
            var manufacture = new Date(element.manufacture_year).getFullYear();
            const start_date = element.startdate;
            const date3 = new Date(start_date);
            const day3 = date3.getDate().toString().padStart(2, '0');
            const month3 = (date3.getMonth() + 1).toString().padStart(2, '0');
            const year3 = date3.getFullYear();

            // Format the date as "dd-mm-yyyy"
            const startDate3 = `${day3}-${month3}-${year3}`

            const date4 = new Date(element.endDate);
            const day4 = date4.getDate().toString().padStart(2, '0');
            const month4 = (date4.getMonth() + 1).toString().padStart(2, '0');
            const year4 = date4.getFullYear();

            // Format the date as "dd-mm-yyyy"
            const endDate3 = `${day3}-${month3}-${year3}`
            bookingdata += 
            `<div class="row ">
                <div class="col-md-12">
                    <div class="card shadow-0 border rounded-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-3 col-lg-3 ">
                                    <h5>${element.username}</h5>
                                    <span>${element.usercontact}</span>
                                    <div class="row">
                                        <div class="mt-1 mb-0 text-muted small">
                                            <label for="">Reg No. </label>
                                            <span>${element.vehicle_reg_no}</span><br>
                                            <span class=""> ${element.company_name} ${element.modelname}  (${manufacture}) </span><br>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-3 col-lg-3  border-sm-start-none border-start">
                                    <div class="row">
                                        <div class=""> <span class="text-dark">Start Date : ${startDate3}  ${element.start_time}</span></div>
                                        <div class=""> <span class="text-dark">End Date  : ${endDate3} ${element.end_time}</span></div>`;
                                        if(element.booking_status== "Confirm" && element.drivers && element.havedriver && element.drivers.length>0){
                                            bookingdata += `<select class="form-control w-75 m-2" name="" id="">
                                            <option value="">Select Driver</option>`;
                                            for(let i=0; i< element.drivers.length;i++){
                                                bookingdata += `<option value="${element.drivers[i]._id}">${element.drivers[i].name}</option>`;
                                            }
                                            bookingdata += `</select>`;
                                        }
                                        // if(element.booking_status=="Running"){
                                        //     bookingdata += `<div class=""> <span class="text-dark">Real Start Date : ${element.real_start_date}  ${element.real_start_time}</span></div>
                                        //     <div class=""> <span class="text-dark">Real End Date  : ${element.real_end_date} ${element.real_end_time}</span></div>`;
                                        // }
                    bookingdata += `</div>
                                </div>
                                <div class="col-md-3 col-lg-3 border-sm-start-none border-start">
                                    <div class="d-flex mb-1 flex-column">
                                        <div>Total Hours   : <span class="text-success fw-bold">${element.total_time}</span></div>
                                        <div>Per Hour Fare : <span class="text-success fw-bold">&#8377; ${element.rent}</span></div>
                                        <div>Total Fare    : <span class="text-success fw-bold">&#8377; ${element.totalamount}</span></div>`;
                                        if(element.payment_status=="Pending"){
                                            bookingdata += `<div>Payment Status: <span class="text-danger fw-bold">${element.payment_status}</span></div>`;
                                        }else{
                                            bookingdata += `<div>Payment Status: <span class="text-success fw-bold">${element.payment_status}</span></div>`;
                                        }
                    bookingdata +=` </div>
                                </div>    
                                <div class="col-md-3 col-lg-3 border-sm-start-none border-start">
                                    <div class="d-flex  mb-1 flex-column">`;
                                    if(element.booking_status=="Confirm"){
                                        bookingdata += `
                                            <input type="text" class="form-control" placeholder="Enter Pin" name = "verifypin" id="verifypin">
                                            <span class="text-danger" style="display:none;" id="warning-msg" >Invalid Pin</span>
                                            <input type="submit" class="btn btn-outline-success w-100 mt-2 fw-bold border border-2" id = "verifybtn" onclick="checkVerifyPin('${element.bookingid}');" value="Verify Pin">
                                        `;
                                    }else if(element.booking_status=="Running"){
                                        bookingdata += 
                                        `<div><span class="text-success fw-bold">Booking Started Successfully.</span></div>
                                        <div>Booking Status : <span class="text-success fw-bold">Running</span></div>
                                        <div>Booking Completion Pin : <span class="text-primary">${element.completion_pin}</span></div>`;
                                    }
                    bookingdata += `</div>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        });
    }else{
        bookingdata += `
        <table class="table table-striped mt-1" border="1" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;" align="center">
            <tbody>
                <tr>
                    <td class="fw-bold text-danger" style="padding-top:15%; padding-left:30%; font-size:2rem; border-bottom-width:0px; box-shadow:inset 0 0 0 0px var(--bs-table-accent-bg)">No Current Booking Found</td>
                </tr>
            </tbody>
        </table>`;
    }
    document.getElementById('owner-current-bookigs-data').innerHTML = bookingdata;
};
/*------------------------------ Show Owner Current Booking Start --------------------------------- */


/*-------- verifyg pin Start ---------------------------------*/
async function checkVerifyPin(bookingid){
    var pin = document.getElementById('verifypin').value;
    console.log(pin);
    console.log(bookingid);
    var data = {
        pin : pin,
        bookingid : bookingid
    }
   var response =  await fetch('/user/verifybookingstartpin', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        }
    }).then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    }).then(responseData1 => {
        console.log('Server response:', responseData1.message);
        if(responseData1.message===true){
            showDataAfterBookingStartVerifyPin();
        }else{
            document.getElementById("warning-msg").style.display="block";
        }
    });
}
/*-------- verifyg pin Start --------------------------------- */


/*-------- wallet dashboard start --------------------------------- */
document.getElementById("wallet-dashboard").addEventListener("click",async()=>{
    // console.log('hiiii');
    var walletdata = await fetch('/user/walletdata');
    var data = await walletdata.json();
    // console.log(data);
    document.getElementById("wallet-amount").innerHTML = ' &#8377; '+data.wallet.wallet_amount;
    // console.log("wallet data",data.wallet);
});
/*-------- wallet dashboard start --------------------------------- */



// /*    User Booking History Start   :::::::::::::::::::::::::::::::::::::::::::::::::::::*/
// document.getElementById('user-booking-history-btn').addEventListener('click', async function (e) {
//     e.preventDefault();
//     console.log("Vehicle List ");

//     const response = await fetch('/user/viewbookinghistory')
//     // console.log(response);
//     const data = await response.json();
//     console.log(data);

//     var userbooking = data.bookings;
   
//     var bookingCards = ``;
//     userbooking.forEach(element => {
//         const bookDate = element.booking_date;
//         const date1 = new Date(bookDate);
//         const day1 = date1.getDate().toString().padStart(2, '0');
//         const month1 = (date1.getMonth() + 1).toString().padStart(2, '0');
//         const year1 = date1.getFullYear();

//         const start_date = element.start_date;
//         const date2 = new Date(start_date);
//         const day2 = date2.getDate().toString().padStart(2, '0');
//         const month2 = (date2.getMonth() + 1).toString().padStart(2, '0');
//         const year2 = date2.getFullYear();

//         // Format the date as "dd-mm-yyyy"
//         const bookingDate = `${day1}-${month1}-${year1}`
//         const startDate = `${day2}-${month2}-${year2}`

//         bookingCards += 
//         `<div class="row custom-div" >
//             <div class="col col-lg-2 bg-light">
//                 <img src="uploads/${element.vehicle_image}" height="200px" width="220px" alt="image">
//                 </div>
//             <div class=" col-lg-7 ">
//                 <div class="row mt-3">
//                 <p class="offset-lg-1 fs-5 fw-bold"> ${element.vehicle_company} ${element.vehicle_model}<sub>(${element.manufacture_year})</sub></p><br>
//                 </div><br>

//                 <div class="row">
//                     <div class="offset-md-1 col-lg-5 col-md-4 col-sm-4"><small class=" text-primary fw-bold "> Booking Start : <span class="text-secondary">${element.start_date}  ${element.start_time}</span></small></div>
//                     <div class="offset-md-1 col-lg-5 col-md-4 col-sm-4"><small class=" text-primary fw-bold "> Booking Start : <span class="text-secondary">${element.end_date}  ${element.end_time}</span></small></div>
                    
//                 </div>
//             </div>
//                 <div class=" col-lg-3 ">
//                 <p class="fs-3 text-lg-center fw-bold "> &#x20B9; ${element.total_charges}  <span class="text-center fw-bold ms-1 fs-6">(Total Cost)</span> </p>
//                 <p class="fs-4 ms-lg-3 fw-bold  "> &#x20B9; ${element.booking_charges}  <span class="text-center fw-bold ms-1 fs-6">(Booking Cost)</span> </p>
//                 <p class="fs-4 ms-lg-3 fw-bold  "> &#x20B9; ${element.gst_charges}  <span class="text-center fw-bold ms-1 fs-6">(GST Cost)</span> </p>
//                 <p class="ms-3"><i class="fa-solid fa-check" style="color: #21c076; font-size: 18px; font-weight: bold;"></i><span class="ms-2 text-secondary fw-bold">Free Cancellation</span></p>
                 
//             </div>
//         </div>`;
//     });
//     document.getElementById('booking-history-data').innerHTML = bookingCards;
// });
// /*  User Booking History End   */



// /* ---------------  Update Insurance Start ---------------*/
$(document).ready(function () {
    console.log('ready');
    
    $('.open-modal').click(function () {
        var _id = $(this).data('insurance_id');
        console.log(_id);
        
        var postData = {
            id: _id
        };

        $.ajax({
            url: '/user/updateinsurance',
            type: 'POST',
            data: JSON.stringify(postData),
            contentType: 'application/json',
            success: function (response) {
                console.log('Success:', response);

                const coveragestart1 = response.data.coverage_start_date;
                const date1 = new Date(coveragestart1);
                const day1 = date1.getDate().toString().padStart(2, '0');
                const month1 = (date1.getMonth() + 1).toString().padStart(2, '0');
                const year1 = date1.getFullYear();
                const coverage_start_date = `${year1}-${month1}-${day1}`;

                const bookDate = response.data.coverage_end_date;
                const date2 = new Date(bookDate);
                const day2 = date1.getDate().toString().padStart(2, '0');
                const month2 = (date1.getMonth() + 1).toString().padStart(2, '0');
                const year2 = date1.getFullYear();
                const coverage_end_date = `${year1}-${month1}-${day1}`

                $('#insuranceid').val(response.data._id);
                $('#policynumber').val(response.data.policy_number);
                $('#policyholdername').val(response.data.policy_holder_name);
                $('#policyholdercontact').val(response.data.policy_holder_contact_info);
                $('#policyholderaadhar').val(response.data.policy_holder_aadhar_no);
                $('#coveragestartdate').val(coverage_start_date);
                $('#coverageenddate').val(coverage_end_date);
                $('#insurancepremiumamount').val(response.data.premium_amount);
                $('#coverageamount').val(response.data.coverage_amount);
                $('#insuranceprovider').val(response.data.insurance_provider);
            },
            error: function (xhr, status, error) {
                console.error('Error:', status, error);
            }
        });
    });
});
// /* ---------------  Update Insurance End   --------------- */

/*  Upload Profile Image Start */
function submitFormOnChange() {
    document.getElementById("uploadprofileimage").submit();
}
/*  Upload Profile Image End */