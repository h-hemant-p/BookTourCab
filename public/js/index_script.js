
var long_term_booking_btn = document.getElementById("long-term-booking-btn");
console.log(long_term_booking_btn);
long_term_booking_btn.addEventListener("ckick",()=>{
    // alert("hi")
    window.location.href="vehicle_booking_page"
});

var driver_dashboard_button = document.getElementById("short-term-booking-btn");

driver_dashboard_button.addEventListener("click",()=>{
    window.location.href="driver_dashboard";
});