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
//console.log(mergedArray);

//Spread operator(...) - merge/add two or more than two array and returns a new array 

const bollywood_heros = ['Salman', 'Shahrukh'];
const tollywood_heros = ['Ramcharan', 'Jr NTR'];

const all_heros = [...bollywood_heros, ...tollywood_heros];
//console.log(all_heros);

//======================================Array.isArray()- checks if a value is array or not, returns true/false

console.log(Array.isArray("abhishek")); //false
console.log(Array.isArray([])); //true

//========================================Array.of() - creates array object from given values

const score1 = 300;
const score2 = 500;
const score3 = 400;

const all_scores = Array.of(score1,score2, score3);
//console.log(all_scores); [300,500,400]

//=========================================Array.from(): creates an array from iterable object==============================================================

const name = 'Abhishek';
//console.log(Array.from(name)); //['A', 'b', 'h','i', 's', 'h','e', 'k' ]

//*!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!Interview ALERT!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
// console.log(Array.from({name: 'Abhishek'})); //[]=> an empty array. It will not directly convert the given obj in array.

//but 
const user = {name: 'ABhishek'};
// console.log(Array.of(name)); //['Abhishek']
// console.log(Array.of(user.name));//['Abhishek']

//Example-
const loggedInUserInfo = {fullName: 'Abhishek', DOB:'2000-8-24', isLoggedIn: true};
console.log(Array.of(loggedInUserInfo.fullName, loggedInUserInfo.DOB)); 


