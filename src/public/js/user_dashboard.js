var owner_dashboard_btn = document.getElementById('owner-dashboard-btn');
owner_dashboard_btn.addEventListener('click',()=>{
    window.location.href = "/user/owner_dashboard"
})


var driver_dashboard_btn = document.getElementById('driver-dashboard-btn');
driver_dashboard_btn.addEventListener('click',()=>{
    window.location.href = "/user/driver_dashboard";
})


/* ------------------  Dashboard Details  ----------------------------- */

function showDetails(option){
    if(option === "account-details"){
        document.getElementById('account-details').style.display = 'block'
        document.getElementById('booking-details').style.display = "none";
        document.getElementById('ride-details').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if( option === "booking-details"){
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('booking-details').style.display = "block";
        document.getElementById('ride-details').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if( option === "ride-details"){
        document.getElementById('booking-details').style.display = "none";
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('ride-details').style.display = 'block'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if( option === 'change-password'){
        document.getElementById('booking-details').style.display = "none";
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('ride-details').style.display = 'none'
        document.getElementById('change-password').style.display = 'block'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if(option === 'wallet-details'){
        document.getElementById('booking-details').style.display = "none";
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('ride-details').style.display = 'none'
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'block'
    }
}