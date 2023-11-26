//Array.prototype.reduce() : 
/**
 * reduce() method of array executes a user defined 'reducer' callback function on each element of the array, resulting in sinle output value.
 * Basic syntax:
 *      reduce(callbackfn); reduce(callbackfn, intialValue)
 *          callbackfn have 4 arguments : (accumulator, currentValue, Index, Array)
 *                  accumulator -  stores the value from the previous call to callbackfn
 *                  IF on 1st call, initialValue is specified in reduce() method ---> accumulator = initialvalue
 *                  IF not, --> accumulator = givenArray[0] 
 *  return value - value stored in accumulator after the completion of reducer callbackfn's last call.    
 * 
 * it does not modify the original array.
 * can be used to flatten an array, but not applicable in all case.; arr.flat(infinity) - can be used to flat an array
 */


//Example : SumOfElementsOfAnArray-

const numbers = [1,2, 3]
const initialValue = 0
const myTotalSum = numbers.reduce( (acc, curVal) => acc + curVal , initialValue ); //on first call - accum = initialValue, curval = numbers[0] =1
console.log(myTotalSum); // 6

//Example : SumOfElementsOfAnArray without initial value

const numbers1 = [1,2,3]
const totals = numbers1.reduce( (acc, curVal) => acc + curVal ); //on first call - acc = numbers1[0] = 1 and curVal = numbers[1] = 2
console.log(totals); //6


//Implement a functionality to add all the price of course present in the shopping cart

const shoppingCart = [
    {
        itemName : "JS Course",
        price : 999
    },
    {
        itemName : "Python Course",
        price : 1999
    },
    {
        itemName : "Go course",
        price : 2999
    },
    {
        itemName : "Data science Course",
        price : 19999
    }
]

const priceToPay = shoppingCart.reduce( (acc, item) => { return acc + item.price }, 0 );
console.log(priceToPay); //25996

