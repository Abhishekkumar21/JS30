
//Array's Filter() method -

/* - it is a iterative  method that returns a completely new array with all the elements that passes a test defined by a callback fuction.
   - it does not modify the original array.
   - basic syntax : myarray.filter(callbackfn)
   - it also offers chaining the method

*/

//Example 1:

const myNums = [10,20,30,40,60,80,90]
//filter out the all the numbers greater than 45
const result = myNums.filter( (num) => num > 45);
//console.log(result); //output : [ 60, 80, 90 ]

//Example 2: [ {}, {}, {}] You have an array of multiple objects

//you have an array of objects that holds users' detail like name, age and occupation. Filter the user's whose age is greater than 40

const users = [
    { name: 'John', age: 25, occupation: 'gardener' },
    { name: 'Lenny', age: 51, occupation: 'programmer' },
    { name: 'Andrew', age: 43, occupation: 'teacher' },
    { name: 'Peter', age: 81, occupation: 'teacher' },
    { name: 'Anna', age: 47, occupation: 'programmer' },
    { name: 'Albert', age: 76, occupation: 'programmer' },
]

// const filteredUsers = users.filter( (user) => user.age > 40 );
// console.log(filteredUsers);

//filter the users who are programmer and below age 50
    // const filteredUsers = users.filter( (user) => user.age < 50 &&  user.occupation === 'programmer');
    // console.log(filteredUsers);




//we can do this by for loop also, but filter() method provides better way , better syntax

    // let filteredUsers = [];

    // for(let i = 0; i < users.length; i++) {
    //     if(users[i].age > 40) filteredUsers = [...filteredUsers, users[i] ]; //[...filteredUsers, users[i]]: This is the spread syntax. The ellipsis (...) is used to spread the elements of filteredUsers into a new array. After spreading the existing elements, the current user (users[i]) is added as the last element of the new array.
    // }
    // console.log(filteredUsers);






