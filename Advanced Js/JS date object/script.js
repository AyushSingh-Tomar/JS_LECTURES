// create new date object 
let date = new Date();
// by default is uses browsers time zone and displays as a string
console.log(date);
// You can also pass string as an argument in the constructor
let my_date = new Date("September 1, 2026 10:12:00");
console.log(my_date);
//                 or
let my_date1 = new Date("2026-9-1 10:12:00");
console.log(my_date1);


// Format to create a date 
// new Date(year,month,date,hours,minutes,seconds,ms);
let date_1 = new Date(2026,9,1,5,0,67);
console.log(date_1);

// After January 01,1970 00:00:00 UTC <--- is called 0 time
let d = new Date(24*60*60*1000);
console.log(d);

// to convert time in utc we use the method date.toUCTString()
let x= d.toUTCString();
console.log(x);

// to Date String converts the date into more readable format
let readable_format = date.toDateString();
console.log(readable_format);

//to convert the date in ISO format
let ISO_format = date.toISOString();
console.log(ISO_format);

//Date.parse method returns number of milliseconds from jan 1,1970 to a date
let milliseconds_upto=Date.parse("2026 1 2");
console.log(milliseconds_upto);

//JavaScript Get methods
let new_date = new Date();
console.log(new_date.getDate());
console.log(new_date.getFullYear());
console.log(new_date.getMilliseconds());
console.log(new_date.getMinutes());
console.log(new_date.getMonth());
console.log(new_date.getHours());
console.log(new_date.getSeconds());

console.log(Date.now()); // returns the milliseconds from Jan 1 1970



/*----------------------------------------------------------------*/
// Set methods in JS
let date_2 = new Date();
date_2.setFullYear(2000);
console.log(date_2.getFullYear());
date_2.setMonth(9);
console.log(date_2.getMonth());

// setTime() method adds in milliseconds
date_2.setTime(1000000);
console.log(date_2);