function showDetails(option){
    if(option === "adminaccount-details"){
        document.getElementById('adminaccount-details').style.display = 'block';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if(option === "allusers-details"){
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'block';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if(option === "allblockusers-details"){
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'block';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if(option === "vehicles-details"){
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'block';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'none';
    }
    else if(option === "allblockvehicles-details"){
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'block';
        document.getElementById('change-password').style.display = 'none';
    }
    else if(option === "change-password"){
        document.getElementById('adminaccount-details').style.display = 'none';
        document.getElementById('allusers-details').style.display = 'none';
        document.getElementById('allblockusers-details').style.display = 'none';
        document.getElementById('vehicles-details').style.display = 'none';
        document.getElementById('allblockvehicles-details').style.display = 'none';
        document.getElementById('change-password').style.display = 'block';
    }
}