function checkName() {
    let contact_username = document.getElementById('contact-name');
    // console.log("hello .... ");
    let valid = false;
    const min = 3,
        max = 25;

    const input_name = contact_username.value.trim();

    if (!isRequired(input_name)) {
        showError(contact_username, 'Username cannot be blank.');
    } else if (!isBetween(input_name.length, min, max)) {
        showError(contact_username, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess(contact_username);
        valid = true;
    }
    return valid;
}

function checkContactEmail() {
    console.log("Hiii...");
    let contact_email = document.getElementById('contact-email');

    let valid = false;
    const email = contact_email.value.trim();

    if (!isRequired(email)) {
        showError(contact_email, 'Email cannot be blank.');
    } 
    else if (!isEmailValid(email)) {
        showError(contact_email, 'Email is not valid.')
    } 
    else {
        showSuccess(contact_email);
        valid = true;
    }
    return valid;
}


function checkContact() {
    let contact_mobile = document.getElementById('mobile');
    let valid = false;
    let contact_mobile_input = contact_mobile.value.trim();

    if(!isRequired(contact_mobile_input)){
        showError(contact_mobile,"Contact number connot be blank.")
    }
    else if(!isValidContact(contact_mobile_input)){
        showError(contact_mobile,'Invalid contact number.')
    }
    else{
        showSuccess(contact_mobile);
        valid = true;
    }
    return valid;
}

function checkRole(){
    let contact_role = document.getElementById('role');
    let valid = false;
    let contact_role_input = contact_role.value.trim();

    if(!isRequired(contact_role_input)){
        showError(contact_role,'licence class cannot be blank')
    }
    else{
        showSuccess(contact_role);
        valid = true;
    }
    return valid;
}

function checkComment(){
    let comment = document.getElementById('contact-comment');
    let valid = false;
    let comment_input = comment.value.trim();
    if(!isRequired(comment_input)){
        showError(comment,"comment cannot be blank");
    } 
    else{
        showSuccess(comment);
        valid = true;
    }
    return valid;
}

const isRequired = value => value === '' ? false : true;
  const isBetween = (length, min, max) => length < min || length > max ? false : true;


function isEmailValid (email) {
    const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/;
    return res.test(email);
}



function isValidContact(contact_no){
    var res = /^[6-9]\d{9}$/;
    return res.test(contact_no);
}

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
function submitContactData(){
   
   if( checkName() && checkContactEmail() && 
        checkContact() && checkRole() && checkComment()){
        return true;
    }
    else{
        checkName();
        checkContactEmail();
        checkContact();
        checkRole();
        checkComment();
        return false;
    }
}