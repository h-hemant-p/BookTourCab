// Function number : 6

function VehicleRigistrationNumber6() {
  let registration_number = document.getElementById("registration-number");
  let valid = false;

  const registration_number_input = registration_number.value.trim();
  if (!isRequired(registration_number_input)) {
    console.log("REquired");
    showError6(registration_number, 'registration Number cannot be blank.');

  } else if (!ischeckVehicleRigistrationNumber6(registration_number_input)) {
    showError6(registration_number, 'registratio Number is not valid.')
  } else {
    showSuccess6(registration_number);
    valid = true;
  }
  return valid;
};

function VehicleCompaneyName6() {
  let company_name = document.getElementById("company-name");
  let valid = false;

  const company_name_input = company_name.value.trim();
  if (!isRequired6(company_name_input)) {
    console.log("REquired");
    showError6(company_name, 'Companey Name cannot be blank.');

  } else if (!ischeckVehicleCompaneyName6(company_name_input)) {
      showError6(company_name, 'Companey Name is not valid.')
  } else {
      showSuccess6(company_name);
      valid = true;
  }
  return valid;
};

function VehicleRegistrationYear6() {
  let manufacture_year = document.getElementById("manufacture-year");
  let registration_year = document.getElementById("registration-year");
  let valid = false;

  let registration_year_input = registration_year.value.trim();
  const manufacture_year_input = manufacture_year.value.trim();
  if(!isRequired6(manufacture_year_input)){
    showError6(registration_year, 'Select manufacture year first');
  }
  else{
      if (!isRequired6(registration_year_input)) {
          showError(registration_year, 'Registration year cannot be blank.');
      } else if (!isVehicleRegistrationYear6(manufacture_year_input,registration_year_input)) {
          showError6(registration_year, 'Registration year is not valid.')
      } else {
          showSuccess6(registration_year);
          valid = true;
      }
      return valid;
    }
};

function VehicleManufactureYear6() {
  let manufacture_year = document.getElementById("manufacture-year");
  let valid = false;

  const manufacture_year_input = manufacture_year.value.trim();
  if (!isRequired6(manufacture_year_input)) {
      showError(manufacture_year, 'Manufacture year cannot be blank.');
  } else if (!ischeckVehicleManufactureYear6(manufacture_year_input)) {
      showError6(manufacture_year, 'Manufacture year is not valid.')
  } else {
      showSuccess6(manufacture_year);
      valid = true;
  }
  return valid;
};

function VehicleModelName6() {
  let model_name = document.getElementById("model-name");

  let valid = false;
  const model_name_input = model_name.value.trim();

  if (!isRequired6(model_name_input)) {
    showError6(model_name, 'Model name be blank.');

  } 
  else if (!ischeckVehicleModelName6(model_name_input)) {
    showError6(model_name, 'Model name is not valid.')
  } 
  else {
    showSuccess6(model_name);
    valid = true;
  }
    return valid;
};

function VehicleSittingCapacity6() {
  let seating_capacity = document.getElementById("seating-capacity");
  let valid = false;

  const seating_capacity_input = seating_capacity.value.trim();
  if (!isRequired6(seating_capacity_input)) {
      showError6(seating_capacity, 'Capacity cannot be blank.');
  } else if (!ischeckVehicleSittingCapacity6(seating_capacity_input)) {
      showError6(seating_capacity, 'Capacity is invalid.')
  } else {
      showSuccess6(seating_capacity);
      valid = true;
  }
  return valid;
}

function checkSelectedVehicle6(){
  let select_vehicle = document.getElementById('select-vehicle');

  let valid = false;
  var select_vehicle_input = select_vehicle.value.trim();

  if(!isRequired6(select_vehicle_input)){
    showError6(select_vehicle,"Vehicle Required.")
  }
  else{
    showSuccess6(select_vehicle);
    valid = true;
  }
  return valid;
}

function checkFuelType6(){
  let fuel_type = document.getElementById('fuel-type');

  let valid = false;
  var fuel_type_input = fuel_type.value.trim();

  if(!isRequired6(fuel_type_input)){
    showError6(fuel_type,"Fuel type Required.")
  }
  else{
    showSuccess6(fuel_type);
    valid = true;
  }
  return valid;
}

function checkVehicleRcBook6(){
  var rc_book_image = document.getElementById('rc-book-image');
  let valid = false;
  let input_rc_book = rc_book_image.files[0];

  if(!isValidFile6(input_rc_book)){
    showError6(rc_book_image,"File Cannot be blank.")
  }
  else{
    showSuccess6(rc_book_image);
    valid = true;
  }
  return valid;
}

function ischeckVehicleRigistrationNumber6(registration_number_input) {
    console.log("check mobile");
    const res =/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    return res.test(registration_number_input);
};

function ischeckVehicleCompaneyName6(company_name_input){
  const res = /^[A-Za-z '-]+$/;
  return res.test(company_name_input);
};

function isVehicleRegistrationYear6( manufacture_year_input,registration_year){
  const manufacture_year_inputs = new Date(manufacture_year_input);
  const registration_years = new Date(registration_year);
  
  if( registration_years < manufacture_year_inputs)
    return false;
  
  return true;
};

function ischeckVehicleManufactureYear6(registration_year_input ) {
  const selectedDate = new Date(registration_year_input);
  const currentDate = new Date();
  // Check if the selected date is in the future
  if (selectedDate > currentDate)
      return false;
      return true;

};

function ischeckVehicleModelName6(model_name_input){
  const res = /^[A-Za-z '-]+$/;
  return res.test(model_name_input);
};

function ischeckVehicleSittingCapacity6(seating_capacity_input){
  const res = /^\d+$/;
  return res.test(seating_capacity_input);
};


var isRequired6 = (value)=> {
  if (value == "")
    return false;
  else
    return true;
}

function isValidFile6(input){
  if(input == "" || input ==  null || input == undefined)
  return false;
  return true;
}

function isBetween6(length, min, max) { length < min || length > max ? false : true };

function showError6(input, message) {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};


function showSuccess6(input) {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

function submitVehicleDetails6(){

  if( VehicleRigistrationNumber6() &&  VehicleCompaneyName6() &&  VehicleRegistrationYear6() &&  VehicleManufactureYear6() &&  VehicleModelName6() &&  checkSelectedVehicle6() &&  checkFuelType6() &&  checkVehicleRcBook6() &&  VehicleSittingCapacity6())
  {
    return true;
  }
  else{
    VehicleRigistrationNumber6();
    VehicleCompaneyName6();
    VehicleRegistrationYear6();
    VehicleManufactureYear6();
    VehicleModelName6();
    checkSelectedVehicle6();
    checkFuelType6();
    checkVehicleRcBook6();
    VehicleSittingCapacity6();
    return false;
  }
}