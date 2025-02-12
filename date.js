
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



let a= new Date()
    let arr=["sunday","mon","tue","wed","thrus","friday","saturday"]
    let c=arr[a.getDay()]
let f=()=>{
    
    let abc=document.querySelector("#h")
    abc.innerHTML=c
}
