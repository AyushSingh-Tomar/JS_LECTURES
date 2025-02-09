// in js ,strings are immutable  and strings can be defined as following ways

// way 1,2,3
let s = "hello";
let s2 = 'world';
let s3=`! hehe`

// ------------------------

// this can also be done

let greet = "my Name is 'Ayush' "
let greet3 = "my name is `Ayush` "
let greet1 = 'my name is "Ayush" '
let greet2 = `my name is "Ayush" `
console.log(greet);
console.log(greet1);
console.log(greet2);
console.log(greet3);

// ------------------------

// to add character like 's you can use the \ "backslash"

console.log("That'\s good")

// ------------------------

// to add a line break use "\n"

// ------------------------

//  to get the length of the string , we can use length attribute of the string object
console.log(greet.length)

// ------------------------
// how to access the position of string
// the negative indexing does not work here
console.log(greet1[0]);

// ------------------------

// how to convert a not string value to a string
let  x= 10;
let sc= x.toString();
console.log(typeof sc)
console.log(typeof x)

// we can not directly assign value to any position of string
greet1[0] ="l"
console.log(greet1[0])

//----------------------------Commonly used js methods ------------------------------

// 1> Search method --> integer index
let regex = /[A-Z]/;
let rege = "Ayush";
console.log(greet.search(regex));
console.log(greet.search(rege));

// 2> includes method -> boolean
// position parameter -> it is optional it determines from which index search needs to get started
let sb = "is"
console.log(greet.includes(sb));
console.log(greet.includes(sb,9));

// 3> indexOf -> index of a substring 
let str ="the main string";
let sbstr="main"
console.log(str.indexOf(sbstr));

// 4> toUpperCase and toLowerCase
let originalmessage = "the crazy Frog jumps over the lAZY snake"
console.log(originalmessage.toUpperCase());
console.log(originalmessage.toLowerCase());

//5 > trim()
let name_found = "  let it be "
console.log(name_found.trim())


//6 > trimStart() and trimEnd()
console.log(name_found.trimStart());
console.log(name_found.trimEnd());

//7 > charAt()
console.log(name_found.charAt(6));

//8 > concat()
let str1 = "First_name "
let str2 = "Last_name "
let full_name = str1.concat(str2);
console.log(full_name);

let full_name2 = str1.concat(str2," olsum"," ipsum"," gypsum");
console.log(full_name2);

//9 > replace() --> replaces a substring in a string with a news string

let name1 = "richest man is bill gates"
let newpersonn ="Elon musk";
let new_rank = name1.replace("bill gates",newpersonn);
console.log(new_rank);

// 10> replaceAll() --> replaces all appearances of a substring in a string with given word

let my_diary ="This is monday, i have to go to college on monday, monday is a working day"
 let today = "tuesday";
 console.log(my_diary.replaceAll("monday",today));

 // 11> split("separator",number of elements you need) method in js, 

 let ch1= my_diary.split(" ",3);
 let ch2= my_diary.split(" ");
 console.log(ch1,ch2)

 // 12> substring() method

 let sentence = "This is planet earth";
  let planet = sentence.substring(15,20);
  console.log(planet)

  let email = "greatstack"
  console.log(email.substring(-1)); // any negative value considered to be 0 in the substring method

// slice() method 

let msg = "GreatStack"
let sbstr1= msg.slice(0,4);
console.log(sbstr1)

// when you write 4,0 in substring method, it iwl convert it into 0,4 
  // but in slice method it will remain the same

  let sbstr2= msg.slice(-4,-2);
  console.log(sbstr2 )