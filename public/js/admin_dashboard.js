// Function no : 7
function showDetails(option) {
    if (option === "adminaccount-details") {
        document.getElementById('adminaccount-details').style.display = 'block';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "allusers-details") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'block';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "allblockusers-details") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'block';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "vehicles-details") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'block';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "allblockvehicles-details") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'block';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "change-password") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'block';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "admin-contact-us") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'block';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'none';
    }
    else if (option === "newsletter-request") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'block';
        document.getElementById('send-notification').style.display = 'none';
    }

    else if (option === "send-notification") {
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
        document.getElementById('admin-contact-us').style.display = 'none';
        document.getElementById('newsletter-request').style.display = 'none';
        document.getElementById('send-notification').style.display = 'block';
    }
}

function forgetPassword(){
    document.getElementById('adminaccount-details').style.display = 'none';
    document.getElementById('allusers-details').style.display = 'none';
    document.getElementById('allblockusers-details').style.display = 'none';
    document.getElementById('vehicles-details').style.display = 'none';
    document.getElementById('allblockvehicles-details').style.display = 'none';
    document.getElementById('change-password').style.display = 'none';
    document.getElementById('admin-forget-password').style.display = 'block';
}

function changePassword(){
    document.getElementById('adminaccount-details').style.display = 'none';
    document.getElementById('allusers-details').style.display = 'none';
    document.getElementById('allblockusers-details').style.display = 'none';
    document.getElementById('vehicles-details').style.display = 'none';
    document.getElementById('allblockvehicles-details').style.display = 'none';
    document.getElementById('change-password').style.display = 'block';
    document.getElementById('admin-forget-password').style.display = 'none';
}



/*  View All User List Start  */
document.getElementById('allusers').addEventListener('click', function (e) {
    e.preventDefault();
    UsersList();
});

async function UsersList() {

    const response = await fetch('/admin/userslist')
    console.log(response);
    const data = await response.json();
    console.log(data);
    var userdata = data.message;
    console.log(userdata);
    var user_list_table = "";

    user_list_table += `<table id="viewalluserslist" class="table table-striped bg-white" style="background-color: white; font-weight : 500">
    <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Contact No</th>
        <th>Address</th>
        <th>Aadhar Number</th>
        <th>Role</th>
        <th>Action</th>
    </thead>
    <tbody>`;
    var role = "";
    userdata.forEach(user => {
        role = ""
        if (user.user_status)
            role += "User";
        if (user.is_owner)
            role += ",Owner";

        user_list_table += `<tr>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact_no}</td>
            <td>${user.address}</td>
            <td>${user.aadhar_number}</td>
            <td>${role}</td>
            <td><a class="btn btn-danger" onclick="adminBlockUser('${user._id}')">Block</a></td>
    </tr>`
    });
    document.getElementById('user-data').innerHTML = user_list_table;

    //for filter data (Data Table)
    $(document).ready(function () {
        $("#viewalluserslist").DataTable();
    });
}
/*  View All User List End  */


/*  Admin Block user Start  */
function adminBlockUser(id) {

    console.log("blockUser function called");
    var obj = {
        userid: id
    }
    console.log('obj.userid is : ', obj.userid);

    var res = fetch('/admin/blockuser', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error while blocking user! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData1 => {
        console.log('Server response:', responseData1);
        UsersList();

    }).catch(error => {
        console.error('An error occurred while blocking the user:', error);
    });
}
/*  Admin Block user End   */


/*  Admin View Block User List Start  */
document.getElementById('allblockedusers').addEventListener('click', function (e) {
    e.preventDefault();
    adminblockUserList();
});

async function adminblockUserList() {

    const response = await fetch('/admin/blockuserslist')
    console.log(response);
    const data = await response.json();
    console.log(data);
    var userdata = data.message;
    console.log(userdata);
    var blocked_user_list_table = "";

    blocked_user_list_table += `<table id="blockuserslist" class="table table-striped" class="bg-white" style="background-color: white; font-weight : 500;">
    <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Contact No</th>
        <th>Address</th>
        <th>Aadhar Number</th>
        <th>Role</th>
        <th>Action</th>
    </thead>
    <tbody>`;
    let role = "";
    userdata.forEach(user => {
        role = ""
        if (!user.user_status)
            role += "User";
        if (!user.is_owner)
            role += ",Owner";

        blocked_user_list_table += `<tr>

            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.contact_no}</td>
            <td>${user.address}</td>
            <td>${user.aadhar_number}</td>
            <td>${role}</td>
            <td><a class="btn btn-danger" onclick="unBlockedUser('${user._id}')">UnBlock</a></td>
        </tr>`
    })
    document.getElementById('blocked-user-data').innerHTML = blocked_user_list_table;

    //for filter data (Data Table)
    $(document).ready(function () {
        $("#blockuserslist").DataTable();
    }); 
}
/*  Admin View Block User List End  */


