//String - sequence of chharacters.
//String can be created as primitives from string literals OR as objects using string() constructors

//creating string using string literals - myName is String Primitive type
const myName = "Abhishek"; 
console.log(myName);
console.log(`The type of myname is ${typeof myName}.`);

//another way to create string using new keyword and String() costructor
const myLastName = new String("Kumar"); 
console.log(myLastName);        //myLastName - String Object(non-primitive type)
console.log(`The type of myname is ${typeof myLastName}.`);

console.log("\n-----------length prop--------");
console.log(myName.length);
console.log(myLastName.length);

console.log('\n----------charAt()------------');
console.log(myName.charAt(1));
console.log(myLastName.charAt(1));

console.log('\n----------indexOf()------------');
console.log(myName.indexOf('A')); //returns the index of specified character in the string
console.log(myName.indexOf('Abh')); //0
console.log(myName.indexOf('X')); // -1


console.log(myLastName.indexOf('r'));//4
console.log(myLastName.indexOf('P'));//-1

console.log('\n----------toLowerCase()/toUpperCase()------------');
console.log(myName.toLowerCase()); //abhishek
console.log(myLastName.toUpperCase()); //KUMAR
console.log("XyZaBcD".toLowerCase()); //xyzabcd
console.log("XyZaBcD".toUpperCase()); //XYZABCD

console.log("\n------Camparision b/w Strings------------------");
//'==' and "===" compare strings case-sensitively. first make both strings in same cases(upper or lower)
//before compare.

// const isEqual = (str1, str2) =>
//     str1 === str2;

// const isEqualInUpperCase = (str1, str2) =>
//     str1.toUpperCase() === str2.toUpperCase();

// const isEqualInLowerCase = (str1, str2) =>
//     str1.toLowerCase() === str2.toLowerCase();

// console.log(isEqual('Abh', 'abh')) //false
// console.log(isEqualInUpperCase('Abh', 'abh')); //true
// console.log(isEqualInLowerCase('Abh', 'abh')); //true

/* use < or > to compare the strings also */

const a = "a";
const b = "b";
if (a < b) {
  // true
  console.log(`${a} is less than ${b}`);
} else if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${a} and ${b} are equal.`);
}

//Extracting a part of string
console.log("\n-----slice()----------");
//slice() - extracts a section of this string and returns it as a new string, without modifying the original string.
//slice(indexStart), slice(indexStart, indexEnd)--> indexEnd will the excluded in output string, (indexEnd-1) will be taken in.

const originalString = 'HelloWorld';

console.log(originalString.slice(4)); //here indexEnd is not given so JS will consider indexEnd = str.length
console.log(originalString.slice(2,5));//llo

console.log(originalString.slice(-10)) //HelloWorld:  -10 = -10 + oroginalString.length = 0
console.log(originalString.slice(-1)); //d: -1 = -1 + originalString.lenth = 9

console.log(originalString.slice(-3,-1)); //rl

console.log(originalString.slice(-1,-3));//''(since start>end so it will return empty string)

console.log("\n------substring()-----");
//similar to slice() but it does not accept negative index value, if given then it treats the -ve
//values as zero(0);
//here if start < end then values will swapped
//returns new string, does not modify the original one

console.log("\n------split()-----");
//split() -> the splits the strings on the basics of given arguments to it and
//returns the array of strigs generated after spliting

const str3 = "Abhishek-Kumar-Yadav";
console.log(str3.split('-')); //[ 'Abhishek', 'Kumar', 'Yadav' ]

const str4 = "IamAbhishek kumar Yadav";
console.log(str4.split(' ')); //[ 'IamAbhishek', 'kumar', 'Yadav' ]

const str3Copy = str3.split();
console.log(str3Copy); //put whole string in an array [ 'Abhishek-Kumar-Yadav' ]

console.log('\n---------trim()-------------------------');
const fNameFromform = '    Abhishek Kumar  ';
console.log(fNameFromform.trim());














