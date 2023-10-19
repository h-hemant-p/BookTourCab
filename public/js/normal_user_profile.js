var user_dashboard_button = document.getElementById("user-dashboard-button");

user_dashboard_button.addEventListener("click",()=>{
    window.location.href="long_term_user_dashboard";
});

var owner_dashboard_button = document.getElementById("owner-dashboard-button");

owner_dashboard_button.addEventListener("click",()=>{
    window.location.href="owner_dashboard";
});

var driver_dashboard_button = document.getElementById("driver-dashboard-button");

driver_dashboard_button.addEventListener("click",()=>{
    window.location.href="driver_dashboard";
});