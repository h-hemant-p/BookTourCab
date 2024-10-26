// Function No : 9

/*  Check Policy Number Start */
function checkPolicyNumber9() {
    var policynumber = document.getElementById('policynumber');
        console.log("hiiiiiiii");
    let valid9 = false;
    let policynumber_input = policynumber.value.trim();
  
    if (!isRequired9(policynumber_input)) {
      showError9(policynumber, "Policy Number Cannot be Blank.")
    }
    else if (!validPolicyNumber(policynumber_input)) {
      showError9(policynumber, "Invalid Policy Number");
    }
    else {
      showSuccess9(policynumber);
      valid9 = true;
    }
    return valid9;
  }
  /*  Check Policy Number End */
  
  
  /*  Check Policy HolerName Start */
  function checkPolicyHolderName9() {
    let policyholder = document.getElementById('policyholdername');
  
    let valid9 = false;
    let policyholder_input = policyholder.value.trim();
  
    if (!isRequired9(policyholder_input)) {
      showError9(policyholder, "Policy Holder Name Cannot Be Blank")
    }
    else if (!isValidPolicyHolderName(policyholder_input)) {
      showError9(policyholder, "Invalid Policy Holder Name.")
    }
    else {
      showSuccess9(policyholder);
      valid9 = true;
    }
    return valid9;
  }
  /*  Check Policy HolerName End */
  
  
  function checkPolicyHolderContact9() {
  
    let policyholdercontact = document.getElementById('policyholdercontact');
  
    let valid9 = false;
    let policyholdercontact_input = policyholdercontact.value.trim();
  
    if (!isRequired9(policyholdercontact_input)) {
      showError9(policyholdercontact, "Contact Cannot Be Blank.")
    }
    else if (!isValidContact(policyholdercontact_input)) {
      showError9(policyholdercontact, "Invalid Contact Number.")
    }
    else {
      showSuccess9(policyholdercontact);
      valid9 = true;
    }
    return valid9;
  }
  
  function checkAadharNumber9() {
    let aadhar_number = document.getElementById('policyholderaadhar');
  
    let valid9 = false;
    let aadhar_input = aadhar_number.value.trim();
  
    if (!isRequired9(aadhar_input)) {
      showError9(aadhar_number, "Aadhar Cannot Be Blank.");
    }
    else if (!isAadharValid(aadhar_input)) {
      showError9(aadhar_number, "Invalid Aadhar Number");
    }
    else {
      showSuccess9(aadhar_number);
      valid9 = true;
    }
    return true;
  }
  
  function checkCoveageStartDate9() {
    let coverage_start_date = document.getElementById("coveragestartdate")
    let valid = false;
  
    const coverage_start_date_input = coverage_start_date.value.trim();
    if (!isRequired9(coverage_start_date_input)) {
      showError9(coverage_start_date, 'Date cannot be blank.');
  
    }
    else if (!isValidCoverageStartDate(coverage_start_date_input)) {
      showError9(coverage_start_date, 'Date is not valid.')
    }
    else {
      showSuccess9(coverage_start_date);
      valid = true;
    }
    return valid;
  }
  
  function checkCoveageEndDate9() {
    let coverage_start_date = document.getElementById("coveragestartdate")
    let coverage_end_date = document.getElementById("coverageenddate")
    let valid = false;
  
    let start_date_input = coverage_start_date.value.trim();
  
    if (!isRequired9(start_date_input)) {
      showError9(coverage_end_date, "Select Start Date First")
    }
    else {
  
      let coverage_end_date_input = coverage_end_date.value.trim();
  
      if (!isRequired9(coverage_end_date_input)) {
        showError9(coverage_end_date, 'Date cannot be blank.');
  
      }
      else if (!isValidCoverageEndDate(start_date_input, coverage_end_date_input)) {
        showError9(coverage_end_date, 'End Date is not valid.')
      }
      else {
        showSuccess9(coverage_end_date);
        valid = true;
      }
      return valid;
    }
    return valid;
  }
  
  function checkPremiumAmount9() {
    let insurance_premium_amount = document.getElementById("insurancepremiumamount")
    let valid = false;
  
    const insurance_premium_amount_input = insurance_premium_amount.value.trim();
    if (!isRequired9(insurance_premium_amount_input)) {
      showError9(insurance_premium_amount, 'Premium Amount cannot be blank.');
  
    }
    else if (!isValidPremiumAmount(insurance_premium_amount_input)) {
      showError9(insurance_premium_amount, 'Premium Amount is not valid.')
    }
    else {
      showSuccess9(insurance_premium_amount);
      valid = true;
    }
    return valid;
  }
  
  function checkCoverageAmount9() {
  
    let insurance_premium_amount = document.getElementById("insurancepremiumamount")
    let coverage_amount = document.getElementById("coverageamount");
  
    let valid = false;
    const insurance_premium_amount_input = insurance_premium_amount.value.trim();
  
    if (!isRequired9(insurance_premium_amount_input)) {
      showError9(coverage_amount, "Fill premium amount First");
    }
    else {
      const coverage_amount_input = coverage_amount.value.trim();
      showError9(coverage_amount, 'Amount cannot be blank.');
      if (!isRequired9(coverage_amount_input)) {
  
      }
      else if (!isValidCoverageAmount(insurance_premium_amount_input, coverage_amount_input)) {
        showError9(coverage_amount, 'Coverage Amount is not valid.')
      }
      else {
        showSuccess9(coverage_amount);
        valid = true;
      }
      return valid;
    }
    return valid;
  }
  
  function checkInsuranceProvider9() {
    let insurance_provider = document.getElementById("insuranceprovider");
    let valid = false;
  
    const insurance_provider_input = insurance_provider.value.trim();
    if (!isRequired9(insurance_provider_input)) {
      showError9(insurance_provider, 'Insurance Provider cannot be blank.');
  
    }
    else if (!isvalidProvider(insurance_provider_input)) {
      showError9(insurance_provider, 'Insurance Provider is not valid.')
    }
    else {
      showSuccess9(insurance_provider);
      valid = true;
    }
    return valid;
  };
  
  
  function submitUpdateInsuranceDetails(){
    if(checkPolicyNumber9() && checkPolicyHolderName9() && checkPolicyHolderContact9() && checkAadharNumber9() && checkCoveageStartDate9() && checkCoveageEndDate9() && checkPremiumAmount9() && checkCoverageAmount9() && checkInsuranceProvider9()){
      return true;
    }
    else{
      checkPolicyNumber9();
      checkPolicyHolderName9();
      checkPolicyHolderContact9();
      checkAadharNumber9();
      checkCoveageStartDate9();
      checkCoveageEndDate9();
      checkPremiumAmount9();
      checkCoverageAmount9();
      checkInsuranceProvider9();
      return false;
    }
  
  }
  
  function isRequired9(value) {
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
  
  function showError9(input, message) {
    // get the form-field element
    const formField = input.parentElement;
    // add the error class
    formField.classList.remove('success');
    formField.classList.add('error');
  
    // show the error message
    const error = formField.querySelector('small');
    error.textContent = message;
  }
  
  function showSuccess9(input) {
    // get the form-field element
    const formField = input.parentElement;
  
    // remove the error class
    formField.classList.remove('error');
    formField.classList.add('success');
  
    // hide the error message
    const error = formField.querySelector('small');
    error.textContent = '';
  }
  
  var addInsurance = ()=>{
    
  }