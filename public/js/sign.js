// Functions numbering : 2


/* ------------------------------  Signup Start ------------------------------------ */

function checkMobileNumberUp2(){
    let mobile_no = document.getElementById('mobile-no');
    let valid = false;

    const mobile_no_input = mobile_no.value.trim();
    console.log(mobile_no_input);
    if (!isRequired2(mobile_no_input)) {
        showError2(mobile_no, 'Contact cannot be blank.');

    } else if (!ischeckMobileNumberSignUpValid2(mobile_no_input)) {
        showError2(mobile_no, 'Contact is not valid.')
    } else {
        showSuccess2(mobile_no);
        valid = true;
    }
    return valid;
};

function checkEmail2(){
    console.log("inside check email");
    console.log(checkMobileNumberUp2());
    console.log("after check email");

    let email_Signup = document.getElementById("email-signup");
    let valid = false;
    const email = email_Signup.value.trim();
    if (!isRequired2(email)) {
        showError2(email_Signup, 'Email cannot be blank.');
    } else if (!isEmailValid2(email)) {
        showError2(email_Signup, 'Email is not valid.')
    } else {
        showSuccess2(email_Signup);
        valid = true;
    }
    // console.log(valid);
    return valid;
};

function checkOtpValue2(){
    console.log("Inside Check Otp");
    let otp = document.getElementById('otp');

    let otp_input = otp.value.trim();
    let valid = false;

    if(!isRequired2(otp_input)){
        showError2(otp, 'Otp cannot be blank.')
    }
    else if(!isValidOtp2(otp_input)){
        showError2(otp,'Invalid Otp input.')
    }
    else{
        showSuccess2(otp);
        valid = true;
    }
    return valid;
}
/* ------------------------------  Signup End ------------------------------------ */


/* ------------------------------  Signin Start ------------------------------------ */
function checkSigninEmail2(){
    let signin_email = document.getElementById('signin-email');
        
    let valid = false;
    const signin_email_input = signin_email.value.trim();
    console.log("Email : "+signin_email_input);
    
    if (!isRequired2(signin_email_input)) {
        console.log("Required");
        showError2(signin_email, 'Email cannot be blank.');

    } else if (!isEmailValid2(signin_email_input)) {
        showError2(signin_email, 'Email is not valid.')
    } else {
        showSuccess2(signin_email);
        valid = true;
    }
    return valid;
}

function checkSigninPassword2(){
    let password = document.getElementById('signin-password');

    let valid = false;
    let password_input = password.value.trim();

    if(!isRequired2(password_input)){
        showError2(password, 'password cannot be blank.');
    }
    else if(!isValidPassword2(password_input)){
        showError2(password, 'invalid password.');
    }
    else{
        showSuccess2(password);
        valid = true;
    }
    return valid;
}

function checkSignInPasswordData2(){
    if(checkSigninEmail2() && checkSigninPassword2()){
        return true;
    }
    else{
        checkSigninEmail2();
        checkSigninPassword2();
        return false;
    }
}
/* ------------------------------  Signin End ------------------------------------ */
/* ------------------------------  Sign with otp Start ------------------------------------ */
function checkOtpSigninEmail2(){
    let sign_email = document.getElementById('signin-otp-email');

    let valid = false;
    let sign_email_input = sign_email.value.trim();

    if(!isRequired2(sign_email_input)){
        showError2(sign_email,"E-mail connot be blank.")
    }
    else if(!isEmailValid2(sign_email_input)){
        showError2(sign_email,'email is not valid.')
    }
    else{
        showSuccess2(sign_email);
        valid = true;
    }
    return valid;
}

function checkSigninOtp2(){
    console.log("Hiiii.......");
    let signin_otp = document.getElementById('signin-otp');
    
    let valid = false;
    let signin_otp_input = signin_otp.value.trim();

    if(!isRequired2(signin_otp_input)){
        showError2(signin_otp,"otp cannot be blank.")
    }
    else if(!isValidOtp2(signin_otp_input)){
        showError2(signin_otp,'invalid otp.')
    }
    else{
        showSuccess2(signin_otp);
        valid = true;
    }
    return valid;
}

/* ------------------------------  Sign with otp End ------------------------------------ */

function ischeckMobileNumberSignUpValid2(mobile_no_input){
    console.log("check mobile");
    const res = /^[6789][0-9]{9}$/;
    return res.test(mobile_no_input);
};

function isEmailValid2(email){
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/
    return res.test(email);
};

function isValidOtp2(otp){
    const res = /^[1-9][0-9]{3}$/
    return res.test(otp);
}

function isValidPassword2(password){
    const res =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    return res.test(password);
}

function isRequired2(value){ 
    if(value == "")
        return false;
    else
        return true;
}

// function isBetween(length, min, max){ length < min || length > max ? false : true};

function showError2(input, message){
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}


function showSuccess2(input){
    // get the form-field element
    const formField = input.parentElement;

    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');

    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
}


function submitDetails2(){
    console.log("Hiii.... ");
    return checkOtpValue2();
}


// -----------------------------------------------------------------------------------------------

const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});

const SIGNPASS = `<form action="/signin" method="post" onsubmit="return checkSignInPasswordData2()">
<h1>Sign In</h1>
<div class="social-icons">
    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
</div>
<span>or use your email password</span>
<input type="email" placeholder="Enter Your Email" id="signin-email" name="email" style="text-align: center;" onkeyup="checkSigninEmail2()">
<small class="ms-4"></small>
<input type="password" placeholder="Enter Your Password" id="signin-password" name="password" style="text-align: center;" onkeyup="checkSigninPassword2()">
<small class="ms-4"></small>
<input type="submit" value="Sign In" style="background-color: rgb(80, 80, 250); font-weight: bold; color: white;">
<a href="#" onclick="signInWithOTP()">Sign in with OTP</a>
</form>`;

const SIGNOTP = `<form>
<h1>Sign In</h1>
<div class="social-icons">
    <a href="#" class="icon"><i class="fa-brands fa-google-plus-g"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-facebook-f"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-github"></i></a>
    <a href="#" class="icon"><i class="fa-brands fa-linkedin-in"></i></a>
</div>
<span>or use your email</span>
</form>
<form action="/getotp" method="post" onsubmit="return checkOtpSigninEmail2()">
<input type="email" placeholder="Enter Email"  id="signin-otp-email" name="email"  style="text-align: center;" onkeyup="checkOtpSigninEmail2()">
<small class="ms-3"></small>
<input type="submit" value="Get OTP" style="background-color: rgb(80, 80, 250); font-weight: bold; color: white;">
</form>
<form action="/signin" method="post" onsubmit="return checkSigninOtp2()">
<input  type="password" placeholder="Enter OTP" id="signin-otp" name="otp"  style="text-align: center;" onkeyup="checkSigninOtp2()">
<small class="ms-3"></small>
<input type="submit" value="Sign In" style="background-color: rgb(80, 80, 250); font-weight: bold; color: white;">
<a href="#" onclick="signInWithPass()">Sign in with Password</a>
</form>`;

var signInWithOTP = ()=>{
    document.getElementById('sign-in-container').innerHTML = SIGNOTP;
};

var signInWithPass = ()=>{
    document.getElementById('sign-in-container').innerHTML = SIGNPASS;
};