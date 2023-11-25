
//falsy values -
// false, 0, -0, BigInt, 0n, "", undefined, NaN, null

//truthy values :
// "0", 'false', ' ', [], {}, function(){} 

//==============================================================
//Detecting if an array is empty or not :
//==============================================================
const arr = [];

if (arr.length === 0) {
    console.log('given array is empty');
}

//==============================================================
//Detecting if an object is empty or not :
//==============================================================

const emptyObj = {}

if (Object.keys(emptyObj).length == 0) {
    console.log('given object is empty');
}