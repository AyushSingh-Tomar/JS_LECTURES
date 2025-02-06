let screen=document.getElementById("display");

try {
    screen.innerHTML = myFunction();;
    
  }
  catch(err) {
    screen.innerHTML = err.message;
  }
// // Arrow function
// //Cannot access 'myFunction' before initialization
var myFunction=()=>{ // let and const can be used not var
  console.log("name");
    return "this is me";
}
// // works
// --------------------------------------------------------------
// // Function Declaration
// // works
// function myFunction(){
//   return "This is me"
// }
// // works
// --------------------------------------------------------------
// Function expression
let screen1=document.getElementById("display1");
try {
    screen1.innerHTML = myFunction();;
    
  }
  catch(err) {
    screen1.innerHTML = err.message;
  }
  