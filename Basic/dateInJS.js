
//Date Object: It stores date, time and provides methods to mananage the date and time.

//Creating date object-
/*
const curDate = new Date(); -> returns current date and time
const timestamp = new Date(milisconds); -> returns a inte
const dateGivenInStringFormate = new Date(dateStringFormate);
const yourGivenDate = new Date(year,month,day,hour,minutes,seconds,miliseconds);
 */

const curDate = new Date();
//console.log(curDate); //2023-10-24T11:38:04.834Z
//Methods to modify the outputformate:
// console.log(curDate.toString()); //Tue Oct 24 2023 11:40:43 GMT+0000 (Coordinated Universal Time)
// console.log(curDate.toLocaleString()); //10/24/2023, 11:40:43 AM (most used)
// console.log(curDate.toDateString()); //Tue Oct 24 2023


const dateEqualToGivenMiliseconnd = new Date(1698148237931); ///creates date equal to number of miliseconds elapsed since 01 Jan 1970
//console.log(dateEqualToGivenMiliseconnd.toLocaleString());

const anotherDate = new Date('2023-01-5'); //'YYYY-MM(01-12)-DD'
//console.log(anotherDate.toLocaleString()); //1/5/2023, 12:00:00 AM
const anotherDateSecond = new Date('01-5-2023')//'MM-DD-YYYY'
//console.log(anotherDateSecond.toLocaleString()); //1/5/2023, 12:00:00 AM


