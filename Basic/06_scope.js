//scope - an area {....} in the program where a variable/method is available to be accessed.

//var, let, const
//var has program scope / global scope
//let & const  have body scope / local scope
/*
var a = 1;
let b = 2;
const c = 3;
console.log(a, b, c);
*/

// var a1 = 10;
// {
//     let b1 = 20;
//     const c1 = 30;
// }
// console.log(a1); //10;
// console.log(b1); // b1 not defined - b1 cannot be accessed outside the {} bcoz it has body scope due to let dec;aration
// console.log(c1); // not defined

// var firstName = "Abhishek";
// if(true){
//     let lastName = 'Kumar'
//     function message(){
//         console.log('Hello ' + firstName); // firstName has Global scope, can be accessed anywhere in the program
//     }
//     //message(); //Here function message() will be accessible because it is being accessed in its scope
// }
// //console.log(lastName); //ReferenceError: lastName is not defined - as not being accessed in its scope
// message();//Here,also it will be accessed.



// function one(){
//     let name = "Abhishek";

//     function two(){
//      const company = 'xyz';
//      console.log(company + ' ' + name); // name will have Global scope for func two();
//     }
//     two();
// }
// one();


//let and const-----------------------------------------------------
// let a = 10;
// console.log(a);
// //let a =5;  //SyntaxError: Identifier 'a' has already been declared
// a =5; // can be reassigned.
// console.log(`a after reassignig it : ${a}`);


// let b = 10;
// const b = 5; //not valid syntax error
// console.log(b) // SyntaxError: Identifier 'a' has already been declared

// const c = 10;
// let c= 5; // syntaxerror - Cannot redeclare block-scoped variable 'c'.
// console.log(c)

// const c = 22;
// c = 23; // cannot reassign to a constant variable
// console.log(c); //TypeError: Assignment to constant variable c


/* let & const variables cannot be re-declared once it declared but 'let'can be reassigned but const not************/

//'var'-------

// var a = 10;
// let a = 5; //SyntaxError - cannot redeclare
// const a = 6; //SyntaxError - cannot redeclare
//  var a = 7; // valid a-7
// a =8 ; 
// console.log(a); //8

//var - also can not be re-declared with let or const but can be re-assigned another value

/*
var a; //var can be only declare and intialize later in program
a =5;
console.log(a)

let b; // let also can be only declare and intialize later in program
b=6;
console.log(b);

const c; //SyntaxError: Missing initializer in const declaration
c = 4; // const :: necessary to initialize while declaring
console.log(c);

*/
