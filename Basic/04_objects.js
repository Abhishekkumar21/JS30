//What is oject


//Object Creation- Object can be created by following way:
    // By Object Literal: const objetcName = { } --> this is non-singleton type
    // By Object() constructor : const ObjectName = new Object(); ----> Singleton type
    //By Object.create()
    // By Object.fromEntries() 

//Object literals==============================>

//An empty object:
    const object =  {}
//object with  some assigned properties: 
    const userInformation = {
        firstName: "Abhishek",
        'Last Name': "Kumar",
        DoB: '2000-12-23',
        isLoggedIn : true
    } 

//Access Object: object can be accessed by dot operation and also by []
//console.log(userInformation.firstName);
//console.log(userInformation["firstName"]);
  //console.log(userInformation.last Name); // error: string type keys can be accessed only by [] method
//console.log(userInformation["Last Name"])

//adding new property to an object:
userInformation.age = 23;
userInformation.gender = 'M';
userInformation['Time Zone'] = 'EST',
//console.log(userInformation);

//freezing a object
Object.freeze(userInformation);
userInformation['country'] = 'Canada'; //this propery cannot be added in userInformation object bcoz object has been freez.
//console.log(userInformation);


//An object can contain any type of date even objects/NestedObjects, Functions

const User ={
    name : {firstName: 'Abhishek', lastName : 'Kumar' },
    dateOfbirth : new Date('2000-12-01'),
    calculateAge : function (){
        let currentDate = new Date();
        let birthDate = this.dateOfbirth;
        return currentDate.getFullYear() - birthDate.getFullYear();
    }
}
//console.log(`user is ${User.name?.firstName} ${User.name?.lastName}\nHis date of birth is ${User.dateOfbirth.toLocaleDateString()} and\nthe current age is ${User.calculateAge()}`);

//User.name?.firstName ---> accesing nested object ==> OPTIONAL CHAINING

//OPTIONAL CHAINING : it is a feature is JS that allows you to safely access the properties or call method on object
    //, even if the object or any intermedate property in the chain is null or undefined.
    //It helps in preventing the 'TypeError' error in case of nested object. It is denoted by '?' operator. Example-
    const userDetail = {
        name: "John",
        address: {
          city: "New York",
        },
      };
    //const country = userDetail.address.country; // Here we are accessin a nested prop without optional chaining it will trow error beacuse it is not present in the nested object address 
      const country = userDetail.address?.country; //This will not throw an error, 'country' will be 'undefined'
    //console.log(country); //undefined

/**MERGING of objects: two or more object can be merged in a single object by using-
  Object.assign(target, source) method: the Object.assign() static method copies all enumerable own properties 
  from one or more source objects to a target object. It returns the MODIFIED target object.
*/
  
const target = {a:1, b:3};
const source = {c:2, d:5};

const returnedTargetObject = Object.assign(target, source);
//console.log(returnedTargetObject); //{ a: 1, b: 3, c: 2, d: 5 }
//console.log(target === returnedTargetObject); //true

//if you do not want to modify the any obj by keeping it as a target then take target as empty
//object and take all the present object as source
  const o1 = {a:1};
  const o2 = {b:2, c:3};
  const o3 = {d:4, e:5, f:6};
//const obj = Object.assign({}, o1, o2, o3); //none of o1,o2,o3 will be modified
//console.log(obj);//{ a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 }


/** Object.assign() is not used mostly, we use Spread operator mostly for concatinating the objects */

const obj = {...o1, ...o2, ...o3};
//console.log(obj);


//===Getting the values from database (i.e array of objects) and accessing them========

const valuesFromDB = [
            {
              id : 1,
              email : "a@gmail.com"
            },
            {
              id : 2,
              email : "b@gmail.com"
            },
            {
              id : 2,
              email : "c@gmail.com"
            }
]

//console.log(valuesFromDB[1].email, valuesFromDB[0].email, valuesFromDB[2].id);

/** Some Other useful object's methods */

//Object.keys() - returns an array of all the keys of object on which it is called
const xUser = {
      id : 1234,
      email : 'p@gmail.com',
      isLoggedIn : 'false'
}
const arrayOfKeys = Object.keys(xUser);
//console.log(arrayOfKeys); //[ 'id', 'email', 'isLoggedIn' ]

