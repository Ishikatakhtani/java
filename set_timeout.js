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




// let count=0
// let ghf
// let s=()=>{
//      ghf=setInterval( ()=>{
  
//         let d=document.querySelector("#e")

//          d.innerHTML=count
//          count++
//      },1000)}

//      let stopp=()=>{
//         clearInterval(ghf)
//      }



let abc
let c
   
    
let ss=()=>{
   let i2=document.querySelector("#i1").value
   let show=document.querySelector("#p")
   let count=0
  if(i2>=1){
count=i2
show.innerHTML=count
count--
  }
   c=setInterval( ()=>{
     
      

      
    
      
    
      if(count==1){
         clearInterval(c)
      }
        
        
      
               
   },1000)
}
