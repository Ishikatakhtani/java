let sub=()=>{
let ipname=document.querySelector("#name").value;
let ipnumber=document.querySelector("#number").value;
let ipemail=document.querySelector("#email").value;
let ippassword=document.querySelector("#pass").value;
let ipcpass=document.querySelector("#cpass").value;

let errname=document.querySelector("#errorname");
let errnumber=document.querySelector("#errornumber");
let erremail=document.querySelector("#erroremail");
let errpass=document.querySelector("#errorpassword");
let errcpass=document.querySelector("#errorcpass");
if(ipname==""){
    errname.innerHTML="please enter you name"
    errname.style.color="red"
    return false
}
else if(ipnumber=="" ){
    errnumber.innerHTML="please enter your number"
    errnumber.style.color="red"
    return false
}
else if( isNaN(ipnumber)){
    errnumber.innerHTML="please enter number only"
    errnumber.style.color="red"
    return false
}
else if(ipnumber.length!==10){
    errnumber.innerHTML="please enter 10 digit number "
    errnumber.style.color="red"
    return false
}


else if(ipemail==""){
    erremail.innerHTML="please enter your email"
    erremail.style.color="red"
    return false
}
else if(!(ipemail.includes('@')&&ipemail.includes(".com"))){
    erremail.innerHTML="email address must contain @ and .com"
    erremail.style.color="red"
    return false
}


else if(ippassword=="" ){
        errpass.innerHTML="please enter your password"
        errpass.style.color="red"
        return false
        
}

else if(ipcpass==""){ 
    errcpass.innerHTML="please enter your confrim password"
    errcpass.style.color="red"
    return false
}
else if(ippassword!=ipcpass){
    errpass.innerHTML="please enter correct password"
    errpass.style.color="red"
    return false
    }

else if(!( ippassword.match([/ 1234567890/]&&ippassword.match([/ !@#$%^&*()/])&&ippassword.match([/ a-z/])&&ippassword.match([/ A-Z/])))){
    errpass.innerHTML="please enter correct password"
    errpass.style.color="red"
    return false  
}

}