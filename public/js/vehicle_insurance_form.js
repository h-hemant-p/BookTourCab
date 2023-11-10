// Function No : 8

/*  Check Policy Number Start */
function checkPolicyNumber8() {
  var policynumber = document.getElementById('policy-number');

  let valid8 = false;
  let policynumber_input = policynumber.value.trim();

  if (!isRequired(policynumber_input)) {
    showError8(policynumber, "Policy Number Cannot be Blank.")
  }
  else if (!validPolicyNumber(policynumber_input)) {
    showError8(policynumber, "Invalid Policy Number");
  }
  else {
    showSuccess8(policynumber);
    valid8 = true;
  }
  return valid8;
}
/*  Check Policy Number End */


/*  Check Policy HolerName Start */
function checkPolicyHolderName8() {
  let policyholder = document.getElementById('policy-holder-name');

  let valid8 = false;
  let policyholder_input = policyholder.value.trim();

  if (!isRequired8(policyholder_input)) {
    showError8(policyholder, "Policy Holder Name Cannot Be Blank")
  }
  else if (!isValidPolicyHolderName(policyholder_input)) {
    showError8(policyholder, "Invalid Policy Holder Name.")
  }
  else {
    showSuccess8(policyholder);
    valid8 = true;
  }
  return valid8;
}
/*  Check Policy HolerName End */


function checkPolicyHolderContact8() {

  let policyholdercontact = document.getElementById('policy-holder-contact');

  let valid8 = false;
  let policyholdercontact_input = policyholdercontact.value.trim();

  if (!isRequired8(policyholdercontact_input)) {
    showError8(policyholdercontact, "Contact Cannot Be Blank.")
  }
  else if (!isValidContact(policyholdercontact_input)) {
    showError8(policyholdercontact, "Invalid Contact Number.")
  }
  else {
    showSuccess8(policyholdercontact);
    valid8 = true;
  }
  return valid8;
}

function checkAadharNumber8() {
  let aadhar_number = document.getElementById('policy-holder-aadhar');

  let valid8 = false;
  let aadhar_input = aadhar_number.value.trim();

  if (!isRequired8(aadhar_input)) {
    showError8(aadhar_number, "Aadhar Cannot Be Blank.");
  }
  else if (!isAadharValid(aadhar_input)) {
    showError8(aadhar_number, "Invalid Aadhar Number");
  }
  else {
    showSuccess8(aadhar_number);
    valid8 = true;
  }
  return true;
}

function checkCoveageStartDate8() {
  let coverage_start_date = document.getElementById("coverage-start-date")
  let valid = false;

  const coverage_start_date_input = coverage_start_date.value.trim();
  if (!isRequired8(coverage_start_date_input)) {
    showError8(coverage_start_date, 'Date cannot be blank.');

  }
  else if (!isValidCoverageStartDate(coverage_start_date_input)) {
    showError8(coverage_start_date, 'Date is not valid.')
  }
  else {
    showSuccess8(coverage_start_date);
    valid = true;
  }
  return valid;
}

function checkCoveageEndDate8() {
  let coverage_start_date = document.getElementById("coverage-start-date")
  let coverage_end_date = document.getElementById("coverage-end-date")
  let valid = false;

  let start_date_input = coverage_start_date.value.trim();

  if (!isRequired8(start_date_input)) {
    showError8(coverage_end_date, "Select Start Date First")
  }
  else {

    let coverage_end_date_input = coverage_end_date.value.trim();

    if (!isRequired8(coverage_end_date_input)) {
      showError8(coverage_end_date, 'Date cannot be blank.');

    }
    else if (!isValidCoverageEndDate(start_date_input, coverage_end_date_input)) {
      showError8(coverage_end_date, 'End Date is not valid.')
    }
    else {
      showSuccess8(coverage_end_date);
      valid = true;
    }
    return valid;
  }
  return valid;
}

function checkPremiumAmount8() {
  let insurance_premium_amount = document.getElementById("insurance-premium-amount")
  let valid = false;

  const insurance_premium_amount_input = insurance_premium_amount.value.trim();
  if (!isRequired8(insurance_premium_amount_input)) {
    showError8(insurance_premium_amount, 'Premium Amount cannot be blank.');

  }
  else if (!isValidPremiumAmount(insurance_premium_amount_input)) {
    showError8(insurance_premium_amount, 'Premium Amount is not valid.')
  }
  else {
    showSuccess8(insurance_premium_amount);
    valid = true;
  }
  return valid;
}

