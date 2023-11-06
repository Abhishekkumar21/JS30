//function Declarations-

// console.log(addTwoNumbers(4,5)); // this will work:  we can call a function Declaration before defining it.
function addTwoNumbers(num1, num2){
    return num1 + num2;
}

//console.log(addTwoNumbers(4,5));// 9

//function Expressions- 

//console.log(addThreeNumbers(4,5,6)); -> Function exps cannot be called before its initialization/definition
const addThreeNumbers  =  function(num1, num2, num3){
    return num1+num2+num3;
};
//console.log(addThreeNumbers(4,5,6));


//Arrow functions - an easiest form of function Declarations. No need to mention function keyword.

//console.log(addFourNumbers(4,5,6,7)); ->Cannot access 'addFourNumbers' before initialization.
const addFourNumbers = (num1,num2,num3, num4) => {return num1+num2+num3+num4};
//console.log(addFourNumbers(4,5,6,7));

