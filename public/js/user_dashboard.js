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
/*--------------------Vehicle Insurance form ------------------------- */
function setRegistrationNumber(regNumber, ownerId) {
    // Set the registration number in the hidden input field
    document.getElementById('registrationNumber').value = regNumber;
    document.getElementById('ownerId').value = ownerId;
    console.log("JHGFDS", regNumber);
}
/*  Vehicle Insurance form  */

/*    User Booking History Start   */
document.getElementById('user-booking-history').addEventListener('click', async function (e) {
    e.preventDefault();
    console.log("Vehicle List ");

    const response = await fetch('/user/viewbookinghistory')
    console.log(response);
    const data = await response.json();
    console.log(data);

    var userbooking = data.bookings;
   
    var table = "";
    table += ` <table class="table table-striped" style="background-color: white; font-weight : 500; overflow-y:scroll; height:600px; display:block;">
              <thead >
                <th align="center" >Booking Date</th>
                <th align="center" >Start date</th>
                <th align="center" >Vehicle Reg.No.</th>
                <th align="center" >Vehicle Address</th>
                <th align="center" >Owner Contact</th>
                <th align="center" >Total Hours</th>
                <th align="center" >Total</th>
                <th align="center" > OTP</th>
                <th align="center" > Booking Status</th>
                <th align="center" >Cancel Booking</th>
              </thead>
            <tbody> `
    userbooking.forEach(element => {
        const bookDate = element.booking_date;
        const date1 = new Date(bookDate);
        const day1 = date1.getDate().toString().padStart(2, '0');
        const month1 = (date1.getMonth() + 1).toString().padStart(2, '0');
        const year1 = date1.getFullYear();

        const start_date = element.start_date;
        const date2 = new Date(start_date);
        const day2 = date2.getDate().toString().padStart(2, '0');
        const month2 = (date2.getMonth() + 1).toString().padStart(2, '0');
        const year2 = date2.getFullYear();

        // Format the date as "dd-mm-yyyy"
        const bookingDate = `${day1}-${month1}-${year1}`
        const startDate = `${day2}-${month2}-${year2}`

        table += `<tr>
            <td align="center">${bookingDate}</td>
            <td align="center">${startDate}</td>
            <td align="center">${element.vehicle_reg_no}</td>
            <td align="center">${element.owneraddress}</td>
            <td align="center">${element.ownercontact}</td>
            <td align="center">${element.total_time}</td>
            <td align="center">${element.total_charges}</td>
            <td align="center">${element.bookingpin}</td>
            <td align="center">${element.booking_status}</td>
            <td align="center"><button class= "btn btn-danger">Cancel Booking</button></td>

    </tr>`
    });
    table += " <tbody></table>"
    document.getElementById('user-booking').innerHTML = table;
});


/*  User Booking History End   */

/* ---------------  Update Insurance Start --------------- */
$(document).ready(function () {

    $('.open-modal').click(function () {
        var _id = $(this).data('insurance_details');
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
/* ---------------  Update Insurance End   --------------- */

/* owner vehicle bookinigs start */
document.getElementById('vehicles-bookings-request').addEventListener('click', async function(e){
    e.preventDefault();

    const response = await fetch('/user/ownervehiclebooking')
    console.log("server response",response);
    const data = await response.json();
    // console.log(data);
    var owner_vehicle_booking = data.vehiclebookings;
    // console.log(owner_vehicle_booking);

    var table = "";
    table += ` <table class="table table-striped" style="background-color: white; font-weight : 500;  overflow-y:scroll; height:600px;  display:block;">
              <thead>
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
        
                table += `<tr>
                    <td align="center">${element.username}</td>
                    <td align="center">${element.usercontact}</td>
                    <td align="center">${startDate1}</td>
                    <td align="center">${element.start_time}</td>
                    <td align="center">${element.total_time} hr</td>
                    <td align="center">${element.vehicle_reg_no}</td>
                    <td align="center">&#8377;${element.totalamount}</td>
                    <td align="center"><button class="btn btn-success text-light" onclick = "ownerAcceptRequest('${element.bookingid}')">Accept</button></td>
                    <td align="center"><button class="btn btn-danger text-light" onclick = "">Decline</button></td>
        
            </tr>`
            });
            table += " <tbody></table>"
            document.getElementById('my-booking-request-data').innerHTML = table;

})
/* owner vehicle bookinigs end  */


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

/* Update Details start */
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

                // Update the input fields with the received data
             
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
/* Update Details end  */

document.getElementById('current-bookings').addEventListener('click', async function(){
    var bookingdata = "";
    const response = await fetch('/user/viewcurrentbooking')
    console.log("server response",response);
    const data = await response.json();
    // console.log(data);
    var currentbookings = data.bookings;
    console.log(currentbookings);
    bookingdata+= `  <div class="bg-white border rounded-5">

    <section class="w-100  p-4" style="background-color: #eee; border-radius: .5rem .5rem 0 0;">
        <style>
            @media (max-width: 767.98px) {
                .border-sm-start-none {
                    border-left: none !important;
                }
            }
        </style>
`;

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
        bookingdata += `
                <div class="row ">
                <div class="col-md-12">
                    <div class="card shadow-0 border rounded-3">
                        <div class="card-body">
                            <div class="row">
                                <div class="col-md-4 col-lg-4 ">
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
                                <div class="col-md-4 col-lg-4  border-sm-start-none border-start">
                                    <div class="row">
                                        <div class=""> <span class="text-dark">Start Date : ${startDate3}  ${element.start_time}</span></div>
                                        <div class=""> <span class="text-dark">End Date  : ${endDate3} ${element.end_time}</span></div>
                                    <select class="form-control w-75 m-2" name="" id="">
                                        <option value="">Select Driver</option>
                                        <option value="">options</option>
                                        <option value="">options</option>
                                        <option value="">options</option>
                                        <option value="">options</option>
                                    </select>

                                    </div>
                                </div>
                                <div class="col-md-4 col-lg-4 border-sm-start-none border-start">
                                    <div class="d-flex flex-row align-items-center mb-1">
                                        <input type="text" class="form-control" style="display:block;" placeholder="Enter Pin" name = "verifypin" id="verifypin">
                                        <br><button class="btn btn-outline-success w-100 mt-2 fw-bold border border-3" id = "verifybtn" onclick="checkVerifyPin('${element.bookingid}')">Verify</button>
                                        <br><span class="text-danger" style="display:none;" id="warning-msg" >Invalid Pin</span>
                                        <br><span class="text-success" style="display:none;" id="success-msg" >Booking Started Successfully</span>
                                    </div>
                                </div>      
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
        });
        bookingdata += ` </section>
        </div>`;
        document.getElementById('current-bookigs-data').innerHTML = bookingdata;
})

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
        if(responseData1.message==true){
            document.getElementById("warning-msg").style.display="none";
            document.getElementById("success-msg").style.display = "block";
            document.getElementById('verifypin').style.display="none";
            document.getElementById('verifybtn').style.display="none";
        }else{
            document.getElementById("warning-msg").style.display="block";
            document.getElementById("success-msg").style.display = "none";
        }
    });
}

document.getElementById("wallet-dashboard").addEventListener("click",async()=>{
    // console.log('hiiii');
    var walletdata = await fetch('/user/walletdata');
    var data = await walletdata.json();
    // console.log(data);
    document.getElementById("wallet-amount").innerHTML = ' &#8377; '+data.wallet.wallet_amount;
    // console.log("wallet data",data.wallet);
});

var uploadProfileImage = ()=>{
    
}