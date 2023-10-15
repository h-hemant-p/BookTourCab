function validatePassword(){
    var oldPassword = document.getElementById("oldpassword").value;
    var newPassword = document.getElementById("newpassword").value;
    var confirmPassword = document.getElementById("confirmpassword").value;

    var passwordPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

    var oldPasswordError = document.getElementById("oldpassword-error");
    var newPasswordError = document.getElementById("newpassword-error");
    var confirmPasswordError = document.getElementById("confirmpassword-error");

    oldPasswordError.innerHTML = "";
    newPasswordError.innerHTML = "";
    confirmPasswordError.innerHTML = "";

    oldPassword = oldPassword.trim();

    if(oldPassword === ""){
        oldPasswordError.innerHTML = "Old Password cannot be empty";
        return false;
    }

    if(!passwordPattern.test(newPassword)){
        newPasswordError.innerHTML = "New Password must be at least 8 characters long and contain at least one letter and one number";
        return false;
    }

    if(newPassword !== confirmPassword){
        confirmPasswordError.innerHTML = "New Password and Confirm Password do not match";
         return false;
    }

    return true;
}   


/*------------ Dashboard Details ---------------- */

function showDetails(option){
    if(option === 'account-details'){
        document.getElementById('account-details').style.display = 'block'
        document.getElementById('view-history').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if(option === 'view-history'){
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('view-history').style.display = "block";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if(option === 'change-password'){
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('view-history').style.display = "none";
        document.getElementById('change-password').style.display = 'block'
        document.getElementById('wallet-details').style.display = 'none'
    }
    else if(option === 'wallet-details'){
        document.getElementById('account-details').style.display = 'none'
        document.getElementById('view-history').style.display = "none";
        document.getElementById('change-password').style.display = 'none'
        document.getElementById('wallet-details').style.display = 'block'
    }
}