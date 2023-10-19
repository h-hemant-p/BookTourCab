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
                    iconUrl: 'img/red.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            },

            createEndMarker: (location) => {
                var custom_icon;
                var marker;

                custom_icon = L.icon({
                    iconUrl: 'img/blue.png',
                    iconSize: [20, 29],
                    iconAnchor: [10, 29],
                    popupAnchor: [0, -29]
                });

                marker = L.marker(location.latLng, {icon: custom_icon}).addTo(map);

                return marker;
            }
        });
        
        map.addLayer(new CustomRouteLayer({
            directions: dir,
            fitBounds: true
        })); 
    }


function submitVehicleBooking(event){
console.log("Hiiiii........");

    event.preventDefault();

    // delete current map layer
    map.remove();



    let totaldays = document.getElementById('days').value;
    let pickuplocation = document.getElementById('pickuplocation').value;
    let droplocation = document.getElementById('droplocation').value;
    let bookDate = document.getElementById('bookDate').value;
    let vehicletype = document.getElementById('vehicletype').value;
    let vehiclecompany = document.getElementById('vehiclecompany').value;
    let vehicleModel = document.getElementById('vehicleModel').value;
    let paymentmode = document.getElementById('paymentmode').value;

     // run directions function
     runDirection(pickuplocation, droplocation);

     // reset form
     document.getElementById("form").reset();

  

    console.log("totaldays : "+totaldays);
    console.log("pickuplocation : "+pickuplocation);
    console.log("droplocation : "+droplocation);
    console.log("bookDate : "+bookDate);
    console.log("vehicletype : "+vehicletype);
    console.log("vehiclecompany : "+vehiclecompany);
    console.log("vehicleModel : "+vehicleModel);
    console.log("paymentmode : "+paymentmode);

}


// asign the form to form variable
const form = document.getElementById('form');

// call the submitForm() function when submitting the form
form.addEventListener('submit', submitVehicleBooking);