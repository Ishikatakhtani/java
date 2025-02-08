// ARROW FUNCTION
// let f1=()=>{
//     console.log();
// }
// f1()

//passing parameters in function 
let f2=(n1,name)=>{
        console.log(`hello my name is ${name} my age is ${n1}`);

             let a= document.querySelector("#text")  
 a.innerHTML=(`hello my name is ${name} my age is ${n1}`);
    }

    //taking input from html
    let f3=()=>{
      //   let inptext =document.querySelector("#inp")
      //  alert( `hello ${inptext}}`)
    }

let f4=()=>{
   // let inp=document.querySelector("#ip").value
   //    document.body.style.backgroundColor=inp;
}

let f5=()=>{
   if(document.body.style.backgroundColor=="white"){
      document.body.style.backgroundColor="black";
     let s= document.querySelector("#p1");
      s.style.color="white";
   }
   else{
      document.body.style.backgroundColor="white";
      let s= document.querySelector("#p1");
      s.style.color="black";
   }
}

let f6=()=>{
   let a=document.querySelector("#d1")
if(a.style.display=="none"){
   let d=document.querySelector("#b1");
  d.innerHTML="hide";
  a.style.display="block";
}
else{
   let d=document.querySelector("#b1");
   d.innerHTML="show";
   a.style.display="none";
}
   
}