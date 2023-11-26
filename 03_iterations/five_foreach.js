

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

                //OR

//Foreach() returns 'undefined'

const returnValue = myNumbers.forEach( (num) => num);
console.log(returnValue); //undefined







