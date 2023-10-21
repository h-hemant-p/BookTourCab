//  Functions Numbering : 1


/* ------------------ Reserved Driver Under Owner -------------------- */



const checkUsername1 = () => {
    let driver_name = document.getElementById('driver-name');

    let valid = false;
    const min = 3,
        max = 25;

    const input_driver_name = driver_name.value.trim();

    if (!isRequired1(input_driver_name)) {
        showError1(driver_name, 'Username cannot be blank.');
    } else if (!isBetween1(input_driver_name.length, min, max)) {
        showError1(driver_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess1(driver_name);
        valid = true;
    }
    return valid;
};

    const checkEmail1 = () => {
    let driver_email = document.getElementById('driver-email');
    let valid = false;
    const email = driver_email.value.trim();
    if (!isRequired1(email)) {
        showError1(driver_email, 'Email cannot be blank.');
    } else if (!isEmailValid1(email)) {
        showError1(driver_email, 'Email is not valid.')
    } else {
        showSuccess1(driver_email);
        valid = true;
    }
    return valid;
};

function checkLicenceIssueDate1(){
    let licence_issue_date = document.getElementById('licence-issue-date');
    let valid = false;
    const input_licence_issue_date = licence_issue_date.value.trim();

    if(!isRequired1(input_licence_issue_date)){
        showError1(licence_issue_date,'Licence issue date cannot be blank.');
    }
    else if(!isValidLicenceIssueDate1(input_licence_issue_date)){
        showError1(licence_issue_date,'Invalid licence issue date.');
    }
    else{
        showSuccess1(licence_issue_date);
        valid = true;
    }
    return valid;
}

function checkLicenceExpiryDate1(){
    let licence_expiry_date = document.getElementById('licence-expiry-date');
    let licence_issue_date = document.getElementById('licence-issue-date');
    const input_issue_date = licence_issue_date.value.trim();

    if(!isRequired1(input_issue_date)){
        showError1(licence_expiry_date,'select issue date first')
    } else{
        let valid = false;
        let expiry_date_input = licence_expiry_date.value.trim();

        if(!isRequired1(expiry_date_input)){
            showError1(licence_expiry_date,'expiry date cannot be blank.');
        }
        else if(!isValidLicenceExpiryDate1(input_issue_date,expiry_date_input)){
            showError1(licence_expiry_date,'invalid expiry date');
        }
        else{
            showSuccess1(licence_expiry_date);
            valid = true;
        }
        return valid;
    }
}

function ckeckLicenceClass1(){
    let licence_class = document.getElementById('licence-class');
    let valid = false;
    let licence_class_input = licence_class.value.trim();

    if(!isRequired1(licence_class_input)){
        showError1(licence_class,'licence class cannot be blank')
    }
    else{
        showSuccess1(licence_class);
        valid = true;
    }
    return valid;
}

function checkLicenceNumber1(){
    let driving_licence_number = document.getElementById('driving-licence-number');
    let valid = false;
    let input_licence_number = driving_licence_number.value.trim();

    if(!isRequired1(input_licence_number)){
        showError1(driving_licence_number, 'Licence number cannot be blank.');
    }
    else if(!isValidLicenceNumber1(input_licence_number)){
        showError1(driving_licence_number, 'Licence number is not valid.')
    }
    else{
        showSuccess1(driving_licence_number);
        valid = true;
    }
    return valid;
}
 
function checkExperienceYear1(){
    let driver_experience_year = document.getElementById('driver-experience-year');
    let valid = false;
    let input_experience_year = driver_experience_year.value.trim();
    if(!isRequired1(input_experience_year)){
        showError1(driver_experience_year, 'Experience year cannot be blank.');
    }
    else if(!isValidExperienceYear1(input_experience_year)){
        showError1(driver_experience_year, 'Experience year is not valid.')
    }
    else{
        showSuccess1(driver_experience_year);
        valid = true;
    }
    return valid;
}

const isEmailValid1 = (email) => {
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/;
    return res.test(email);
};

const isValidLicenceIssueDate1 = (issue_date_input) => {
    const selectedDate = new Date(issue_date_input);
    const currentDate = new Date();

    // Check if the selected date is in the future
    if (selectedDate > currentDate)
        return false;
    return true;
}

const isValidLicenceExpiryDate1 = (issue_date,expiry_date) => {
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



function checkLicenceImage1(){
    // console.log("hii");
    let licence_image = document.getElementById('driver-licence-image');
    let licence_image_input = licence_image.files[0];
    var valid = false;
    

    if(!isValidFile1(licence_image_input)){
        showError1(licence_image,"Cannot blank licence image.")
    }
    else{
        showSuccess1(licence_image);
        valid = true;
    }
    return valid;
}

function isValidFile1(input){
    if(input == "" || input ==  null || input == undefined)
    return false;
    return true;
}

const isValidLicenceNumber1 = (licence_number)=>{
    const res = /^[A-Z]{2}-\d{2}-[A-Z]{2}-\d{1,10}$/;
    return res.test(licence_number);
}

const isValidExperienceYear1 = (experience_year)=>{
    const res = /^\d+$/;    
    return res.test(experience_year);
}

const isRequired1 = value => value === '' ? false : true;
const isBetween1 = (length, min, max) => length < min || length > max ? false : true;

const showError1 = (input, message) => {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
};

const showSuccess1 = (input) => {
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}

function submitFormData1(){ 
    if(checkLicenceIssueDate1() && checkLicenceExpiryDate1() && checkLicenceNumber1() && checkLicenceImage1() && checkExperienceYear1() && ckeckLicenceClass1()) {
        return true;
    }
    else{
        checkLicenceIssueDate1();
        checkLicenceExpiryDate1();
        checkLicenceNumber1();
        checkLicenceImage1();
        checkExperienceYear1();
        ckeckLicenceClass1();
        return false;
    }
}
