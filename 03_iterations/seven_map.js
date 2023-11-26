// Array map() method - it is a iterative method.
/** it returns a new array with the result of a call back function being executed for each array element.
 *  but it does not modify/mutate the original array
 *  basic syntax - arr.map(callbackfn:(curVal, index, array), thisArg);
 * we can chain other methods with it very easily.
 * 
 */

const myNumbers = [1,2,3,4,5,6,7,8,9,10]
//Add 10 to each number of myNumbers array-
const newNumbers = myNumbers.map( (num) => num +10 );
//console.log(newNumbers); //[11, 12, 13, 14, 15,16, 17, 18, 19, 20]

//Method chaining with map() method ----

const anotherNumbers = myNumbers.map( (num) => num * 10 )
                                .map( (num) => num + 1 )
                                .filter( (num) => num >=40 )

console.log(anotherNumbers);



