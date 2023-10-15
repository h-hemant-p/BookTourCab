/* ------------------ Reserved Driver Under Owner -------------------- */

const checkContact = ()=>{
    let driver_contact = document.getElementById('driver-contact');
    let valid = false;
    let driver_contact_input = driver_contact.value.trim();

    if(!isRequired(driver_contact_input)){
        showError(driver_contact,"Contact number connot be blank.")
    }
    else if(!isValidContact(driver_contact_input)){
        showError(driver_contact,'Invalid contact number.')
    }
    else{
        showSuccess(driver_contact);
        valid = true;
    }
    return valid;
}


function isValidContact(contact_no){
    var res = /^[6-9]\d{9}$/;
    return res.test(contact_no);
}

/* ------------------ Reserved Driver Under Owner -------------------- */



const checkUsername = () => {
    let driver_name = document.getElementById('driver-name');

    let valid = false;
    const min = 3,
        max = 25;

    const input_driver_name = driver_name.value.trim();

    if (!isRequired(input_driver_name)) {
        showError(driver_name, 'Username cannot be blank.');
    } else if (!isBetween(input_driver_name.length, min, max)) {
        showError(driver_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(driver_name);
        valid = true;
    }
    return valid;
};

    const checkEmail = () => {
    let driver_email = document.getElementById('driver-email');
    let valid = false;
    const email = driver_email.value.trim();
    if (!isRequired(email)) {
        showError(driver_email, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(driver_email, 'Email is not valid.')
    } else {
        showSuccess(driver_email);
        valid = true;
    }
    return valid;
};

function checkLicenceIssueDate(){
    let licence_issue_date = document.getElementById('licence-issue-date');
    let valid = false;
    const input_licence_issue_date = licence_issue_date.value.trim();

    if(!isRequired(input_licence_issue_date)){
        showError(licence_issue_date,'Licence issue date cannot be blank.');
    }
    else if(!isValidLicenceIssueDate(input_licence_issue_date)){
        showError(licence_issue_date,'Invalid licence issue date.');
    }
    else{
        showSuccess(licence_issue_date);
        valid = true;
    }
    return valid;
}

function checkLicenceExpiryDate(){
    let licence_expiry_date = document.getElementById('licence-expiry-date');
    let licence_issue_date = document.getElementById('licence-issue-date');
    const input_issue_date = licence_issue_date.value.trim();

    if(!isRequired(input_issue_date)){
        showError(licence_expiry_date,'select issue date first')
    } else{
        let valid = false;
        let expiry_date_input = licence_expiry_date.value.trim();

        if(!isRequired(expiry_date_input)){
            showError(licence_expiry_date,'expiry date cannot be blank.');
        }
        else if(!isValidLicenceExpiryDate(input_issue_date,expiry_date_input)){
            showError(licence_expiry_date,'invalid expiry date');
        }
        else{
            showSuccess(licence_expiry_date);
            valid = true;
        }
        return valid;
    }
}

function ckeckLicenceClass(){
    let licence_class = document.getElementById('licence-class');
    let valid = false;
    let licence_class_input = licence_class.value.trim();

    if(!isRequired(licence_class_input)){
        showError(licence_class,'licence class cannot be blank')
    }
    else{
        showSuccess(licence_class);
        valid = true;
    }
    return valid;
}

function checkLicenceNUmber(){
    let driving_licence_number = document.getElementById('driving-licence-number');
    let valid = false;
    let input_licence_number = driving_licence_number.value.trim();

    if(!isRequired(input_licence_number)){
        showError(driving_licence_number, 'Licence number cannot be blank.');
    }
    else if(!isValidLicenceNumber(input_licence_number)){
        showError(driving_licence_number, 'Licence number is not valid.')
    }
    else{
        showSuccess(driving_licence_number);
        valid = true;
    }
    return valid;
}
 
function checkExperienceYear(){
    let driver_experience_year = document.getElementById('driver-experience-year');
    let valid = false;
    let input_experience_year = driver_experience_year.value.trim();
    if(!isRequired(input_experience_year)){
        showError(driver_experience_year, 'Experience year cannot be blank.');
    }
    else if(!isValidExperienceYear(input_experience_year)){
        showError(driver_experience_year, 'Experience year is not valid.')
    }
    else{
        showSuccess(driver_experience_year);
        valid = true;
    }
    return valid;
}

const isEmailValid = (email) => {
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/;
    return res.test(email);
};

const isValidLicenceIssueDate = (issue_date_input) => {
    const selectedDate = new Date(issue_date_input);
    const currentDate = new Date();

    // Check if the selected date is in the future
    if (selectedDate > currentDate)
        return false;
    return true;
}

const isValidLicenceExpiryDate = (issue_date,expiry_date) => {
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



function checkLicenceImage(){
    console.log("hii");
    let licence_image = document.getElementById('driver-licence-image');
    let licence_image_input = licence_image.files[0];
    var valid = false;
    

    if(!isValidFile(licence_image_input)){
        showError(licence_image,"Cannot blank licence image.")
    }
    else{
        showSuccess(licence_image);
        valid = true;
    }
    return valid;
}

function isValidFile(input){
    if(input == "" || input ==  null || input == undefined)
    return false;
    return true;
}

const isValidLicenceNumber = (licence_number)=>{
    const res = /^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{1,10}$/;
    return res.test(licence_number);
}

const isValidExperienceYear = (experience_year)=>{
    const res = /^\d+$/;    
    return res.test(experience_year);
}

const isRequired = value => value === '' ? false : true;
const isBetween = (length, min, max) => length < min || length > max ? false : true;

const showError = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

function submitFormData(){ 
    if(checkLicenceIssueDate() && checkLicenceExpiryDate() && checkLicenceNUmber() &&
     checkLicenceImage() && checkExperienceYear() && ckeckLicenceClass()) {
        return true;
    }
    else{
     checkLicenceIssueDate();
     checkLicenceExpiryDate();
     checkLicenceNUmber();
     checkLicenceImage();
     checkExperienceYear();
     ckeckLicenceClass();
    return false;
    }
}

function checkDetails(){
    if(checkUsername() && checkEmail() && checkLicenceIssueDate() && checkLicenceExpiryDate() && checkLicenceNUmber() && 
    checkLicenceImage() && checkContact() && checkExperienceYear() && ckeckLicenceClass()){
        return true;
    }
    else{
        checkUsername();
        checkEmail();
        checkLicenceIssueDate();
        checkLicenceExpiryDate();
        checkLicenceNUmber();
        checkLicenceImage();
        checkContact();
        checkExperienceYear();
        ckeckLicenceClass();
        return false;
    }
}