/*  Admin Unblock User Start  */
async function unBlockedUser(id) {

    var obj = {
        userid: id
    }
    var res = fetch('/admin/unblockuser', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error while blocking user! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData1 => {
        // console.log('Server response:', responseData1);
        adminblockUserList();
    })
    .catch(error => {
        console.error('An error occurred while Unblocking the user:', error);
    });
}
/*  Admin Unblock User End  */


/*  Admin Block Vehicle List Start */
document.getElementById('allvehicles').addEventListener('click', function (e) {
    e.preventDefault();
    blockVehicleList();
});

async function blockVehicleList() {
    // console.log("all vehicles");
    const response = await fetch('/admin/allvehicles')
    console.log(response);
    const data = await response.json();
    console.log(data);

    var vehicledata = data.message;
    console.log(vehicledata);

    var table = "";
    table += ` <table id = "allvehicle" class="table table-striped" style="background-color: white; font-weight : 500">
        <thead>
            <th>Registration No</th>
            <th>Company</th>
            <th>Model</th>
            <th>Class</th>
            <th>Insurance</th>
            <th>Image</th>
            <th>Action</th>
        </thead>
        <tbody>`
    vehicledata.forEach(element => {
        table += `<tr>
            <td>${element.reg_number}</td>
            <td>${element.company}</td>
            <td>${element.model}</td>
            <td>${element.vehicle_class}</td>
            <td>${element.have_insurance}</td>
            <td><img src="uploads/${element.images[0]}" height="200px" width="220px" alt="image"> </td>
            <td><a href="#" class="btn btn-danger" onclick="adminBlockVehicle('${element.reg_number}')">Block</a></td>
        </tr>`
    });
    table += " <tbody></table>"
    document.getElementById('vehicle-data').innerHTML = table;

    //for filter data (Data Table)
    $(document).ready(function () {
        $("#allvehicle").DataTable();
    });
}
/*  Admin Block Vehicle List End  */


/* Admin Block Vehicle Start */
async function adminBlockVehicle(reg_number) {

    var obj = {
        reg_number: reg_number
    }
    var res = await fetch('/admin/blockvehicle', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error while blocking user! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData1 => {
        console.log('Server response:', responseData1);
        blockVehicleList();
    }).catch(error => {
        console.error('An error occurred while blocking the user:', error);
    });
}
/* Admin Block Vehicle End  */


/* Admin Blocked Vehicle List Start */
document.getElementById('allblockedvehicle').addEventListener('click', function (e) {
    e.preventDefault();
    adminblockVehicleList();
});

async function adminblockVehicleList() {

    const response = await fetch('/admin/blockvehiclelist')
    console.log(response);
    const data = await response.json();
    console.log(data);
    var userdata = data.message;
    console.log(userdata);
    var blocked_vehicle_list_table = "";
    blocked_vehicle_list_table += ` <table id="blockvehiclelist" class="table table-striped" style="background-color: white; font-weight : 500">
    <thead>
        <th>Registration No</th>
        <th>Company</th>
        <th>Model</th>
        <th>Class</th>
        <th>Insurance</th>
        <th>Image</th>
        <th>Action</th>
    </thead>
    <tbody>`;
    var role = "";
    userdata.forEach(element => {
        blocked_vehicle_list_table += `<tr>
        <td>${element.reg_number}</td>
        <td>${element.company}</td>
        <td>${element.model}</td>
        <td>${element.vehicle_class}</td>
        <td>${element.have_insurance}</td>
        <td><img src="uploads/${element.images[0]}" height="200px" width="220px" alt="image"> </td>
        <td><a class="btn btn-danger" onclick="unBlockVehicle('${element.reg_number}')">UnBlock</a></td>
    </tr>`
    })
    blocked_vehicle_list_table += " <tbody></table>";
    document.getElementById('blocked-vehicle-data').innerHTML = blocked_vehicle_list_table;

    //for filter data (Data Table)
    $(document).ready(function () {
        $("#blockvehiclelist").DataTable();
    });
}
/* Admin Blocked Vehicle List End  */


