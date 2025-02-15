// let v=document.querySelector("#in").value
// let show=document.querySelector("#h")

// up=setInterval( ()=>{
// let hh=document.querySelector("#hh")
// let sm=document.querySelector("#sm")
// let a=new Date();

// let smm=`${a.getHours().toString()}:${a.getMinutes().toString()}`
// hh.innerHTML=smm
// hh.style.color="yellow"

// let hhh=`${a.getDate().toString()}-${a.getMonth().toString()}-${a.getFullYear().toString()}`
// sm.innerHTML=hhh
// sm.style.color="yellow"

// },1000)




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
       show.innerHTML="set alaram again"
   },6000)

  },1000)
        
    
}


 

// let s=()=>{
   
    
//     let s2=document.querySelector("#hh") 
//     s2.innerHTML="stopped"  
    
//     }