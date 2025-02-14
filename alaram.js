// let v=document.querySelector("#in").value
// let show=document.querySelector("#h")
let set=()=>{
    
    let v=document.querySelector("#in").value
    let show=document.querySelector("#h")
    let aud=document.querySelector("#ad")
    chg=setInterval( ()=>{
        let d=new Date()
       let h=`${d.getHours().toString().padStart(2,"0")}:${d.getMinutes().toString().padStart(2,"0")}`
    if(v==h){
      show.innerHTML="ring" 
      aud.play()
      }
// else{
//   show.innerHTML="alaram is set"
// }

setTimeout( ()=>{
  clearInterval(aud.pause())
       
   },6000)

  
     
        },1000)
        
    
}

// let g=()=>{
//  }
    
 

// let s=()=>{
   
    
//     let s2=document.querySelector("#hh") 
//     s2.innerHTML="stopped"  
    
//     }