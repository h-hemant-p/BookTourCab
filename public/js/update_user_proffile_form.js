// Function Number : 9

function checkUsername9() {
    let user_name = document.getElementById('username');
  
    let valid = false;
    const min = 3,
        max = 25;
  
    const input_user_name = user_name.value.trim();
  
    if (!isRequired9(input_user_name)) {
        showError9(user_name, 'Username cannot be blank.');
    } else if (!isBetween9(input_user_name.length, min, max)) {
        showError9(user_name, `Username must be between ${min} and ${max} characters.`)
    } else {
        showSuccess9(user_name);
        valid = true;
    }
    return valid;
  };
  
  function checkUserCity9(){
  
    let user_city = document.getElementById('userupdatecity');
    let valid = false;
    let user_city_input = user_city.value.trim();
  
    if(!isRequired9(user_city_input)){
        showError9(user_city,"City cannot be blank.")
    }
    else{
        showSuccess9(user_city);
        valid = true;
    }
    return valid;
  }
  
  function checkUserState9(){
    
    let user_state = document.getElementById('userupdatestate');
    let valid = false;
    let user_state_input = user_state.value.trim();
  
    if(!isRequired9(user_state_input)){
        showError9(user_state,"City cannot be blank.")
    }
    else{
        showSuccess9(user_state);
        valid = true;
    }
    return valid;
  }
 
  function checkPincode9(){
    let user_pincode = document.getElementById('userpincode');
    let valid = false;
  
    let input_pincode = user_pincode.value.trim();
    if(!isRequired9(input_pincode)){
        showError9(user_pincode, 'Pincode cannot be blank.');
    } else if (!isPincodeValid9(input_pincode)) {
        console.log(input_pincode);
        
        showError9(user_pincode, 'Pincode is not valid.')
    } else {
        showSuccess9(user_pincode);
        valid = true;
    }
    return valid;
  };
  
  function checkAddress9(){
    let user_address = document.getElementById('useraddress');
    let valid = false;
  
    let input_address = user_address.value.trim();
  
    if(!isRequired9(input_address)){
        showError9(user_address, 'Address cannot be blank.');
    } else if (!isAddressValid9(input_address)) {
        showError9(user_address, 'Address is not valid.')
    } else {
        showSuccess9(user_address);
        valid = true;
    }
    return valid;
  }
  
  // ------------------------------ Regx Patterns ---------------------------
  
  function isPincodeValid9(pincode){
    const res = /^\d{6}$/;
    return res.test(pincode);
  }
  
  function isAddressValid9(address){
    const res = /^[a-zA-Z0-9\s.,-]+$/;
    return res.test(address); 
  }
  
  function isRequired9(value){
    if(value === '')
      return false;
    return true;
  }
  function isBetween9(length, min, max) {
    if(length < min || length > max) 
        return false;
    return true;
  }
  
  function showError9(input, message){
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
  
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
  }
  
  function showSuccess9(input){
    // get the form-field element
    const formField = input.parentElement;
  
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
  
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
  }
  
  function submitUpdateProfileData9(){//
    if(checkUsername9() && checkUserCity9() && checkUserState9() && checkPincode9() && checkAddress9()){
        console.log("Form Submit Successfully !!");
        return true;
    }
    else{
        checkUsername9();
        checkUserCity9();
        checkUserState9();
        checkPincode9();
        checkAddress9();
        return false;
    }
    
  }
  