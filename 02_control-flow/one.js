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

