//  Functions Numbering : 7


/* ------------------ Reserved Driver Under Owner -------------------- */

const checkContact7 = ()=>{
    let driver_contact = document.getElementById('driver-contact-7');
    let valid = false;
    let driver_contact_input = driver_contact.value.trim();

    if(!isRequired7(driver_contact_input)){
        showError7(driver_contact,"Contact number connot be blank.")
    }
    else if(!isValidContact7(driver_contact_input)){
        showError7(driver_contact,'Invalid contact number.')
    }
    else{
        showSuccess7(driver_contact);
        valid = true;
    }
    return valid;
}


function isValidContact7(contact_no){
    var res = /^[6-9]\d{9}$/;
    return res.test(contact_no);
}


const checkUsername7 = () => {
    let driver_name = document.getElementById('driver-name-7');

    let valid = false;
    const min = 3,
        max = 25;

    const input_driver_name = driver_name.value.trim();

    if (!isRequired7(input_driver_name)) {
        showError7(driver_name, 'Username cannot be blank.');
    } else if (!isBetween7(input_driver_name.length, min, max)) {
        showError7(driver_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess7(driver_name);
        valid = true;
    }
    return valid;
};

    const checkEmail7 = () => {
    let driver_email = document.getElementById('driver-email-7');
    let valid = false;
    const email = driver_email.value.trim();
    if (!isRequired7(email)) {
        showError7(driver_email, 'Email cannot be blank.');
    } else if (!isEmailValid7(email)) {
        showError7(driver_email, 'Email is not valid.')
    } else {
        showSuccess7(driver_email);
        valid = true;
    }
    return valid;
};

function checkLicenceIssueDate7(){
    let licence_issue_date = document.getElementById('licence-issue-date-7');
    let valid = false;
    const input_licence_issue_date = licence_issue_date.value.trim();

    if(!isRequired7(input_licence_issue_date)){
        showError7(licence_issue_date,'Licence issue date cannot be blank.');
    }
    else if(!isValidLicenceIssueDate7(input_licence_issue_date)){
        showError7(licence_issue_date,'Invalid licence issue date.');
    }
    else{
        showSuccess7(licence_issue_date);
        valid = true;
    }
    return valid;
}

function checkLicenceExpiryDate7(){
    let licence_expiry_date = document.getElementById('licence-expiry-date-7');
    let licence_issue_date = document.getElementById('licence-issue-date-7');
    const input_issue_date = licence_issue_date.value.trim();

    if(!isRequired7(input_issue_date)){
        showError7(licence_expiry_date,'select issue date first')
    } else{
        let valid = false;
        let expiry_date_input = licence_expiry_date.value.trim();

        if(!isRequired7(expiry_date_input)){
            showError7(licence_expiry_date,'expiry date cannot be blank.');
        }
        else if(!isValidLicenceExpiryDate7(input_issue_date,expiry_date_input)){
            showError7(licence_expiry_date,'invalid expiry date');
        }
        else{
            showSuccess7(licence_expiry_date);
            valid = true;
        }
        return valid;
    }
}

function ckeckLicenceClass7(){
    let licence_class = document.getElementById('licence-class-7');
    let valid = false;
    let licence_class_input = licence_class.value.trim();

    if(!isRequired7(licence_class_input)){
        showError7(licence_class,'licence class cannot be blank')
    }
    else{
        showSuccess7(licence_class);
        valid = true;
    }
    return valid;
}

function checkLicenceNumber7(){
    let driving_licence_number = document.getElementById('driving-licence-number-7');
    let valid = false;
    let input_licence_number = driving_licence_number.value.trim();

    if(!isRequired7(input_licence_number)){
        showError7(driving_licence_number, 'Licence number cannot be blank.');
    }
    else if(!isValidLicenceNumber7(input_licence_number)){
        showError7(driving_licence_number, 'Licence number is not valid.')
    }
    else{
        showSuccess7(driving_licence_number);
        valid = true;
    }
    return valid;
}
 
function checkExperienceYear7(){
    let driver_experience_year = document.getElementById('driver-experience-year-7');
    let valid = false;
    let input_experience_year = driver_experience_year.value.trim();
    if(!isRequired7(input_experience_year)){
        showError7(driver_experience_year, 'Experience year cannot be blank.');
    }
    else if(!isValidExperienceYear7(input_experience_year)){
        showError7(driver_experience_year, 'Experience year is not valid.')
    }
    else{
        showSuccess7(driver_experience_year);
        valid = true;
    }
    return valid;
}

const isEmailValid7 = (email) => {
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/;
    return res.test(email);
};

const isValidLicenceIssueDate7 = (issue_date_input) => {
    const selectedDate = new Date(issue_date_input);
    const currentDate = new Date();

    // Check if the selected date is in the future
    if (selectedDate > currentDate)
        return false;
    return true;
}

const isValidLicenceExpiryDate7 = (issue_date,expiry_date) => {
    const issue_date_value = new Date(issue_date);
    const expiry_date_value = new Date(expiry_date);

    if(issue_date_value > expiry_date_value)
        return false;

    let yearDifference = expiry_date_value.getFullYear() - issue_date_value.getFullYear();
    // console.log(yearDifference);
    if(yearDifference != 20){
        return false;
    }
    return true;
}



function checkLicenceImage7(){
    // console.log("hii");
    let licence_image = document.getElementById('driver-licence-image-7');
    let licence_image_input = licence_image.files[0];
    var valid = false;
    

    if(!isValidFile7(licence_image_input)){
        showError7(licence_image,"Cannot blank licence image.")
    }
    else{
        showSuccess7(licence_image);
        valid = true;
    }
    return valid;
}

function isValidFile7(input){
    if(input == "" || input ==  null || input == undefined)
    return false;
    return true;
}

const isValidLicenceNumber7 = (licence_number)=>{
    const res = /^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{1,10}$/;
    return res.test(licence_number);
}

const isValidExperienceYear7 = (experience_year)=>{
    const res = /^\d+$/;    
    return res.test(experience_year);
}

const isRequired7 = value => value === '' ? false : true;
const isBetween7 = (length, min, max) => length < min || length > max ? false : true;

const showError7 = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess7 = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


function submitFormData7(){
    if(checkUsername7() && checkEmail7() && checkLicenceNumber7() && checkLicenceImage7() && checkContact7() && checkExperienceYear7() && ckeckLicenceClass7() && checkLicenceIssueDate7() && checkLicenceExpiryDate7()){
        return true;
    }
    else{
        checkUsername7();
        checkEmail7();
        checkLicenceNumber7();
        checkLicenceImage7();
        checkContact7();
        checkExperienceYear7();
        ckeckLicenceClass7();
        checkLicenceIssueDate7();
        checkLicenceExpiryDate7();
        return false;
    }
}