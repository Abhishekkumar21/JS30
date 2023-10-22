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









