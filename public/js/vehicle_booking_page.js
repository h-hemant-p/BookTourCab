/*------------------------  Function Number 5 ------------------- */

function checkBookingStartDate(){
    let bookingdate = document.getElementById('bookstartdate');

    let valid = false;
    let bookingdate_input = bookingdate.value.trim();

    if(!isRequired5(bookingdate_input)){
        showError5(bookingdate,"Date cannot be blank.")
    }
    else if(!isValidBookingDate(bookingdate_input)){
        showError5(bookingdate,"Invalid Date input.")
    }
    else{
        showSuccess5(bookingdate);
        valid = true;
    }
    return valid;

function checkBookStartTime(){
    let starttime = document.getElementById('bookstarttime');
    
    let valid = false;
    let starttime_input = starttime.value.trim();

    if(!isRequired5(starttime_input)){
        showError5(starttime,"Time cannot be blank.");
    }
    else if(!isValidBookStartTime(starttime_input)){
        showError5(starttime,'Invalid time input.');
    }
    else{
        showSuccess5(starttime);
        valid = true;
    }
    return valid;
}

}
function checkBookingEndDate(){
    let bookingend = document.getElementById('bookenddate');

    let valid = false;
    let bookingend_input = bookingend.value.trim();

    if(!isRequired5(bookingend_input)){
        showError5(bookingend,"Date cannot be blank.")
    }
    else if(!isValidBookingDate(bookingend_input)){
        showError5(bookingend,"Invalid Date input.")
    }
    else{
        showSuccess5(bookingend);
        valid = true;
    }
    return valid;
}



function checkPickUpLocation(){
    let pickuplocation = document.getElementById('pickuplocation');

    let valid = false;
    let pickuplocation_input = pickuplocation.value.trim();
    console.log("pickup location : ");
    console.log(pickuplocation_input);
    
    if(!isRequired5(pickuplocation_input)){
        showError5(pickuplocation,"Location cannot be blank.")
    }
    else{
        showSuccess5(pickuplocation);
        valid = true;
    }
    return valid;
}

function checkDropLocation(){
    let droplocation = document.getElementById('droplocation');

    let valid = false;
    let droplocation_input = droplocation.value.trim();

    if(!isRequired5(droplocation_input)){
        showError5(droplocation,"Location cannot be blank.")
    }
    else{
        showSuccess5(droplocation);
        valid = true;
    }
    return valid;
}

function checkVehicleClass(){
    let vehicleclass = document.getElementById('vehicleclass');

    let valid = false;
    let vehicleclass_input = vehicleclass.value.trim();

    if(!isRequired5(vehicleclass_input)){
        showError5(vehicleclass,"vehicle class cannot be blank.");
    }
    else {
        showSuccess5(vehicleclass);
        valid = true;
    }
    return valid;
}

function checkPaymentMode(){
    let paymentmode = document.getElementById('paymentmode');

    let valid = false;
    let paymentmode_input = paymentmode.value.trim();

    if(!isRequired5(paymentmode_input)){
        showError5(paymentmode,"payment mode cannot be blank.");
    }
    else {
        showSuccess5(paymentmode);
        valid = true;
    }
    return valid;
}

function isRequired5(value) {
    if (value == "")
        return false;
    return true;
}


function isValidBookingDate(date){
    let selectdate = new Date(date);
    let currdate = new Date();
    console.log("Current date : "+currdate);
    console.log("Selected date : "+selectdate);

    if(selectdate >= currdate)
        return true;
    return false;
}

function isValidBookStartTime(starttime){
    
    let selecttime = new Date(`${starttime}`);
    console.log("selected time : "+selecttime);

    let currenttime = new Date();
    console.log("Current Time : "+currenttime);

    if(currenttime > selecttime)
        return false;
    return true;
}

function showError5(input, message) {
    const formField = input.parentElement;
    formField.classList.remove('success');
    formField.classList.add('error');

    const error = formField.querySelector('small');
    error.textContent = message;
}

function showSuccess5(input) {

    const formField = input.parentElement;

    formField.classList.remove('error');
    formField.classList.add('success');

    const error = formField.querySelector('small');
    error.textContent = '';
}