/* Admin Unblock Vehicle Start */
async function unBlockVehicle(reg_number) {

    var obj = {
        reg_number: reg_number
    }
    var res = fetch('/admin/unblockvehicle', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error while blocking user! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData1 => {
        adminblockVehicleList();
    })
    .catch(error => {
        console.error('An error occurred while Unblocking the user:', error);
    });
}
/* Admin Unblock Vehicle End  */


/* Contact Us Query Start */
document.getElementById('admin-contactus').addEventListener('click', async function(){

    const response = await fetch('/admin/contactuslist')
    const data = await response.json();
    var contactusdata = data.data;

    var contactus_list = "";
    contactus_list += ` <table id="contactus" class="table table-striped" style="background-color: white; font-weight : 500">
    <thead>
        <th>Name</th>
        <th>Email</th>
        <th>Contact No</th>
        <th>Role</th>
        <th>Query</th>
    </thead>
    <tbody>`;
    contactusdata.forEach(element => {
      contactus_list += `<tr>
            <td>${element.name}</td>
            <td>${element.email}</td>
            <td>${element.contact_no}</td>
            <td>${element.role}</td>
            <td>${element.query}</td>
        </tr>`
    })
    contactus_list += " </tbody></table>";
    document.getElementById('contact-us-data').innerHTML = contactus_list;

    //for filter data (Data Table)
    $(document).ready(function () {
        $("#contactus").DataTable();
    });
});
/* Contact Us Query End */

/* Update Details start */
$(document).ready(function () {
    $('.open-modal-admin').click(function () {

        var _id = $(this).data('admin_details'); // Correct the data attribute name
        console.log("Admin Id=>", _id);

        var postData = {
            id: _id
        };
        $.ajax({
            url: '/admin/adminprofiledata',
            type: 'POST',
            data: JSON.stringify(postData),
            contentType: 'application/json',
            dataType: 'json', // Specify the expected data type
            success: function (response) {
                console.log('Success:', response);

                // Update the input fields with the received data
                $('#adminname').val(response.data.name);
                $('#admingender').val(response.data.gender);
                $('#adminemail').val(response.data.email);
                $('#admincontact').val(response.data.contact_no);

            },
            error: function (xhr, status, error) {
                console.error('Error:', status, error);
            }
        });
    });
});
/* Update Details end  */

/*  News Letter Requests Start */
document.getElementById('news-letter-requests').addEventListener('click',async function(){
    console.log("news letter requests");
    const response = await fetch('/admin/newsletterlist')
    const data = await response.json();
    var newsletterdata = data.data;
    var newsletterlist = "";
    newsletterlist += ` <table id="newsletter" class="table table-striped" style="background-color: white; width : 100%; font-weight : 500">
    <thead align = "center">
            <th>Email</th>
            <th>Select</th>


    </thead>
    <tbody>`;
    newsletterdata.forEach(element => {
        newsletterlist+=`<tr>
            <td align="center" >${element.email}</td>
            <td align="center" > <input type="checkbox" id="select" name="select"> </td>

       </tr>`
    });
    newsletterlist += " </tbody></table>";
    document.getElementById('newsletter-list-data').innerHTML = newsletterlist;
     //for filter data (Data Table)
     $(document).ready(function () {
        $("#newsletter").DataTable();
    });
});
/*  News Letter Requests End */


/*  Upload Profile Image Start  */
function submitFormOnChange() {
    document.getElementById("uploadprofileimage").submit();
}
/*  Upload Profile Image End  */




