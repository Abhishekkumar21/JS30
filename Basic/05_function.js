//function Declarations---------------------------------------------------------------------------------------

// console.log(addTwoNumbers(4,5)); // this will work:  we can call a function Declaration before defining it.
function addTwoNumbers(num1, num2){
    return num1 + num2;
}

//console.log(addTwoNumbers(4,5));// 9

//function Expressions---------------------------------------------------------------------------------------------

//console.log(addThreeNumbers(4,5,6)); -> Function exps cannot be called before its initialization/definition
const addThreeNumbers  =  function(num1, num2, num3){
    return num1+num2+num3;
};
//console.log(addThreeNumbers(4,5,6));


//Arrow functions - an easiest form of function Declarations. No need to mention function keyword.

//console.log(addFourNumbers(4,5,6,7)); ->Cannot access 'addFourNumbers' before initialization.
const addFourNumbers = (num1,num2,num3, num4) => {return num1+num2+num3+num4};
//console.log(addFourNumbers(4,5,6,7));

const multiply = (num1, num2) => num1*num2; // if there is a single line of statement in function block then no need to metion return with {}
//console.log(multiply(4,5));


/**'this' keyword with Arrow Function****************/
//Arrow function does not have 'this'.If we reference this from such a function, it’s taken from the outer “normal” function.

let user = {
    firstName: "Ilya",
    sayHi() {
      let arrow = () => console.log(this.firstName); // here arrow() uses this from the outer user.sayHi() method
      arrow();
      console.log(this); //{ firstName: 'Ilya', sayHi: [Function: sayHi] }
    }
  };
//user.sayHi(); // Ilya



//console.log(this); // {} : empty object in node environment
 //IN browser : console.log(this) - a Globle object that is Window object.



// fetching this from  a function declaration-----------------
 function chai() {
    console.log(this); ////we will get a global object
 }
 //chai(); 


 function chai1() {
    let username = 'abhishek';
    console.log(this.username); //undefined
 }
 //chai1();



//more on 'this' in arrow -
 const chai2 = () => {
    let username = 'abhishek';
    console.log(this); //{} : empty object
 }
chai2();

const chai3 = () => {
    let username = 'abhi';
    console.log(this.username); //undefined
}
//chai3();





