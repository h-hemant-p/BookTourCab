/* ---------- Dashboard Details ------------- */

function showDatails(option){

    if(option === 'account-details'){

        document.getElementById('account-details').style.display = 'block'
        document.getElementById('vehicle-details').style.display = "none";
        document.getElementById('driver-details').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
        document.getElementById('view-history').style.display = "none";

    }
    else if(option === 'vehicle-details'){

        document.getElementById('account-details').style.display = 'none'
        document.getElementById('vehicle-details').style.display = "block";
        document.getElementById('driver-details').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
        document.getElementById('view-history').style.display = "none";

    }
    else if(option === 'driver-details'){

        document.getElementById('account-details').style.display = 'none'
        document.getElementById('vehicle-details').style.display = "none";
        document.getElementById('driver-details').style.display = "block";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
        document.getElementById('view-history').style.display = "none";

    }
    else if(option === 'change-password'){

        document.getElementById('account-details').style.display = 'none'
        document.getElementById('vehicle-details').style.display = "none";
        document.getElementById('driver-details').style.display = "none";
        document.getElementById('change-password').style.display = 'block'
        document.getElementById('wallet-details').style.display = 'none'
        document.getElementById('view-history').style.display = "none";

    }
    else if(option === 'wallet-details'){

        document.getElementById('account-details').style.display = 'none'
        document.getElementById('vehicle-details').style.display = "none";
        document.getElementById('driver-details').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'block'
        document.getElementById('view-history').style.display = "none";

    }
    else if(option === 'view-history'){

        document.getElementById('account-details').style.display = 'none'
        document.getElementById('vehicle-details').style.display = "none";
        document.getElementById('driver-details').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
        document.getElementById('view-history').style.display = "block";

    }
}