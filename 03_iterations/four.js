//Iterating through Object - for..in loop
// ========================================

//'for..in' loop : returns the keys/indexes of objects/arrays; in case of Maps does not work, Maps are not iterable by for..in loop

const programmingLang = {
    'js' : "JavaScript",
    'cpp' : "C++",
    'py' : "Python"
}

for (const key in programmingLang) {
    // console.log(key); // will only retur the keys of obj
    // console.log(programmingLang[key]); // it will return the values as per each keys after each iteration
}

//in case of Arrays
 
const lang = ['js', 'rb', 'java'];
for (const key in lang) {
    //console.log(key); // returns only the indexes of array
}

// in case of Maps : for..in returns nothing, simplu, does not work

const map = new Map();
map.set('js', "JavaScript");
map.set('cpp', "C++");

for (const key in map) {
    console.log(key); // returns nothing
}