function checkCoverageAmount8() {

  let insurance_premium_amount = document.getElementById("insurance-premium-amount")
  let coverage_amount = document.getElementById("coverage-amount");

  let valid = false;
  const insurance_premium_amount_input = insurance_premium_amount.value.trim();

  if (!isRequired8(insurance_premium_amount_input)) {
    showError8(coverage_amount, "Fill premium amount First");
  }
  else {
    const coverage_amount_input = coverage_amount.value.trim();
    showError8(coverage_amount, 'Amount cannot be blank.');
    if (!isRequired8(coverage_amount_input)) {

    }
    else if (!isValidCoverageAmount(insurance_premium_amount_input, coverage_amount_input)) {
      showError8(coverage_amount, 'Coverage Amount is not valid.')
    }
    else {
      showSuccess8(coverage_amount);
      valid = true;
    }
    return valid;
  }
  return valid;
}

function checkInsuranceProvider8() {
  let insurance_provider = document.getElementById("insurance-provider");
  let valid = false;

  const insurance_provider_input = insurance_provider.value.trim();
  if (!isRequired8(insurance_provider_input)) {
    showError8(insurance_provider, 'Insurance Provider cannot be blank.');

  }
  else if (!isvalidProvider(insurance_provider_input)) {
    showError8(insurance_provider, 'Insurance Provider is not valid.')
  }
  else {
    showSuccess8(insurance_provider);
    valid = true;
  }
  return valid;
};


function submitInsuranceDetails(){
  if(checkPolicyNumber8() && checkPolicyHolderName8() && checkPolicyHolderContact8() && checkAadharNumber8() && checkCoveageStartDate8() && checkCoveageEndDate8() && checkPremiumAmount8() && checkCoverageAmount8() && checkInsuranceProvider8()){
    return true;
  }
  else{
    checkPolicyNumber8();
    checkPolicyHolderName8();
    checkPolicyHolderContact8();
    checkAadharNumber8();
    checkCoveageStartDate8();
    checkCoveageEndDate8();
    checkPremiumAmount8();
    checkCoverageAmount8();
    checkInsuranceProvider8();
    return false;
  }

}

function isRequired8(value) {
  if (value === '')
    return false;
  return true;
}

function validPolicyNumber(policynumber_input) {
  const res = /^[A-Za-z0-9]{8,}$/;
  return res.test(policynumber_input);
}

function isValidPolicyHolderName(policyholder_input) {
  const res = /^[a-zA-Z]{3,20}$/;
  return res.test(policyholder_input);
}

function isValidContact(mobile_no_input) {
  console.log("check mobile");
  const res = /^[6789][0-9]{9}$/;
  return res.test(mobile_no_input);
}

function isAadharValid(aadhar_number) {
  const res = /^[1-9]\d{11}$/;
  return res.test(aadhar_number);
}

function isValidCoverageStartDate(coverage_start_date_input) {
  let input_date = new Date(coverage_start_date_input);
  let currentdate = new Date();
  console.log(currentdate);
  if (input_date > currentdate)
    return false;
  return true;
}

function isValidCoverageEndDate(start_date_input, end_date_input) {
  let start_date = new Date(start_date_input);
  let end_date = new Date(end_date_input);

  if (start_date > end_date)
    return false;
  return true;
}

function isValidPremiumAmount(insurance_premium_amount_input) {
  const res = /^(?!0$)[1-9]\d*$/;
  return res.test(insurance_premium_amount_input);
}

function isValidCoverageAmount(premium_amount, coverage_amount) {
  const res = /^(?!0$)[1-9]\d*$/;

  if (res.test(coverage_amount)) {
    if (premium_amount > coverage_amount) {
      return false;
    }
    else {
      return true;
    }
  }
  return false;
}

function isvalidProvider(insurance_provider_input) {
  const res = /^[A-Za-z '-]+$/;
  return res.test(insurance_provider_input);
};

function showError8(input, message) {
  // get the form-field element
  const formField = input.parentElement;
  // add the error class
  formField.classList.remove('success');
  formField.classList.add('error');

  // show the error message
  const error = formField.querySelector('small');
  error.textContent = message;
}

function showSuccess8(input) {
  // get the form-field element
  const formField = input.parentElement;

  // remove the error class
  formField.classList.remove('error');
  formField.classList.add('success');

  // hide the error message
  const error = formField.querySelector('small');
  error.textContent = '';
}