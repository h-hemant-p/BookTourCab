// Function number : 4

/* ------------------  Dashboard Details  ----------------------------- */

function dashboardChoices(option){
    if(option === "my-profile"){
        document.getElementById('my-profile').style.display = 'block'
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'none'
    }
    else if( option === "my-bookings"){
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('my-bookings').style.display = "block";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'none'
    

    }
    else if( option === 'change-password'){
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'block'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'none'
    
    }
    else if(option === 'my-wallet'){
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'block'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'none'

    }
    else if(option === 'my-driving-history'){
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'block'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'none'

    }
    else if(option === 'my-vehicles'){
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'block'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'none'

    }
    else if(option === 'my-drivers'){
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'block'
        document.getElementById('my-vehicles-history').style.display = 'none'

    }
    else if(option === 'my-vehicles-history'){
        document.getElementById('my-bookings').style.display = "none";
        document.getElementById('my-profile').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('my-wallet').style.display = 'none'
        document.getElementById('my-driving-history').style.display = 'none'
        document.getElementById('my-vehicles').style.display = 'none'
        document.getElementById('my-drivers').style.display = 'none'
        document.getElementById('my-vehicles-history').style.display = 'block'

    }
}


/* ------------------------------ Validation Start ------------------------------------ */
/*--------------------Change Password Start ---------------------------- */
function checkChangeOldPass4(){
    // console.log("hiii");
    let oldpassword = document.getElementById('changeoldpassword');

    let valid = false;
    let oldpassword_input = oldpassword.value.trim();
  
    if(!isRequired4(oldpassword_input)){
        showError4(oldpassword,"password cannot be blank.")
    }
    else if(!isValidPass4(oldpassword_input)){
        showError4(oldpassword,"password is not valid.")
    }
    else{
        showSuccess4(oldpassword);
        valid = true;
    }
    return valid;
}

function checkChangeNewPass4(){
    let newpassword = document.getElementById('changenewpassword');

    let valid = false;
    let newpassword_input = newpassword.value.trim();
    
    if(!isRequired4(newpassword_input)){
        showError4(newpassword,"password cannot be blank.")
    }
    else if(!isValidPass4(newpassword_input)){
        showError4(newpassword,"password is not valid.")
    }
    else{
        showSuccess4(newpassword);
        valid = true;
    }
    return valid;
}

function checkChangeCnfPass4(){
    let newpassword = document.getElementById('changenewpassword');
    let cnfpassword = document.getElementById('changecnfpassword');

    let valid = false;
    let newpassword_input = newpassword.value.trim();

    if(!isRequired4(newpassword_input)){
        showError4(cnfpassword,"First enter the new password.");
    }
    else{
        let cnfpassword_input = cnfpassword.value.trim();

        if(!isRequired4(cnfpassword_input)){
            showError4(cnfpassword,"password cannot be blank.")
        }
        else if(!isValidPass4(cnfpassword_input)){
            showError4(cnfpassword,"password is not valid.");
        }
        else{
            if(!isCheckValidCnfPass(newpassword_input,cnfpassword_input)){
                showError4(cnfpassword,"password mismatched enter correct password.");
            }
            else{
                showSuccess4(cnfpassword);
                valid = true;
            }
            return valid;
        }
    }
}

function submitchangepassword(){
    if(checkChangeOldPass4() && checkChangeNewPass4 && checkChangeCnfPass4){
        return true;
    }else{
        checkChangeOldPass4();
        checkChangeNewPass4();
        checkChangeCnfPass4();
        return false;
    }
}
/*--------------------Change Password End ---------------------------- */
/*--------------------Create Password Start ---------------------------- */

function createCheckNewPass4(){
    let newpass = document.getElementById('createnewpass');
    console.log("hi..");
    let valid = false;
    let newpass_input = newpass.value.trim();

    if(!isRequired4(newpass_input)){
        showError4(newpass,"password cannot be blank.");
    }
    else if(!isValidPass4(newpass_input)){
        showError4(newpass,"password is not valid.");
    }else{
        showSuccess4(newpass);
        valid = true;
    }
    return valid;
}

function createCheckCnfPass4(){
    let newpass = document.getElementById('createnewpass');
    let cnfpass = document.getElementById('createconfirmpass');

    let valid = false;
    let newpass_input = newpass.value.trim();

    if(!isRequired4(newpass_input)){
        showError4(cnfpass,"First enter the new password.");
        return valid;
    }
    else{
        let cnfpass_input = cnfpass.value.trim();
        
        if(!isRequired4(cnfpass_input)){
            showError4(cnfpass,"password cannot be blank.");
        }
        else if(!isValidPass4(cnfpass_input)){
            showError4(cnfpass,"password is not valid.");
        }
        else{
            if(!isCheckValidCnfPass(newpass_input,cnfpass_input)){
                showError4(cnfpass,"password mismatched enter correct password.");
            }
            else{
                showSuccess4(cnfpass);
                valid = true;
            }
        
        }
        return valid;
    }
}

function submitCreateFormData(){
    if(createCheckNewPass4() && createCheckCnfPass4()){
        return true
    }
    else{
        createCheckNewPass4();
        createCheckCnfPass4();
        return false;
    }
}


/*--------------------Create Password End ---------------------------- */

function isRequired4(value){ 
    if(value == "")
        return false;
    else
        return true;
}

function isValidPass4(password){
    const res =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    // console.log('hiiiii : '+password);
    return res.test(password);
}

function isCheckValidCnfPass(newpass,cnfpass){
    if(newpass == cnfpass)
        return true;
    else
        return false;
}


function showError4(input, message){
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');

    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
}


function showSuccess4(input){
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