let objj={
    // name:"ishika",
    // age:25,
    // city:"Bhopal",
    // city:"ahemdabad"
}
// console.log(objj.city)   //Acessing object    
 //if same key is repeated than the last value of key is shown in output , so keys must be unique 

// objj.email="ishika@gmail.com"    // Adding key in object  
// console.log(objj)

// objj.age=21                         //updating a key 
// console.log(objj.age)

// delete objj.city                      //delete a key 
// console.log(objj);

let objj1={
    //IMP QUESTION
//     name:"ishika",
//     age:25,
//     city:"Bhopal",
//     city:"ahemdabad",
//     fruits:["apple","mango","orange",],

//    fun: function f1(){
// console.log(`hello your name and age is  ${this.name} ${this.age}`);   //IMP TEMPLEMENT LSTTERAL
//     }
}
// console.log(objj1);
// console.log(objj1.fruits[2]);
//  objj1.fun()                         

//                                                          DESTRUCTURING 

let obj1={
//     name:"ishika",
//     age:20,
// city:"Bhopal"
}

// let{name,age,city}=obj1                    // DESTRUCTURING of the Object
// console.log(age);



//                                                               spread operator [...]
// let a={name:"ishika",age:20};
// let b={city:"bhopal",roll:19};
// let c={...a,...b};
// console.log(c);


//                                                     using spread operator for 3 obj
let a={name:"ishika",age:20};
let b={city:"bhopal",roll:19};
let c={cllg:"jlu",course:"Bca"};
let d={...a,...b,...c};
console.log(d);

                                                                 // using spread operator for  Array
// let arr1=["ishika","jlu"];
// let arr2=[19,20];
// let arr3=[...arr1,...arr2];
// console.log(arr3);


