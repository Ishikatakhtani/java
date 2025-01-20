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
//   let a=document.querySelector("#t")
//   t.innerHTML="<h1>hello</h1>";
//   t.style.color="red";
// t.style.backgroundColor="orange";
// document.body.style.backgroundColor="blue";
}
function f4(){
//   let a=document.querySelector("#t")
//   t.innerHTML="Color changes";
//   t.style.color="green";
// t.style.backgroundColor="lightpink";
// document.body.style.backgroundColor="yellow";
// t.style.fontStyle="arial";
}
function f5(){
  // let a=document.querySelector("#t")
  // t.innerHTML="Reset done";
  // t.style.color="black";
  // t.style.backgroundColor="violet";
  // document.body.style.backgroundColor="white";
  // t.style.fontSize="42px"
  //these all are used for mode such as light mode and dark mode 
}
f5()

//                                                     HOMEWORK
// show text and display none text using one button only

function text (){   
  // let text=document.querySelector("#clik")
  // if (text.style.display == 'none') {
  //     text.style.display = 'block'
     
  // } else {
  //     text.style.display ='none'  
  // }   
}
text()

function imgg(){
  let i1=document.querySelector("#i")
  i1.style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/038/987/289/small/ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg')"
i1.style.backgroundPosition="center"

  if (i1.style.display == 'none') {
        i1.style.display = 'block'
       
    } else {
        i1.style.display ='none'  
  }
} 

function resetimgg(){
  let i1=document.querySelector("#i")
  i1.style.backgroundImage="url('https://static.vecteezy.com/system/resources/thumbnails/038/987/289/small/ai-generated-majestic-mountain-peak-reflects-tranquil-sunset-over-water-generated-by-ai-photo.jpg')"
i1.style.display='none'
}

function chgsource(){
  let chgimg=document.querySelector('#img2')
  chgimg.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT07izPZIkeDIHvcTgL4KaWENdvy3SW2eW7hEJVS61CXoawnUJkc-TCoCI&s"
}