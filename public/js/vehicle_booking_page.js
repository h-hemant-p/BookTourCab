/*------------------------  Function Number 5 ------------------- */

function bookStartDate5(){
    console.log("check Book Start date");

    let bookingdate = document.getElementById('bookstartdate');

    let valid = false;
    let bookingdate_input = bookingdate.value.trim();

    if(!isRequired5(bookingdate_input)){
        showError5(bookingdate,"Date cannot be blank.")
    }
    else if(!isValidBookingDate5(bookingdate_input)){
        showError5(bookingdate,"Invalid Date input.")
    }
    else{
        showSuccess5(bookingdate);
        valid = true;
    }
    return valid;
}
function checkBookStartTime5(){
    let starttime = document.getElementById('bookstarttime');
    
    let valid = false;
    let starttime_input = starttime.value.trim();

    if(!isRequired5(starttime_input)){
        showError5(starttime,"Time cannot be blank.");
    }
    else if(!isValidBookStartTime5(starttime_input)){
        showError5(starttime,'Invalid time input.');
    }
    else{
        showSuccess5(starttime);
        valid = true;
    }
    return valid;
}

function BookEndDate5(){
    let bookingstart = document.getElementById('bookstartdate');
    let bookingend = document.getElementById('bookenddate');

    let bookingstart_input = bookingstart.value.trim();
    if(!isRequired5(bookingstart_input)){
        showError5(bookingend,"select Start Date First.")
    } 
    else{
        let valid = false;
        let bookingend_input = bookingend.value.trim();

        if(!isRequired5(bookingend_input)){
            showError5(bookingend,"Date cannot be blank.")
        }
        else if(!isValidBookingDate5(bookingend_input)){
            showError5(bookingend,"Invalid Date input.")
        }
        else{
            if(!isValidBookingEndDate5(bookingstart_input,bookingend_input)){
                showError5(bookingend,"Start Date Cannot Be Greater than End Date.");
            }
            else{
                showSuccess5(bookingend);
                valid = true;
            }
        }
    }
    return valid;
}



function checkPickUpLocation5(){
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

function checkDropLocation5(){
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

function checkPaymentMode5(){
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

function isValidBookingDate5(date){
    let selectdate = new Date(date);
    let currdate = new Date();

    if(selectdate > currdate)
        return true;
    return false;
}

function isValidBookingEndDate5(startdate,enddate){
    let start = new Date(startdate);
    let end = new Date(enddate);

    if(start>end)
        return false;
    return true;
}

function isValidBookStartTime5(starttime){
    
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




var postData = ()=>{
    var data = {
        bookstartdate : document.getElementById('bookstartdate').value,
        bookstarttime : document.getElementById('bookstarttime').value,
        bookenddate : document.getElementById('bookenddate').value,
        bookendtime : document.getElementById('bookendtime').value,
        pickuplocation : document.getElementById('pickuplocation').value,
        droplocation : document.getElementById('droplocation').value,
    }
    const url = 'http://localhost:3000/user/booking';
    const request = new Request(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    fetch(request)
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(responseData => {
        console.log('Server response:', responseData);
    })
    .catch(error => {
        console.error('Error:', error);
    });
}