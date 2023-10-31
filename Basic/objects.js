//What is oject


//Object Creation- Object can be created by following way:
// By Object Literal: const objetcName = { } --> this is non-singleton type
// By Object() constructor : const ObjectName = new Object(); ----> Singleton type
//By Object.create() 

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
console.log(userInformation.firstName);
console.log(userInformation["firstName"]);
  //console.log(userInformation.last Name); // error: string type keys can be accessed only by [] method
console.log(userInformation["Last Name"])

//adding new property to an object:
userInformation.age = 23;
userInformation.gender = 'M';
console.log(userInformation);

//freezing a object
Object.freeze(userInformation);