var name = document.getElementById("name");
var email = document.getElementById("email");
var password = document.getElementById("password");
var phn = document.getElementById("phn");
var error = document.getElementById("error");
var strength = document.getElementById("strength");

function validate(){

    var regpas = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    var regnam = /^([A-Za-z\s]+)$/;
    var regemail = /^([a-zA-Z0-9\.\-]+)@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    var regphn = /^\(?([0-9]{3})\)?[\-.]?([0-9]{3})[\-.]?([0-9]{4})$/;

    if((regemail.test(email.value))&&(regphn.test(phn.value))&&(regnam.test(name.value))&&(regpas.test(password.value))){
        error.innerHTML="VALID"
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="INVALID";
        error.style.color="red"
        return false;
     }
}

function checkpass(){
    // var regpas=/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{7,}$/;
    if((password.value.length>=0)&&(password.value.length<2)){
        strength.innerHTML="Weak Password";
        strength.style.color="red";
         return false;
    }
    if((password.value.length>2)&&(password.value.length<=3)){
        strength.innerHTML="Medium strength";
        strength.style.color="orange";
         return false;
    }
    if((password.value.length>7)){
        strength.innerHTML="Strong Password";
        strength.style.color="green";
         return true;
    }
 }