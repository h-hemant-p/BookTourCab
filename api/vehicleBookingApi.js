// default map layer
let map = L.map('map', {
  layers: MQ.mapLayer(),
  center: [35.791188, -78.636755],
  zoom: 12
});

function runDirection(start, end) {
  // recreating new map layer after removal
  map = L.map('map', {
    layers: MQ.mapLayer(),
    center: [35.791188, -78.636755],
    zoom: 12
  });

  var dir = MQ.routing.directions();

  dir.route({
    locations: [
      start,
      end
    ]
  });

  CustomRouteLayer = MQ.Routing.RouteLayer.extend({
    createStartMarker: (location) => {
      var custom_icon;
      var marker;
      custom_icon = L.icon({
        iconUrl: 'images/red.png',
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29]
      });
      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
      return marker;
    },
    createEndMarker: (location) => {
      var custom_icon;
      var marker;
      custom_icon = L.icon({
        iconUrl: 'images/blue.png',
        iconSize: [20, 29],
        iconAnchor: [10, 29],
        popupAnchor: [0, -29]
      });
      marker = L.marker(location.latLng, { icon: custom_icon }).addTo(map);
      return marker;
    }
  });

  map.addLayer(new CustomRouteLayer({
    directions: dir,
    fitBounds: true
  }));
}

function submitVehicleBooking(event) {
  // console.log("Hiiiii........");

  event.preventDefault();
  // delete current map layer
  map.remove();

  let pickuplocation = document.getElementById('pickuplocation').value;
  let droplocation = document.getElementById('droplocation').value;
  // run directions function
  runDirection(pickuplocation, droplocation);
  return false;
}

// asign the form to form variable
const form = document.getElementById('form');
// call the submitForm() function when submitting the form
form.addEventListener('submit', submitVehicleBooking);



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
        var havedriver = ""
       for (var index in responseData) {

        //  console.log("Normal Object");
        //  console.log(responseData[index]);

        var obj =  responseData[index].amount +"$$"+responseData[index].droplocation+"$$"+responseData[index].enddate+"$$"+responseData[index].endtime+"$$"+responseData[index].ownerobjid+"$$"+responseData[index].pickuplocation+"$$"+responseData[index].startdate+"$$"+responseData[index].starttime+"$$"+responseData[index].vehicleobjid+"$$"+responseData[index].totalamount+"$$"+responseData[index].gst+"$$"+responseData[index].totalHours+"$$"+responseData[index].havedriver+"$$"+"Pending";

        
        if(responseData[index].automatic){
          automatic = "Yes";
        }else{
          automatic = "No";
        }

        if(responseData[index].haveac){
          haveac = "Yes";
        }else{
          haveac = "No";
        }

        if(responseData[index].havedriver){
          havedriver = "Yes";
        }else{
          havedriver ="No";
        }
        const manufacturedate = responseData[index].manufactureyear; 
        const date1 = new Date(manufacturedate);
        const manufactureyear = date1.getFullYear();
        var confirmation = ()=>{
          Swal.fire({
            title: 'Do you want Continue ?',
            text: "Welcome to BTC..!!",
            icon: 'success',
            showCancelButton: true,
            confirmButtonColor: '#C64EB2',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Confirmed!',
                'Congratulation Now you Become Owner of BTC.',
                'success'
              )
            } else {
              console.log('clicked cancel : '+result.isConfirmed);
            }
          })
        }
        vehicledata += `<div class="row custom-div" >
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
              <form action = "/user/booknow" method = "post">
                <input type = "hidden" value = "${obj}" name = "bookingdata">
                <input type = "submit" class="btn btn-primary ms-3 mb-4" value = "Book Now" style="width: 88%;">
              </form> 
            </div>
          </div>`;
        }
      }
      else {
        vehicledata =`<div class="alert alert-danger text-center fs-4 fw-bold" role="alert">
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
