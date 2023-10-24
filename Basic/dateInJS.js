
//Date Object: It stores date, time and provides methods to mananage the date and time.

//-----------------------------Creating date object-===============================================================================
/*
const curDate = new Date(); -> returns current date and time
const timestamp = new Date(milisconds); -> returns a inte
const dateGivenInStringFormate = new Date(dateStringFormate);
const yourGivenDate = new Date(year,month,daydate,hour,minutes,seconds,miliseconds);
 */

const curDate = new Date();
//console.log(curDate); //2023-10-24T11:38:04.834Z
//Methods to modify the outputformate:
// console.log(curDate.toString()); //Tue Oct 24 2023 11:40:43 GMT+0000 (Coordinated Universal Time)
// console.log(curDate.toLocaleString()); //10/24/2023, 11:40:43 AM (most used)
// console.log(curDate.toDateString()); //Tue Oct 24 2023
//cosole.log(curDate.toLocaleDateString()); // 10/24/2923


const dateEqualToGivenMiliseconnd = new Date(1698148237931); ///creates date equal to number of miliseconds elapsed since 01 Jan 1970
//console.log(dateEqualToGivenMiliseconnd.toLocaleString());

const anotherDate = new Date('2023-01-5'); //'YYYY-MM(01-12)-DD'
//console.log(anotherDate.toLocaleString()); //1/5/2023, 12:00:00 AM
const anotherDateSecond = new Date('01-5-2023')//'MM-DD-YYYY'
//console.log(anotherDateSecond.toLocaleString()); //1/5/2023, 12:00:00 AM


//new Date(Year, month,day, hour, min, sec, milisec): month starts from 0-11(0-Jan, 11-Dec)
const newDate = new Date(2023,0,5, 17, 52);
//console.log(newDate.toLocaleString()); //1/5/2023, 5:52:00 PM
const newDate_1 = new Date(2023,1);
//console.log(newDate_1.toLocaleString()); //2/1/2023, 12:00:00 AM >> if day is missing , it will be considered as 1 , hours missing- 12 , min,secc, ms missiong - 0

//====================Methosds to access Date Components(year, months, date, hour, min, sec, ms)=================================
 
const myDate = new Date();
//console.log(myDate.toLocaleString()); //10/24/2023 12:39:21PM
// console.log(myDate.getFullYear()); //2023
// console.log(myDate.getMonth()); //9 - (October)
// console.log(myDate.getDate()); //24
// console.log(myDate.getDay()); //2 (Sunday:0 - Saturday:6)
// console.log(myDate.getHours()); //12
//console.log(myDate.getTime()); // 169875649.....we will get miliseconds passed after 1 jan 1970 till current date

//we have getHours(), getMinutes(), getSeconds(), getMilliseconds().All the methods abve returs date component w.r.t local time zone


//=====================Set methods- We can also set the Date Component as per our  need.====================================
//SetFullyear(), setMonth(), setHours()....many more

myDate.setFullYear('2024');
//console.log(myDate.toLocaleString());



//===========Autocorrection - We can set out-of-range values, and this feature of Date obj will auto-adjust itself.================

const date1 = new Date(2023,0,33);
//console.log(date1.toLocaleDateString()); // 2/2/2023(31 jan + 2 = 02 Feb)

//Question -Print(Get) the date after 2 days.

const date2 = new Date(2023, 9,24); //10/24/2023
//date2.setDate(date2.getDate() + 2);
console.log(`The date after 2 days is ${date2.toLocaleDateString()}`);
