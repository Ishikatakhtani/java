//Method 1 of writting function

function ishika(){
      //function is keyword   ishika is the function name 
console.log("hello world");
}
ishika();   //calling function 

function sum(){
    var a=5;
    var b=10;
    console.log(a+b);   
}
sum();
function sub(){
    var a=5;
    var b=10;
    console.log(a-b);   
}
sub();
function mul(){
    var a=5;
    var b=10;
    console.log(a*b);   
}
mul();
function div(){
    var a=5;
    var b=10;
    console.log(b/a);   
}
div();
function concatination(){
    var a="hello";
    var b="world";
    console.log(a+b);   
    //his is because of cocatination
}
concatination();


function concatination1(){
    var a="hello";
    var b=5;
    console.log(a+b);   
    // this works because of type coercion 
//string has highest priority
}
concatination1();

function concatination2(){
    var a=5;
    var b=true;
    console.log(a+b);   
    // this works because of type coercion 
//number has 2 priority
//true is 1
//false is 
}
concatination2();


function concatination3(){
    var a=5;
    var b=undefined;
    console.log(a+b);   
   // this will print Nan as we dont No what var consist of 
}
concatination3();
