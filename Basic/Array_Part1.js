//Array- ordered colloection of  data/elements/anytype values.
//JS array can store anytype of the value.

//Creation:

const myArray  = ['Abhihek', 23];
//console.log(myArray); //[ 'Abhihek', 23 ]
//console.log(typeof myArray); //Object

const anotherMyArray = new Array('Abhishek', 23);
//console.log(anotherMyArray);    //[ 'Abhihek', 23 ]
//console.log(typeof anotherMyArray); //Object

//==============merging two or more arrays=================================================

//Concat()- conct only two arrays and returns a new array
const arr1 = ['abhishek',23];
const arr2 = ['Kumar', 24];
const mergedArray = arr1.concat(arr2);
console.log(mergedArray);

//Spread operator(...) - merge/add two or more than two array and returns a new array 

const bollywood_heros = ['Salman', 'Shahrukh'];
const tollywood_heros = ['Ramcharan', 'Jr NTR'];

const all_heros = [...bollywood_heros, ...tollywood_heros];
console.log(all_heros);

//Array.isArray()- checks if a value is array or not, returns true/false
console.log(Array.isArray("abhishek"));
console.log(Array.isArray([]));