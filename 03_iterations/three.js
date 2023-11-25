// 'forof' loop:

// ["", "", ""]
// [{}, {}, {}]

// const arr = [1,2, 3, 4, 5]

// for (const num of arr) {
//     console.log(num);
// }

//output: 1 2 3 4 5 (each value is followed by next line)


// const greetings = "Hello world!"
// for (const greet of greetings) {
//     console.log(`Each char is ${greet}`);
// }

/*===========Forof loop on Maps ========================================================================= */

//Maps : The Map object holds key-value pairs and remembers the original
// insertion order of the keys. Any values may be used as either a key or a value

const map = new Map()
// setting up the key- value in a map using set() method
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map); 

// output : Map(3) {
    //   'IN' => 'India',
    //   'USA' => 'United States of America',
    //   'Fr' => 'France'
    // }

for (const [key, value] of map) {
    //console.log(key, ":-", value);
}

//output:
    // IN :- India
    // USA :- United States of America
    // Fr :- France



/*================== forof on object ===================================================================*/

const user = {
    name : 'abhishek',
    age : 23
}

for (const [key, value] of user) {
    console.log(key , ":-", value);
}
//Error : TypeError: user is not iterable