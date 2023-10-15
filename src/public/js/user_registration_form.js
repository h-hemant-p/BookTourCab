

function checkUsername  () {
    let user_name = document.getElementById('user-name');

    let valid = false;
    const min = 3,
        max = 25;

    const input_user_name = user_name.value.trim();

    if (!isRequired(input_user_name)) {
        showError(user_name, 'Username cannot be blank.');
    } else if (!isBetween(input_user_name.length, min, max)) {
        showError(user_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(user_name);
        valid = true;
    }
    return valid;
};

function checkEmail(){
    let user_email =  document.getElementById('user-email');

    let valid = false;
    const email = user_email.value.trim();

    if (!isRequired(email)) {
        showError(user_email, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(user_email, 'Email is not valid.')
    } else {
        showSuccess(user_email);
        valid = true;
    }
    return valid;
};

function checkUserCity(){

    let user_city = document.getElementById('user-city');
    let valid = false;
    let user_city_input = user_city.value.trim();

    if(!isRequired(user_city_input)){
        showError(user_city,"City cannot be blank.")
    }
    else{
        showSuccess(user_city);
        valid = true;
    }
    return valid;
}

function checkUserState(){
    
    let user_state = document.getElementById('user-state');
    let valid = false;
    let user_state_input = user_state.value.trim();

    if(!isRequired(user_state_input)){
        showError(user_state,"City cannot be blank.")
    }
    else{
        showSuccess(user_state);
        valid = true;
    }
    return valid;
}

function checkAadharNumber(){
    let user_aadhar_number = document.getElementById('user-aadhar-number');
    let valid = false;

    let input_aadhar_number = user_aadhar_number.value.trim();
    
    if(!isRequired(input_aadhar_number)){

        showError(user_aadhar_number, 'Aadhar number cannot be blank.');
    } else if (!isAadharValid(input_aadhar_number)) {
        showError(user_aadhar_number, 'Aadhar number is not valid.')
    } else {
        showSuccess(user_aadhar_number);
        valid = true;
    }
    return valid;
};

function checkAadharImage(){
    let user_aadhar_image = document.getElementById('user-aadhar-img');
    let valid  = false;
    let input_user_image = user_aadhar_image.files[0];
    if(!isValidFile(input_user_image)){
        showError(user_aadhar_image,"Image cannot be blank.")
    }
    else{
        showSuccess(user_aadhar_image)
        valid = true;
    }
    return valid;
} 

function checkPanCardNumber(){
    let user_pan_number = document.getElementById('user-pan-number');
    
    let valid = false;
    let input_pan_number = user_pan_number.value.trim();

    if(!isRequired(input_pan_number)){
        showError(user_pan_number, 'Pan number cannot be blank.');
    }
    else if(!isPanNumberValid(input_pan_number)){
        showError(user_pan_number, 'Pancard number is not valid.')
    }
    else{
        showSuccess(user_pan_number);
        valid = true;
    }
    return valid;
}

function checkPanCardImage(){
    let user_pancard_image = document.getElementById('user-pancard-image');

    let valid  = false;
    let input_user_pan = user_pancard_image.files[0];

    if(!isValidFile(input_user_pan)){
        showError(user_pancard_image,"Image cannot be blank.")
    }
    else{
        showSuccess(user_pancard_image)
        valid = true;
    }
    return valid;
}

function checkPincode(){
    let user_pincode = document.getElementById('pincode');
    let valid = false;

    let input_pincode = user_pincode.value.trim();
    if(!isRequired(input_pincode)){
        showError(user_pincode, 'Pincode cannot be blank.');
    } else if (!isPincodeValid(input_pincode)) {
        console.log(input_pincode);
        
        showError(user_pincode, 'Pincode is not valid.')
    } else {
        showSuccess(user_pincode);
        valid = true;
    }
    return valid;
};


function checkAddress(){
    let user_address = document.getElementById('user-address');
    let valid = false;

    let input_address = user_address.value.trim();

    if(!isRequired(input_address)){
        showError(user_address, 'Address cannot be blank.');
    } else if (!isAddressValid(input_address)) {
        showError(user_address, 'Address is not valid.')
    } else {
        showSuccess(user_address);
        valid = true;
    }
    return valid;
}

// ------------------------------ Regx Patterns ---------------------------

function isEmailValid(email){
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/;
    return res.test(email);
}

function isAadharValid(aadhar_number){
    const res = /^[1-9]\d{11}$/;
    return res.test(aadhar_number); 
}

function isPanNumberValid(pan_number){
    var res = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
    return res.test(pan_number);
}

function isPincodeValid(pincode){
    const res = /^\d{6}$/;
    return res.test(pincode);
}

function isAddressValid(address){
    const res = /^[a-zA-Z0-9\s.,-]+$/;
    return res.test(address); 
}

function isValidFile(input){
    if(input == "" || input ==  null || input == undefined)
    return false;
    return true;
}

function isRequired(value){
    if(value === '')
      return false;
    return true;
}
function isBetween(length, min, max) {
    if(length < min || length > max) 
        return false;
    return true;
}



function showError(input, message){
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess(input){
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}



function submitFormData(){//
    if(checkUsername() && checkUserCity() && checkUserState() && checkAadharNumber() && checkPincode() && checkAddress() && checkAadharImage()){
        console.log("Form Submit Successfully !!");
        // (async()=>{swal("Good job!", "You clicked the button!", "success");})();
        return true;
    }

    else{
        checkUsername();
        checkUserCity();
        checkUserState();
        checkAadharNumber();
        checkPincode();
        checkAddress();
        checkAadharImage();
        return false;
    }
    for (let index = 0; index < 1000; index++) {
        console.log('hi');
        
        
    }
    
}
