let screen = document.getElementById("screen");
let FnameInput = document.getElementById("fname");
let LnameInput = document.getElementById("lname");
function Person(first,last){
this.firstName= first ?? "John",
this.lastName= last ?? "doe"
}
let Persons=[]


const person1 = new Person("Ayush1","Singh"); 
const person2 = new Person("Ayush2","Singh"); 
const person3 = new Person("Ayush3","Singh"); 
const person4 = new Person("Ayush4","Singh"); 
const person5 = new Person(); 
Persons.push(person1,person2,person3,person4,person5);
function reLoad(){
  screen.innerHTML='';
  Persons.forEach((obj)=>{
    screen.insertAdjacentHTML('beforeend',`<p>${obj.firstName} ${obj.lastName}</p>`)
  })
}
reLoad();