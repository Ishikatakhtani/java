let s=()=>{
let ipname=document.querySelector("#name").value;
let ipnum=document.querySelector("#number").value;
let ippass=document.querySelector("#pass").value;
let ipcpass=document.querySelector("#cpass").value;



let ename=document.querySelector("#n");
let ernum=document.querySelector("#num");
let epass=document.querySelector("#p");
let ecpass=document.querySelector("#cp");


if(ipname==""){
   ename.innerHTML="this feild is required"
   ename.style.color="white"
    return false
}

else if(ipnum==""){
      ename.innerHTML=""
    ernum.innerHTML="this feild is required"
     ernum.style.color="white"
    return false

}
else if(!NaN(ipnum)){
    ename.innerHTML=""
ernum.innerHTML="enter number only"
 ernum.style.color="white"
    return false
}
else if(ipnum.length!=10){
    ename.innerHTML=""
  ernum.innerHTML="number must contain 10 digits"
   ernum.style.color="white"
    return false
}
else if(ippass=""){
    ernum.innerHTML=""
    epass.innerHTML="this feild is required"
     epass.style.color="white"
    return false
}
else if(!(ippass.match([/123456789/]&&ippass.match([/!@#$%^&*/])&&ippass.match([/a-z/])&&ippass.match([/A-Z/])))){
    epass.innerHTML="password must contain  "
     epass.style.color="white"
     ernum.innerHTML=""
    return false
}
else if(ipcpass==""){
    epass.innerHTML=""
   ecpass.innerHTML="this feild is required"
    ecpass.style.color="white"
    return false
}
else if(ipcpass!=ippass){
     ecpass.style.color="white"
    ecpass.innerHTML="password does not match"
}

}