//Object.values() - returns an array of all the values of object on which it is called

const arrayOfValues = Object.values(xUser);
//console.log(arrayOfValues); //[ 1234, 'p@gmail.com', 'false' ]


//Object.entries() - returs an array of each key-value pair's array  [!!!!!!rarely used!!!!!!!!]

const arrayOfProperties = Object.entries(xUser);
//console.log(arrayOfProperties);// [[ 'id', 1234 ],[ 'email', 'p@gmail.com' ],[ 'isLoggedIn', 'false' ]]


//objectName.hasPropeties() - checks a given prop is present in object or not. returns boolena value true/false

//console.log(xUser.hasOwnProperty('id')); //true : id is present in xUser named object


//================================Object Destructuring=====================================================
//Destructuring assignment is a special syntax that allows us to “unpack” arrays or objects 
//into a bunch of variables, as sometimes that’s more convenient.

//Syntax : let {var1, var2} = object //object: you want to destructure/split

const options = {
  title: "Menu",
  width: 100,
  height: 200
};

//const {title, width, height} = options; 
// console.log(title);  
// console.log(width);
// console.log(height);
// properties options.title, options.width, options.height are assigned to corresponding variables 
//title, width, height

//If we want to assign a property to a variable with another name, then then we can set the variable name using a colon:
        // const {title : t, width : w, height :h} = options;
        // console.log(t, w, h); // t->title, w->width, h-> height


//Rest '...' operator pattern in destructuring ->
//What if the object has more properties than we have variables? Can we take some and then assign the “rest” somewhere?

        // const {title} = options;
        // console.log(title); //Menu

    //const {title, ...Rest} = options;
    // title = 'Men'
    // Rest = {width: 100, height : 200}



        
//Exercise on Destucturing of object-

//1):
let user = {
  name: "John",
  years: 30
};

/*Write the destructuring assignment that reads:
name property into the variable name.
years property into the variable age.
isAdmin property into the variable isAdmin (false, if no such property)*/

let {name, years : age, isAdmin = false} = user;
//console.log(name, age, isAdmin);

//2): The Maximal Salary-----------------------------------------------
/**
 * There is a salaries object:

let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};
Create the function topSalary(salaries) that returns the name of the top-paid person.

If salaries is empty, it should return null.
If there are multiple top-paid persons, return any of them.
 */
let salaries = {
  "John": 100,
  "Pete": 300,
  "Mary": 250
};

// function topSalary(salaries){
//     if(Object.keys(salaries).length === 0) //condition to check if object is empty by Oject.Keys().length

// }

function topSalary(salaries) {
  return Object.keys(salaries).reduce((max, s) => salaries[max] > salaries[s] ? max : s)
  }

//console.log(`${topSalary(salaries)}`)



/***************************************'this' keyword****************************************
 * this - is used to refer to the current object/contex.
 * In non–strict mode, this is always a reference to an object;
 * In strict mode, it can be any value
 * The value of this depends on in which context it appears: function, class, or global.
 * ******************/


let tinderUser = {
  name: "John",
  age: 30,
  welcomeMessage : function(){
    return `Hey! ${this.name}, Welcome to Tinder.`; //this-> tidnerUser
  }
};
//console.log(tinderUser.welcomeMessage()); //Hey! John, Welcome to Tinder.
tinderUser.name = 'Sam';
//Here , context has been changed , now we are talking about name: Sam instead of 'John'
//console.log(tinderUser.welcomeMessage()); //Hey! Sam, Welcome to Tinder.


/***********************************************Object Methods****************************************************************/
//A function that is a property of an object is called its method.

  // let instaUser = {
  //   name : 'jon',
  //   age : 23
  // }

  // instaUser.sayHi = function(){
  //   console.log('Hello!');
  // }

  // instaUser.sayHi();//Hello

//Method shorthand : There exists a shorter syntax for methods in an object literal:

  // let instaUser = {
  //   name : 'jon',
  //   age : 23,
  //   sayHi : function() {
  //     console.log('Hello!');
  //   }
  // }

  //WE can omit function key word and directly write sayHi()

  let instaUser = {
    name : 'jon',
    age : 23,
    sayHi() {
      console.log('Hello!');
    }
  }
  
  instaUser.sayHi();


