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
if(ipnumber==""){
    errnumber.innerHTML="please enter your number"
    errnumber.style.color="red"
    return false
}
if(ipemail==""){
    erremail.innerHTML="please enter your email"
    erremail.style.color="red"
    return false
}
if(ipnumber==""){
    errnumber.innerHTML="please enter you name"
    errnumber.style.color="red"
    return false
}
if(ippassword==""){
    errpass.innerHTML="please enter your password"
    errpass.style.color="red"
    return false
}
if(ipcpass==""){
    errcpass.innerHTML="please enter your confrim password"
    errcpass.style.color="red"
    return false
}
if(ipcpass==""){
    ipcpass.style.borderColor="green"
    
}
}