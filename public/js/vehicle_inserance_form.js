// <!-- User Registration Form JavaScript -->

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

function ckeckAadharImage(){
  var user_aadhar_img = document.getElementById('user-aadhar-img');
  var aadhar_img_input = user_aadhar_img.files[0];
  var valid = false;

  if(isRequired(aadhar_img_input)){
      showError(user_aadhar_img,"Cannot blank aadhar image.")
  }
  else{
      showSuccess(user_aadhar_img);
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

function submitFormData(){
  checkEmail();
  checkUserCity();
  checkUserState();
  // ckeckAadharImage();
  checkAadharNumber();
  checkPincode();
  checkAddress();

  console.log("Form Submit Successfully !!");
  return false;
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

function isPincodeValid(pincode){
  const res = /^\d{5}$/;
  return res.test(pincode);
}

function isAddressValid(address){
  const res = /^[a-zA-Z0-9\s.,-]+$/;
  return res.test(address); 
}

// const isRequired = value => value === '' ? false : true;
// const isBetween = (length, min, max) => length < min || length > max ? false : true;

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