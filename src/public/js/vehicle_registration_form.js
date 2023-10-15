
function VehicleRigistrationNumber() {
  let registration_number = document.getElementById("registration-number");
  let valid = false;

  const registration_number_input = registration_number.value.trim();
  if (!isRequired(registration_number_input)) {
    console.log("REquired");
    showError(registration_number, 'registration Number cannot be blank.');

  } else if (!ischeckVehicleRigistrationNumber(registration_number_input)) {
    showError(registration_number, 'registratio Number is not valid.')
  } else {
    showSuccess(registration_number);
    valid = true;
  }
  return valid;
};

function VehicleCompaneyName() {
  let company_name = document.getElementById("company-name");
  let valid = false;

  const company_name_input = company_name.value.trim();
  if (!isRequired(company_name_input)) {
    console.log("REquired");
    showError(company_name, 'Companey Name cannot be blank.');

  } else if (!ischeckVehicleCompaneyName(company_name_input)) {
      showError(company_name, 'Companey Name is not valid.')
  } else {
      showSuccess(company_name);
      valid = true;
  }
  return valid;
};

function VehicleRegistrationYear() {
  let manufacture_year = document.getElementById("manufacture-year");
  let registration_year = document.getElementById("registration-year");
  let valid = false;

  let registration_year_input = registration_year.value.trim();
  const manufacture_year_input = manufacture_year.value.trim();
  if(!isRequired(manufacture_year_input)){
    showError(registration_year, 'Select manufacture year first');
  }
  else{
      if (!isRequired(registration_year_input)) {
          showError(registration_year, 'Registration year cannot be blank.');
      } else if (!isVehicleRegistrationYear(manufacture_year_input,registration_year_input)) {
          showError(registration_year, 'Registration year is not valid.')
      } else {
          showSuccess(registration_year);
          valid = true;
      }
      return valid;
    }
};

function VehicleManufactureYear() {
  let manufacture_year = document.getElementById("manufacture-year");
  let valid = false;

  const manufacture_year_input = manufacture_year.value.trim();
  if (!isRequired(manufacture_year_input)) {
      showError(manufacture_year, 'Manufacture year cannot be blank.');
  } else if (!ischeckVehicleManufactureYear(manufacture_year_input)) {
      showError(manufacture_year, 'Manufacture year is not valid.')
  } else {
      showSuccess(manufacture_year);
      valid = true;
  }
  return valid;
};

function VehicleModelName() {
  let model_name = document.getElementById("model-name");

  let valid = false;
  const model_name_input = model_name.value.trim();

  if (!isRequired(model_name_input)) {
    showError(model_name, 'Model name be blank.');

  } 
  else if (!ischeckVehicleModelName(model_name_input)) {
    showError(model_name, 'Model name is not valid.')
  } 
  else {
    showSuccess(model_name);
    valid = true;
  }
    return valid;
};

function VehicleSittingCapacity() {
  let seating_capacity = document.getElementById("seating-capacity");
  let valid = false;

  const seating_capacity_input = seating_capacity.value.trim();
  if (!isRequired(seating_capacity_input)) {
      showError(seating_capacity, 'Capacity cannot be blank.');
  } else if (!ischeckVehicleSittingCapacity(seating_capacity_input)) {
      showError(seating_capacity, 'Capacity is invalid.')
  } else {
      showSuccess(seating_capacity);
      valid = true;
  }
  return valid;
}

function checkSelectedVehicle(){
  let select_vehicle = document.getElementById('select-vehicle');

  let valid = false;
  var select_vehicle_input = select_vehicle.value.trim();

  if(!isRequired(select_vehicle_input)){
    showError(select_vehicle,"Vehicle Required.")
  }
  else{
    showSuccess(select_vehicle);
    valid = true;
  }
  return valid;
}

function checkFuelType(){
  let fuel_type = document.getElementById('fuel-type');

  let valid = false;
  var fuel_type_input = fuel_type.value.trim();

  if(!isRequired(fuel_type_input)){
    showError(fuel_type,"Fuel type Required.")
  }
  else{
    showSuccess(fuel_type);
    valid = true;
  }
  return valid;
}

function checkVehicleRcBook(){
  var rc_book_image = document.getElementById('rc-book-image');
  let valid = false;
  let input_rc_book = rc_book_image.files[0];

  if(!isValidFile(input_rc_book)){
    showError(rc_book_image,"File Cannot be blank.")
  }
  else{
    showSuccess(rc_book_image);
    valid = true;
  }
  return valid;
}

function chechPucCertificate(){
  let puc_certificate_image = document.getElementById('puc-certificate-image');

  let valid = false;
  let input_puc_certificate = puc_certificate_image.files[0];

  if(!isValidFile(input_puc_certificate)){
    showError(puc_certificate_image,"File Cannot be blank.")
  }
  else{
    showSuccess(puc_certificate_image);
    valid = true;
  }
  return valid;
}

function checkFitnessCertificate(){
  let fitness_certificate_image = document.getElementById('fitness-certificate-image');

  let valid = false;
  let input_fitness_certificate = fitness_certificate_image.files[0];

  if(!isValidFile(input_fitness_certificate)){
    showError(fitness_certificate_image,"Certificate Cannot be blank.")
  }
  else{
    showSuccess(fitness_certificate_image);
    valid = true;
  }
  return valid;
}

// wo wale function..hehehehehehe

function ischeckVehicleRigistrationNumber(registration_number_input) {
    console.log("check mobile");
    const res =/^[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/;
    return res.test(registration_number_input);
};

function ischeckVehicleCompaneyName(company_name_input){
  const res = /^[A-Za-z '-]+$/;
  return res.test(company_name_input);
};

function isVehicleRegistrationYear( manufacture_year_input,registration_year){
  const manufacture_year_inputs = new Date(manufacture_year_input);
  const registration_years = new Date(registration_year);
  
  if( registration_years < manufacture_year_inputs)
    return false;
  
  return true;
};

function ischeckVehicleManufactureYear(registration_year_input ) {
  const selectedDate = new Date(registration_year_input);
  const currentDate = new Date();
  // Check if the selected date is in the future
  if (selectedDate > currentDate)
      return false;
      return true;

};

function ischeckVehicleModelName(model_name_input){
  const res = /^[A-Za-z '-]+$/;
  return res.test(model_name_input);
};

function ischeckVehicleSittingCapacity(seating_capacity_input){
  const res = /^\d+$/;
  return res.test(seating_capacity_input);
};


var isRequired = (value)=> {
  if (value == "")
    return false;
  else
    return true;
}

function isValidFile(input){
  if(input == "" || input ==  null || input == undefined)
  return false;
  return true;
}

function isBetween(length, min, max) { length < min || length > max ? false : true };

function showError(input, message) {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
};


function showSuccess(input) {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}

function submitVehicleDetails(){

  if( VehicleRigistrationNumber() &&  VehicleCompaneyName() &&  VehicleRegistrationYear() &&  VehicleManufactureYear() &&  VehicleModelName() &&  checkSelectedVehicle() &&  checkFuelType() &&  checkVehicleRcBook() &&  chechPucCertificate() &&  chechFitnessCertificate() &&  VehicleSittingCapacity())
  {
    return true;
  }
  else{
    VehicleRigistrationNumber();
    VehicleCompaneyName();
    VehicleRegistrationYear();
    VehicleManufactureYear();
    VehicleModelName();
    checkSelectedVehicle();
    checkFuelType();
    checkVehicleRcBook();
    chechPucCertificate();
    checkFitnessCertificate();
    VehicleSittingCapacity();
    return false;
  }
}