/*  Validation Start  */
/* Change Password Start  */
function checkChangeOldPass7() {
    // console.log("hiii");
    let oldpassword = document.getElementById('changeoldpassword');

    let valid = false;
    let oldpassword_input = oldpassword.value.trim();

    if (!isRequired7(oldpassword_input)) {
        showError7(oldpassword, "password cannot be blank.")
    }
    else if (!isValidPass7(oldpassword_input)) {
        showError7(oldpassword, "password is not valid.")
    }
    else {
        showSuccess7(oldpassword);
        valid = true;
    }
    return valid;
}
function checkChangeNewPass7() {
    let newpassword = document.getElementById('changenewpassword');

    let valid = false;
    let newpassword_input = newpassword.value.trim();

    if (!isRequired7(newpassword_input)) {
        showError7(newpassword, "password cannot be blank.")
    }
    else if (!isValidPass7(newpassword_input)) {
        showError7(newpassword, "password is not valid.")
    }
    else {
        showSuccess7(newpassword);
        valid = true;
    }
    return valid;
}
function checkChangeCnfPass7() {
    let newpassword = document.getElementById('changenewpassword');
    let cnfpassword = document.getElementById('changecnfpassword');

    let valid = false;
    let newpassword_input = newpassword.value.trim();

    if (!isRequired7(newpassword_input)) {
        showError7(cnfpassword, "First enter the new password.");
    }
    else {
        let cnfpassword_input = cnfpassword.value.trim();

        if (!isRequired7(cnfpassword_input)) {
            showError7(cnfpassword, "password cannot be blank.")
        }
        else if (!isValidPass7(cnfpassword_input)) {
            showError7(cnfpassword, "password is not valid.");
        }
        else {
            if (!isCheckValidCnfPass7(newpassword_input, cnfpassword_input)) {
                showError7(cnfpassword, "password mismatched enter correct password.");
            }
            else {
                showSuccess7(cnfpassword);
                valid = true;
            }
            return valid;
        }
    }
}
function submitchangepassword7() {
    if (checkChangeOldPass7() && checkChangeNewPass7 && checkChangeCnfPass7) {
        return true;
    } else {
        checkChangeOldPass7();
        checkChangeNewPass7();
        checkChangeCnfPass7();
        return false;
    }
}
/*  Change Password End  */

/*  Check Admin name Start  */
 function checkUsername7(){
    let adminname = document.getElementById('adminname');
    let valid7 = false;
    const min = 3,
    max = 25;
    let adminname_input = adminname.value.trim();

    if(!isRequired7(adminname_input)){
        showError7(adminname,"Name Cannot be Blank.")
    }
    else if(!isBetween7(adminname_input.length,min,max)){
        showError7(adminname, `Name must be between ${min} and ${max} characters.`)
    }
    else{
        showSuccess7(adminname);
        valid7 = true;
    }
    return valid7;
 }
/*  Check Admin name End  */

/*  Check Contact Number Start */
function checkContactNumber7(){
    let contact = document.getElementById('admincontact');

    let valid7 = false;
    let conatct_input = contact.value.trim();

    if(!isRequired7(conatct_input)){
        showError7(contact,"Contact Cannot Be Blank.");
    }
    else if(!isValidContactNumber(conatct_input)){
        showError7(contact,"Invalid Contact Number");
    }
    else{
        showSuccess7(contact);
        valid7 = true;
    }
    return valid7;
}

/*  Check Contact Number End  */


/* Admin Profile Submit Start */
function submitFormDetails(){
    if(checkUsername7() && checkContactNumber7()){
        return true;
    }
    else{
        checkUsername7();
        checkContactNumber7();
        return false;
    }
}
/* Admin Profile Submit Start */

/* Admin Sent Notification */
function checkNotificationInput(){
    let notification = document.getElementById('notification');

    let valid7 = false;
    let notification_input = notification.value.trim();

    if(!isRequired7(notification_input)){
        showError7(notification,"Notification Cannot Be Blank");
    }
    else{
        showSuccess7(notification);
        valid7 = true;
    }
    return valid7;
}

/* Admin Check Sent To Notification  */
function checkSendToNotification(){
    let to_send = document.getElementById('to_send_notification');

    let valid7 = false;
    let to_send_input = to_send.value.trim();

    if(!isRequired7(to_send_input)){
        showError7(to_send,"Select to Send Notification.")
    }
    else{
        showSuccess7(to_send);
        valid7 = true;
    }
    return valid7;
}

/*  Submit Sent Notification Details */
function checkNotificationDetails(){
    if(checkNotificationInput() && checkSendToNotification()){
        return true;
    }
    else{
        checkNotificationInput();
        checkSendToNotification();
        return false;
    }
}



function isRequired7(value) {
    if (value == "")
        return false;
    else
        return true;
}

function isBetween7(length, min, max) {
    if(length < min || length > max)
        return false;
    return true;
}

function isValidContactNumber(mobile_no_input){
    console.log("check mobile");
    const res = /^[6789][0-9]{9}$/;
    return res.test(mobile_no_input);
}


function isValidPass7(password) {
    const res = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return res.test(password);
}

function isCheckValidCnfPass7(newpass, cnfpass) {
    if (newpass == cnfpass)
        return true;
    else
        return false;
}

function showError7(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess7(input) {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}





/*  Validation End  */