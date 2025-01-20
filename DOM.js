function f1(){
//    document.getElementById("text") //Method 1

  // let a= document.querySelector("#text")  //Method 2
  // a.innerHTML="1 class of DOM"
// a.style.color="green";
// a.style.backgroundColor="red";

}
// function f2(){
// console.log(a);
// const a=0
// }
f2()
//                                                                          DAY 2
function f3(){
  let a=document.querySelector("#t")
  t.innerHTML="<h1>hello</h1>";
  t.style.color="red";
t.style.backgroundColor="orange";
document.body.style.backgroundColor="blue";
}
function f4(){
  let a=document.querySelector("#t")
  t.innerHTML="Color changes";
  t.style.color="green";
t.style.backgroundColor="lightpink";
document.body.style.backgroundColor="yellow";
t.style.fontStyle="arial";
let count=0
count++
if(count/2==0){
  t.style.display="none";
}
else{
  t.style.display="block";
}

}
function f5(){
  let a=document.querySelector("#t")
  t.innerHTML="Reset done";
  t.style.color="black";
  t.style.backgroundColor="violet";
  document.body.style.backgroundColor="white";
  t.style.fontSize="42px"
  //these all are used for mode such as light mode and dark mode
  
}
f5()
function text (){   
  let text=document.querySelector("#clik")
  if (text.style.display === 'none') {
      text.style.display = 'block'
     
  } else {
      text.style.display ='none'  
  }   
}
text()

