
// let a=new Date();
// console.log(a.toLocaleString())
// console.log(a)
// let b=a.getFullYear()
// console.log(b.toLocaleString())
// let c=a.getDate()
// let d=a.getHours()
// console.log(c.toLocaleString())
// console.log(d.toLocaleString())
// let e=a.getMonth()
// console.log(e.toLocaleString())
// let f=a.getDay()
// console.log(f.toLocaleString());

// console.log(new Date());

// let a= new Date()
// let arr=["mon","tue","wed","thrus","friday","saturday","sunday"]
// arr[a.getDay()]



// let a= new Date()
//     let arr=["sunday","mon","tue","wed","thrus","friday","saturday"]
//     let c=arr[a.getDay()]
// let f=()=>{
    
//     let abc=document.querySelector("#h")
//     abc.innerHTML=c
// }


// age calculator take an input user will enter birth year on click of butthon show their age 


// let age=()=>{
// let i1=document.querySelector("#i").value
// let m= new Date()
// let b=m.getFullYear()
//  let f=b-i1
// h.innerHTML=f
// }



let chg
let t=()=>{
    chg=setInterval( ()=>{
    let d=new Date();
   let h=(d.getHours())
   let m=(d.getMinutes())
   let ss=(d.getSeconds())
   let s=(d.getMilliseconds())
   let show=document.querySelector("#hh")
  
   show.innerHTML=`${h} :${m}:${ss}:${s}`
   
    })



    }

