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


