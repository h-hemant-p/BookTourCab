// Function Number : 3

function checkUsername3() {
  let user_name = document.getElementById('user-name');

  let valid = false;
  const min = 3,
      max = 25;

  const input_user_name = user_name.value.trim();

  if (!isRequired3(input_user_name)) {
      showError3(user_name, 'Username cannot be blank.');
  } else if (!isBetween3(input_user_name.length, min, max)) {
      showError3(user_name, `Username must be between ${min} and ${max} characters.`)
  } else {
      showSuccess3(user_name);
      valid = true;
  }
  return valid;
};

function checkEmail3(){
  let user_email =  document.getElementById('user-email');

  let valid = false;
  const email = user_email.value.trim();

  if (!isRequired3(email)) {
      showError3(user_email, 'Email cannot be blank.');
  } else if (!isEmailValid3(email)) {
      showError3(user_email, 'Email is not valid.')
  } else {
      showSuccess3(user_email);
      valid = true;
  }
  return valid;
};

function checkUserCity3(){

  let user_city = document.getElementById('user-city');
  let valid = false;
  let user_city_input = user_city.value.trim();

  if(!isRequired3(user_city_input)){
      showError3(user_city,"City cannot be blank.")
  }
  else{
      showSuccess3(user_city);
      valid = true;
  }
  return valid;
}

function checkUserState3(){
  
  let user_state = document.getElementById('user-state');
  let valid = false;
  let user_state_input = user_state.value.trim();

  if(!isRequired3(user_state_input)){
      showError3(user_state,"City cannot be blank.")
  }
  else{
      showSuccess3(user_state);
      valid = true;
  }
  return valid;
}

function checkAadharNumber3(){
  let user_aadhar_number = document.getElementById('user-aadhar-number');
  let valid = false;

  let input_aadhar_number = user_aadhar_number.value.trim();
  
  if(!isRequired3(input_aadhar_number)){

      showError3(user_aadhar_number, 'Aadhar number cannot be blank.');
  } else if (!isAadharValid3(input_aadhar_number)) {
      showError3(user_aadhar_number, 'Aadhar number is not valid.')
  } else {
      showSuccess3(user_aadhar_number);
      valid = true;
  }
  return valid;
};

function checkAadharImage3(){
  let user_aadhar_image = document.getElementById('user-aadhar-img');
  let valid  = false;
  let input_user_image = user_aadhar_image.files[0];
  if(!isValidFile3(input_user_image)){
      showError3(user_aadhar_image,"Image cannot be blank.")
  }
  else{
      showSuccess3(user_aadhar_image)
      valid = true;
  }
  return valid;
} 

function checkPanCardNumber3(){
  let user_pan_number = document.getElementById('user-pan-number');
  
  let valid = false;
  let input_pan_number = user_pan_number.value.trim();

  if(!isRequired3(input_pan_number)){
      showError3(user_pan_number, 'Pan number cannot be blank.');
  }
  else if(!isPanNumberValid3(input_pan_number)){
      showError3(user_pan_number, 'Pancard number is not valid.')
  }
  else{
      showSuccess3(user_pan_number);
      valid = true;
  }
  return valid;
}

function checkPanCardImage3(){
  let user_pancard_image = document.getElementById('user-pancard-image');

  let valid  = false;
  let input_user_pan = user_pancard_image.files[0];

  if(!isValidFile3(input_user_pan)){
      showError3(user_pancard_image,"Image cannot be blank.")
  }
  else{
      showSuccess3(user_pancard_image)
      valid = true;
  }
  return valid;
}

function checkPincode3(){
  let user_pincode = document.getElementById('pincode');
  let valid = false;

  let input_pincode = user_pincode.value.trim();
  if(!isRequired3(input_pincode)){
      showError3(user_pincode, 'Pincode cannot be blank.');
  } else if (!isPincodeValid3(input_pincode)) {
      console.log(input_pincode);
      
      showError3(user_pincode, 'Pincode is not valid.')
  } else {
      showSuccess3(user_pincode);
      valid = true;
  }
  return valid;
};


function checkAddress3(){
  let user_address = document.getElementById('user-address');
  let valid = false;

  let input_address = user_address.value.trim();

  if(!isRequired3(input_address)){
      showError3(user_address, 'Address cannot be blank.');
  } else if (!isAddressValid3(input_address)) {
      showError3(user_address, 'Address is not valid.')
  } else {
      showSuccess3(user_address);
      valid = true;
  }
  return valid;
}

// ------------------------------ Regx Patterns ---------------------------

function isEmailValid3(email){
  const res =  /^\w+([\.-])?\w*@[a-z]*([\.][a-z]{2,3})+$/;
  return res.test(email);
}

function isAadharValid3(aadhar_number){
  const res = /^[1-9]\d{11}$/;
  return res.test(aadhar_number); 
}

function isPanNumberValid3(pan_number){
  var res = /^[A-Z]{5}[0-9]{4}[A-Z]$/;
  return res.test(pan_number);
}

function isPincodeValid3(pincode){
  const res = /^\d{6}$/;
  return res.test(pincode);
}

function isAddressValid3(address){
  const res = /^[a-zA-Z0-9\s.,-]+$/;
  return res.test(address); 
}

function isValidFile3(input){
  if(input == "" || input ==  null || input == undefined)
  return false;
  return true;
}

function isRequired3(value){
  if(value === '')
    return false;
  return true;
}
function isBetween3(length, min, max) {
  if(length < min || length > max) 
      return false;
  return true;
}



function showError3(input, message){
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
}

function showSuccess3(input){
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}



function submitFormData3(){//
  if(checkUsername3() && checkUserCity3() && checkUserState3() && checkAadharNumber3() && checkPincode3() && checkAddress3() && checkAadharImage3()){
      console.log("Form Submit Successfully !!");
      // (async()=>{swal("Good job!", "You clicked the button!", "success");})();
      return true;
  }

  else{
      checkUsername3();
      checkUserCity3();
      checkUserState3();
      checkAadharNumber3();
      checkPincode3();
      checkAddress3();
      checkAadharImage3();
      return false;
  }
  
}
