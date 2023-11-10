
//Date Object: It stores date, time and provides methods to mananage the date and time.

//-----------------------------Creating date object-===============================================================================
/*
const curDate = new Date(); -> returns current date and time
const timestamp = new Date(milisconds); -> returns a inte
const dateGivenInStringFormate = new Date(dateStringFormate);
const yourGivenDate = new Date(year,month,date,hour,minutes,seconds,miliseconds);
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
//console.log(myDate.toLocaleString());// only year will be set to 2024, date, month , time will be same as localcurrent time



//===========Autocorrection - We can set out-of-range values, and this feature of Date obj will auto-adjust itself.================

const date1 = new Date(2023,0,33);
//console.log(date1.toLocaleDateString()); // 2/2/2023(31 jan + 2 = 02 Feb)

//Question -Print(Get) the date after 2 days.

const date2 = new Date(2023, 9,24); //10/24/2023
//date2.setDate(date2.getDate() + 2);
//console.log(`The date after 2 days is ${date2.toLocaleDateString()}`);

//==============================TimeStamp======================================================================================
// Timestamp - an integer represting number of miliseconds elapsed since 01 Jan 1970.
//getTime() and Date.Now()
const timestamp = new Date().getTime();
//console.log(`The current timestamp by getTime() method  is ${timestamp} ms`);

const anotherTimestamp = Date.now();
//console.log(`The current timstamp by Date.Now() method is ${anotherTimestamp} ms`);


//==================Modifing toLocaleString() method to get more specific output formate==============

// const currentTime = new Date();
// console.log(currentTime.toLocaleString('default',{
//     'weekday' : "long",
//     'month' : "long"
// // we can modify other properties like hour, min, sec ..so on to get them in output

// }
// ));

//====================================Exercise questions======================================================================
//European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7).
// Write a function getLocalDay(date) that returns the “European” day of week for date.

function getLocalDay(date){
      let weekdays = date.getDay();
    // Adjust the day to start with Monday as day number 1
      if (weekdays === 0)
        return 7;
    else
        return weekdays;
}

let date = new Date(2012, 0, 3);  // 3 Jan 2012

//console.log( getLocalDay(date) );    

//==========================================Exercise[Which day of month was many days ago?]========================================================================
/**Create a function getDateAgo(date, days) to return the day of month days ago from the date.
For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.
Should work reliably for days=365 or more:

let date = new Date(2015, 0, 2);

alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

P.S. The function should not modify the given date.
 */

let getDateAgo = (date, days) =>{
        let dateCopy = new Date(date); //The function could not modify the original date so first copying the original date
        dateCopy.setDate(dateCopy.getDate()- days);
        return dateCopy.getDate();

}

givenDate = new Date(2015,0,2);
// console.log(getDateAgo(givenDate, 1));
// console.log(getDateAgo(givenDate, 2));
// console.log(getDateAgo(givenDate, 365));

//==================================Execise question===========================================================================
/**
 * Write a function getLastDayOfMonth(year, month) that returns the last day of month.
 * Sometimes it is 30th, 31st or even 28/29th for Feb.
Parameters:
year – four-digits year, for instance 2012.
month – month, from 0 to 11.
For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).
 */

function getLastDayOfMonth(year, month){
    return new Date(year, month+1, 0).getDate();
}
//console.log(getLastDayOfMonth(2012,1));

//=============================================Exercise===========================================================================
/**
 * Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.
For instance, if now is 23:00, then:
getSecondsToTomorrow() == 3600
P.S. The function should work at any day, the “today” is not hardcoded.
 */

// function getSecondsToTomorrow(){
//    let now = new  Date();
   
//    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate()+1);
//   let difference = tomorrow - now;
//   return Math.floor(difference/1000);
// }
// console.log(getSecondsToTomorrow());


