/*  Search Vehicle For Start  */
var form1 = document.getElementById('form');

form1.addEventListener('submit', function postData(e) {
    e.preventDefault()
    console.log(" ------ Inside Fetch ------");
    var data = {
        bookstartdate: document.getElementById('bookstartdate').value,
        bookstarttime: document.getElementById('bookstarttime').value,
        bookenddate: document.getElementById('bookenddate').value,
        bookendtime: document.getElementById('bookendtime').value,
        pickuplocation: document.getElementById('pickuplocation').value,
        droplocation: document.getElementById('droplocation').value,
    }

    fetch('/user/searchvehicle', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        }
    })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(responseData1 => {
            console.log('Server response:', responseData1);

            var responseData = responseData1.finalsorted;
            if (responseData.length != 0) {
                var vehicledata = "";

                var automatic = "";
                var haveac = "";
                var havedriver = "";
                for (var index in responseData) {
                    var obj = responseData[index].amount + "$$" + responseData[index].droplocation + "$$" + responseData[index].enddate + "$$" + responseData[index].endtime + "$$" + responseData[index].ownerobjid + "$$" + responseData[index].pickuplocation + "$$" + responseData[index].startdate + "$$" + responseData[index].starttime + "$$" + responseData[index].vehicleobjid + "$$" + responseData[index].totalamount + "$$" + responseData[index].gst + "$$" + responseData[index].totalHours + "$$" + responseData[index].havedriver + "$$" + "Pending" + "$$" + responseData[index].owneruserid;                    if (responseData[index].automatic) {
                        automatic = "Yes";
                    } else {
                        automatic = "No";
                    }

                    if (responseData[index].haveac) {
                        haveac = "Yes";
                    } else {
                        haveac = "No";
                    }

                    if (responseData[index].havedriver) {
                        havedriver = "Yes";
                    } else {
                        havedriver = "No";
                    }
                    const manufacturedate = responseData[index].manufactureyear;
                    const date1 = new Date(manufacturedate);
                    const manufactureyear = date1.getFullYear();

                    vehicledata += 
                    `<div class="row custom-div" >
                        <div class="col col-lg-2 bg-light">
                            <img src="uploads/${responseData[index]['vehicleimg']}" height="200px" width="220px" alt="image">
                        </div>
                        <div class=" col-lg-7 ">
                            <div class="row mt-3">
                                <p class="offset-lg-1 fs-5 fw-bold"> ${responseData[index]['company']} ${responseData[index]['model_name']}<sub>(${manufactureyear})</sub></p><br>
                                <div class="offset-lg-1 col-lg-2 col-md-4 col-sm-4 col-xs-4"><i class="fas fa-user" style="color: #a5adbb; font-size: 22px;"></i><span class="text-secondary fw-bold ms-1"> ${responseData[index]['seatingcapacity']} seats</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4"><img src="images/airbag.jpg" width="25px" height="25px" alt=""> <span class="text-secondary fw-bold ms-1">${responseData[index]['airbags']} bags</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4"><img src="images/cardoor.jpg" width="25px" height="25px" alt=""> <span class="text-secondary fw-bold ms-1">${responseData[index]['totaldoors']} Doors</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4"><img src="images/manualcar.jpg" width="25px" height="25px" alt=""> <span class="text-secondary fw-bold ms-1"> ${automatic}</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4 col-xs-4"><img src="images/accar.jpg" width="25px" height="25px" alt=""><span class="text-secondary fw-bold ms-1">${haveac}</span></div>
                            </div><br>

                            <div class="row">
                                <div class="offset-lg-1 col-lg-2 col-md-4 col-sm-4"><i class="fa-solid fa-gas-pump" style="color: #787d87;"></i> <span class="text-secondary fw-bold ms-1"> ${responseData[index]['fueltype']}</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4"><i class="fas fa-tachometer-alt" style="color: #818283;"></i> <span class="text-secondary fw-bold ms-1">${responseData[index]['mileage']}km/l</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4"><img src="images/withdriver.jpg" width="25px" height="25px" alt=""> <span class="text-secondary fw-bold ms-1">${havedriver}</span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4"> <span class="fa fa-star checked" style="color: orange"></span><span class="fa fa-star checked" style="color: orange"></span><span class="fa fa-star checked" style="color: orange"></span><span class="fa fa-star checked" style="color: black"></span><span class="fa fa-star checked" style="color: black"></span> 3.0<span class="text-secondary fw-bold ms-1"></span></div>
                                <div class="col-lg-2 col-md-4 col-sm-4"> <span class="text-secondary fw-bold ">XUV</span></div>
                            </div>
                            <div class="row">
                        
                                <div class="offset-md-1 col-lg-5 col-md-4 col-sm-4"><small class=" text-primary fw-bold "> Available At : <span class="text-secondary">${responseData[index]['address']}</span></small></div>
                                <div class="col-lg-6 col-md-4 col-sm-4"><small class=" text-primary fw-bold "> Near By : <span class="text-secondary">${responseData[index]['nearbyvehicle']}KM</span></small></div>
                                <div class="offset-md-1 col-lg-5 col-md-4 col-sm-4"><small class=" text-dark fw-bold "> Owner Name : <span class="text-secondary">${responseData[index]['owner_name']}</span></small></div>
                                <div class="col-lg-6 col-md-4 col-sm-4"><small class=" text-dark fw-bold "> Owner Contact : <span class="text-secondary">${responseData[index]['owner_contact']}</span></small></div>
                            
                            </div>
                        </div>
                        <div class=" col-lg-3 ">
                            <p class="fs-3 text-lg-center fw-bold "> &#x20B9; ${responseData[index]['totalamount']}  <span class="text-center fw-bold ms-1 fs-6">(Total Cost of Rental)</span> </p>
                            <p class="fs-4 ms-lg-3 fw-bold  "> &#x20B9; ${responseData[index]['rateperhr']}  <span class="text-center fw-bold ms-1 fs-6">(Per/hr Cost)</span> </p>
                            <p class="ms-3"><i class="fa-solid fa-check" style="color: #21c076; font-size: 18px; font-weight: bold;"></i><span class="ms-2 text-secondary fw-bold">Free Cancellation</span></p>
                            <form action = "/user/booknow" onsubmit="return submitForm(this);" method = "post">
                                <input type = "hidden" value = "${obj}" name = "bookingdata">
                                <input type = "submit" class="btn btn-primary ms-3 mb-4"  value = "Book Now" style="width: 88%;">
                            </form> 
                        </div>
                    </div>`;
                }
            }
            else {
                vehicledata =`
                <div class="alert alert-danger text-center fs-4 fw-bold" role="alert">
                    Sorry!! No Service Available for this Adresss
                </div>`;
        
                swal("Sorry!!", " No Service Available for this Adresss", "warning");
            }
            document.getElementById('vehiclesdata').innerHTML = vehicledata;
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

/*  Search Vehicle For End  */
function submitForm(form) {
    swal({
        title: "Are you sure?",
        text: "This form will be submitted",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then(function (isOkay) {
        if (isOkay) {
            form.submit();
        }
    });
    return false;
}

/* Vehicle Booking Form Validation Start */
/*------------------------  Function Number 5 ------------------- */

function bookStartDate5() {
    // console.log("check Book Start date");
    let bookingdate = document.getElementById('bookstartdate');

    let valid = false;
    let bookingdate_input = bookingdate.value.trim();

    if (!isRequired5(bookingdate_input)) {
        showError5(bookingdate, "Date cannot be blank.")
    }
    else if (!isValidBookingStartDate5(bookingdate_input)) {
        showError5(bookingdate, "Invalid Date input.")
    }
    else {
        showSuccess5(bookingdate);
        valid = true;
    }
    return valid;
}
function checkBookStartTime5() {
    let bookingstartdate = document.getElementById('bookstartdate');
    let starttime = document.getElementById('bookstarttime');

    let valid = false;
    let bookingstartdate_input = bookingstartdate.value.trim();

    if (!isRequired5(bookingstartdate_input)) {
        showError5(starttime, "Select First Date.");
    }
    else {
        let starttime_input = starttime.value.trim();

        if (!isRequired5(starttime_input)) {
            showError5(starttime, "Time cannot be blank.");
        }
        else if (!isValidBookStartTime5(bookingstartdate_input, starttime_input)) {
            showError5(starttime, "invalid Time input");
        }
        else {
            showSuccess5(starttime);
            valid = true;
        }
        return valid;
    }
    return valid;
}

function bookEndDate5() {
    let bookingstart = document.getElementById('bookstartdate');
    let bookingend = document.getElementById('bookenddate');

    let valid = false;
    let bookingstart_input = bookingstart.value.trim();
    if (!isRequired5(bookingstart_input)) {
        showError5(bookingend, "select Start Date First.")
    }
    else {
        let bookingend_input = bookingend.value.trim();

        if (!isRequired5(bookingend_input)) {
            showError5(bookingend, "Date cannot be blank.")
        }
        else {
            if (!isValidBookingEndDate5(bookingstart_input, bookingend_input)) {
                showError5(bookingend, "Start Date Cannot Be Greater than End Date.");
            }
            else {
                showSuccess5(bookingend);
                valid = true;
            }
        }
    }
    return valid;
}

function checkBookEndTime5() {
    let bookendtime = document.getElementById('bookendtime');

    let valid = false;
    let bookendtime_input = bookendtime.value.trim();

    if (!isRequired5(bookendtime_input)) {
        showError5(bookendtime, 'Time cannot be blank.');
    }
    else {
        showSuccess5(bookendtime);
        valid = true;
    }
    return valid;
}

function checkPickUpLocation5() {
    let pickuplocation = document.getElementById('pickuplocation');

    let valid = false;
    let pickuplocation_input = pickuplocation.value.trim();

    // console.log("pickup location : ");    
    if (!isRequired5(pickuplocation_input)) {
        showError5(pickuplocation, "Location cannot be blank.")
    }
    else {
        showSuccess5(pickuplocation);
        valid = true;
    }
    return valid;
}

function checkDropLocation5() {
    let droplocation = document.getElementById('droplocation');

    let valid = false;
    let droplocation_input = droplocation.value.trim();

    if (!isRequired5(droplocation_input)) {
        showError5(droplocation, "Location cannot be blank.")
    }
    else {
        showSuccess5(droplocation);
        valid = true;
    }
    return valid;
}

function checkPaymentMode5() {
    let paymentmode = document.getElementById('paymentmode');

    let valid = false;
    let paymentmode_input = paymentmode.value.trim();

    if (!isRequired5(paymentmode_input)) {
        showError5(paymentmode, "payment mode cannot be blank.");
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

function isValidBookingStartDate5(date) {
    let selectdate = new Date(date);
    let currdate = new Date();
    currdate.setHours(0, 0, 0, 0);

    if (selectdate > currdate)
        return true;
    return false;
}

function isValidBookingEndDate5(startdate, enddate) {
    let start = new Date(startdate);
    let end = new Date(enddate);

    if (start > end)
        return false;
    return true;
}

function isValidBookStartTime5(startdate, starttime) {

    let enteredtime = new Date(`${startdate}T${starttime}`).getTime();
    let currenttime = new Date().getTime();
    if (currenttime > enteredtime)
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

function submitFormData5() {
    if (bookStartDate5() && checkBookStartTime5() && bookEndDate5() && checkBookEndTime5() && checkPickUpLocation5() && checkDropLocation5()) {
        return true;
    }
    else {
        bookStartDate5();
        checkBookStartTime5();
        bookEndDate5();
        checkBookEndTime5();
        checkPickUpLocation5();
        checkDropLocation5();
        return false;
    }
}
/*---------------------------------- Validation End ---------------------------------- */

/* Vehicle Booking Form Validation Start */