// setTimeout( ()=>{

//     console.log("running...");
// } , 3000)
// console.log("in prosecss")

// let h=()=>{setTimeout( ()=>{
  
//     let d=document.querySelector("#c")
//     d.innerHTML="ishika"
// },1000)}



// setInterval( ()=>{
//     console.log("interval")
// },1000)




// let count=0
//     setInterval ( ()=>{
//       console.log(count);
//       count++
//     },1000)




let count=0
let ghf
let s=()=>{
     ghf=setInterval( ()=>{
  
        let d=document.querySelector("#e")

         d.innerHTML=count
         count++
     },1000)}

     let stopp=()=>{
        clearInterval(ghf)
     }