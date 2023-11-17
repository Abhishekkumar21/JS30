//IIFE: Immidiatelly Invoked Function Expression
//- function that runs as soon as it is defined
//- used to avoid pollulating the global namespaces : sometimes we have many globle variables in the code
    //which can cause problem in future in program so clean the garbage from the globle namespaces we use iifee


    (() => {
        // some initiation code
        let firstVariable;
        let secondVariable;
      })();
      
      // firstVariable and secondVariable will be discarded after the function is executed.

/*
//Example.1 : 
(function chai() {
    console.log('DB connected.');
}) ();


//Example.2: passing arguments-
(function adrakchai(name) {
    console.log(`${name} your DB connected.`);
}) ('Abhishek');

*/

//Example.3: iffe with arrow function

    //( () => (console.log('DB Disconnected')) )()

    //agar arrow function me sigle line code hai to usko bina 'return' ke ( ) me likh skte hain, no need for  { } and return    



//Example.4: write two consecutive iffes-
( (n1,n2) => console.log(n1+n2) )(3,4);
( (n1,n2) => console.log(n1 * n2) )(3,4)
//mention ;(in lin:38) between two iffes otherwise error will be thrown.!!!NOTE!!!



//more on :https://developer.mozilla.org/en-US/docs/Glossary/IIFE



