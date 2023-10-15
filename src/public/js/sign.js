/* ------------------------------  Signup Start ------------------------------------ */

function checkMobileNumberUp(){
    let mobile_no = document.getElementById('mobile-no');
    let valid = false;

    const mobile_no_input = mobile_no.value.trim();
    console.log(mobile_no_input);
    if (!isRequired(mobile_no_input)) {
        showError(mobile_no, 'Contact cannot be blank.');

    } else if (!ischeckMobileNumberSignUpValid(mobile_no_input)) {
        showError(mobile_no, 'Contact is not valid.')
    } else {
        showSuccess(mobile_no);
        valid = true;
    }
    return valid;
};

function checkEmail(){
    console.log("inside check email");
    console.log(checkMobileNumberUp());
    console.log("after check email");

    let email_Signup = document.getElementById("email-signup");
    let valid = false;
    const email = email_Signup.value.trim();
    if (!isRequired(email)) {
        showError(email_Signup, 'Email cannot be blank.');
    } else if (!isEmailValid(email)) {
        showError(email_Signup, 'Email is not valid.')
    } else {
        showSuccess(email_Signup);
        valid = true;
    }
    // console.log(valid);
    return valid;
};

function checkOtpValue(){
    console.log("Inside Check Otp");
    let otp = document.getElementById('otp');

    let otp_input = otp.value.trim();
    let valid = false;

    if(!isRequired(otp_input)){
        showError(otp, 'Otp cannot be blank.')
    }
    else if(!isValidOtp(otp_input)){
        showError(otp,'Invalid Otp input.')
    }
    else{
        showSuccess(otp);
        valid = true;
    }
    return valid;
}
/* ------------------------------  Signup End ------------------------------------ */


/* ------------------------------  Signin Start ------------------------------------ */
function checkSigninEmail(){
    let signin_email = document.getElementById('signin-email');
        
    let valid = false;
    const signin_email_input = signin_email.value.trim();
    console.log("Email : "+signin_email_input);
    
    if (!isRequired(signin_email_input)) {
        console.log("Required");
        showError(signin_email, 'Email cannot be blank.');

    } else if (!isEmailValid(signin_email_input)) {
        showError(signin_email, 'Email is not valid.')
    } else {
        showSuccess(signin_email);
        valid = true;
    }
    return valid;
}

function checkSigninPassword(){
    let password = document.getElementById('signin-password');

    let valid = false;
    let password_input = password.value.trim();

    if(!isRequired(password_input)){
        showError(password, 'password cannot be blank.');
    }
    else if(!isValidPassword(password_input)){
        showError(password, 'invalid password.');
    }
    else{
        showSuccess(password);
        valid = true;
    }
    return valid;
}

function checkSignInPasswordData(){
    if(checkSigninEmail() && checkSigninPassword()){
        return true;
    }
    else{
        checkSigninEmail();
        checkSigninPassword();
        return false;
    }
}
/* ------------------------------  Signin End ------------------------------------ */
/* ------------------------------  Sign with otp Start ------------------------------------ */
function checkOtpSigninEmail(){
    let sign_email = document.getElementById('signin-otp-email');

    let valid = false;
    let sign_email_input = sign_email.value.trim();

    if(!isRequired(sign_email_input)){
        showError(sign_email,"E-mail connot be blank.")
    }
    else if(!isEmailValid(sign_email_input)){
        showError(sign_email,'email is not valid.')
    }
    else{
        showSuccess(sign_email);
        valid = true;
    }
    return valid;
}

function checkSigninOtp(){
    console.log("Hiiii.......");
    let signin_otp = document.getElementById('signin-otp');
    
    let valid = false;
    let signin_otp_input = signin_otp.value.trim();

    if(!isRequired(signin_otp_input)){
        showError(signin_otp,"otp cannot be blank.")
    }
    else if(!isValidOtp(signin_otp_input)){
        showError(signin_otp,'invalid otp.')
    }
    else{
        showSuccess(signin_otp);
        valid = true;
    }
    return valid;
}

/* ------------------------------  Sign with otp End ------------------------------------ */

function ischeckMobileNumberSignUpValid(mobile_no_input){
    console.log("check mobile");
    const res = /^[6789][0-9]{9}$/;
    return res.test(mobile_no_input);
};

function isEmailValid(email){
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/
    return res.test(email);
};

function isValidOtp(otp){
    const res = /^[1-9][0-9]{3}$/
    return res.test(otp);
}

function isValidPassword(password){
    const res =  /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return res.test(password);
}

function isRequired(value){ 
    if(value == "")
        return false;
    else
        return true;
}

// function isBetween(length, min, max){ length < min || length > max ? false : true};

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


function submitDetails(){
    console.log("Hiii.... ");
    checkOtpValue();
    // if(checkSignUpOtp()){
    //     return true;
    // }
    // else{
    //     checkSignUpOtp();
        return false;
    // }
}