
// Array foreach() method -
// =========================

//syntax : foreach( callbackfn: (curr, index, array) )
    // callbackfn = A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the array.
// it does not modify the original array
// it returns 'undefined' as returned value.

const myNumbers = [1,2,3,4,5];

// myNumbers.forEach(function (num) { console.log(num)});

                //OR 

// myNumbers.forEach( (num) => { console.log(num) });

                //OR

/*
function printNum(num) {
    console.log(num);
}

myNumbers.forEach( printNum );
*/

// ==============================================================================================================================

//Foreach() returns 'undefined'

const returnValue = myNumbers.forEach( (num) => num);
// console.log(returnValue); //undefined







