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

// type coercion
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

// Let , var , const


//VAR
function vari(){
    var age=26;
    var age=30;
    console.log(age);
    //redeclaration is allowed
}
vari();

//let 
function leti(){
    let a=56;
    // let a=60;
    console.log(a);
    //redeclaration is not allowed
}
leti();

//const
function consta(){
    const b=61;
    // const b=68;
    console.log(b);
    //redeclaration is not allowed
}
consta();

//VAR
function vari1(){
    var age=26;
     age=30;
    console.log(age);
    //reassingment is allowed
}
vari1();

//let 
function leti1(){
    let a=56;
     a=60;
    console.log(a);
    //reassingment is  allowed
}
leti1();

//const
function consta1(){
    const b=61;
    // const b=68;
    console.log(b);
    //reassingment is not allowed
}
consta1();

//VAR
function vari2(){
var age=30;
   
{
    var age=26;
    //it has function scope
}
console.log(age);
}
vari2();

//let 
function leti2()
{
      let a=60;
    
{
    let a=56;

    //it has block scope
}
console.log(a);
}
leti2();

//const
function consta2()
{
    const b=68;
   
{
    const b=61;
    
   //it has block scope
}
console.log(b);
}
consta2();

//VAR
function vari3(){
    console.log(age);
    var age=1;
   
    //hosting is allowed i.e var age will be declared at start of function but no value will be assinged so answer  will be undefined
   
    }
    vari3();
    
    //let 
    function leti3()
    {
        console.log(a);
          let a=60;
        //hoisting is not allowed
   
    }
    leti3();
    
    //const
    function consta3()
    {
        console.log(b);
        const b=68;
    //hoisting is not allowed
    }
    consta3();
    