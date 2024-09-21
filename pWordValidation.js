
function getMessage(){
let userName = document.getElementById("uName").Value;
let passWord = document.getElementById("pWord").Value;
 alert("hello Validation" + password);
}


let regEx = /[a-zA-Z]{10,30}$/s


if(regEx.test(passWord)){

    document.getElementById("Message1").innerHTML="this is a valid!";
}else{
    document.getElementById("Message2").innerHTML="this is a invalid!";
}else{
    
}//end of function





document.getElementById("btnLogIn").addEventListener("click",getMessage);
