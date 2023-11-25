//if

// if(condition) {
//     //statement1;
//     // .
//     //statementN;
// }
//statements from Line 5 to Line 6 will be executed only when if condition wil be 'true'.

//comaparison operator : <,>,<=, >=, ==, !=, ===, !==. returns - boolean: true/false



// const temp = 25;

// if(temp <50 ) {
//     console.log("less than 50");
// }

//if - else =====================================

// const temp = 25;

// if (temp > 30) {
//     console/log(`current temp is not greater than 30`)
// } else {
//     console.log(`temp is less than 30`);
// }


const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard) {
    console.log("Allow to buy course");
}

if(loggedInFromGoogle || loggedInFromEmail) {
    console.log('User logged in')
}




//Nullish Coalescing Operator (??): in case of only null and undefined

let val1;
//val1 = 5 ?? 10; //5
//val1 = null ?? 10; //10
//val1 = undefined ?? 25; //25
val1 = undefined ?? 10 ?? 20; //10
//console.log(val1);


//Ternary operator:

// console.log(
//     (10 > 15)?('true - age is greater than 15') :
//       ('false - age is not greater than 15')
// )

let age = 17;

let message = (age < 3) ? "Hi, baby" :
    (age < 18 ) ? "Hello!" :
    (age < 100 ) ? "Welcome!" :
    "Not valid age"

console.log(message); //Hello!

