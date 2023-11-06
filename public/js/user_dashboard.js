// Function number : 4
/* ------------------  Dashboard Details  ----------------------------- */

function dashboardChoices(option) {
    if (option === "my-profile") {
        document.getElementById('my-profile').style.display = 'block'
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === "my-bookings") {
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('my-bookings').style.display = "block";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'

    }
    else if (option === 'change-password') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'block'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === 'my-wallet') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'block'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === 'my-driving-history') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'block'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === 'my-vehicles') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'block'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === 'my-drivers') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'block'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === 'my-vehicle-booking-history') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'block'
        document.getElementById('my-booking-request').style.display = 'none'
    }
    else if (option === 'my-booking-request') {
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicle-booking-history').style.display = 'none'
        document.getElementById('my-booking-request').style.display = 'block'
        
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
              <thead>
                <th>Booking Date</th>
                <th>Start date</th>
                <th>Pickup location</th>
                <th>Drop location</th>
                <th>Vehicle Reg.No.</th>
                <th>Owner Contact</th>
                <th>Total Hours</th>
                <th>Total</th>
                <th>Get OTP</th>
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
            <td>${bookingDate}</td>
            <td>${startDate}</td>
            <td>${element.pickup_location}</td>
            <td>${element.destination_location}</td>
            <td>${element.booking_charges}</td>
            <td>${element.ownercontact}</td>
            <td>${element.total_time}</td>
            <td>${element.total_charges}</td>
            <td>${element.bookingpin}</td>

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
    console.log("Vehicle List ");

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
                    <td align="center"><button class="btn btn-success text-light" onclick = "">Accept</button></td>
                    <td align="center"><button class="btn btn-danger text-light" onclick = "">Decline</button></td>
        
            </tr>`
            });
            table += " <tbody></table>"
            document.getElementById('my-booking-request-data').innerHTML = table;

})
/* owner vehicle bookinigs end  */


async function ownerVerifyPin(id){
    console.log(id);
    if(id == "" || id == undefined ){
        console.log("invalid id ");
    }
    var obj = {
        bookingid : id
    }

}