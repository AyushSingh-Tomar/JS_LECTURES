
// let screen = document.getElementById("screen1");

// const Person = new Object({
//     Fname: "Ayush",
//     Lname: "Ayush",

//     // Regular method to update the screen
//     greet: function() {
//         screen.innerHTML = "hello";
//     },

//     // You can't directly place IIFE here, but you can call it within a method or during initialization
//     init: (
//         // This is the IIFE, it runs immediately
//         function(fname) { console.log('beforeend', `<p>${fname}</p>`);
//         // Assuming 'Person' is available globally
//     })(this.Fname)

// });

// // To greet later
// Person.greet();
// // let screen= document.getElementById("screen1");
// // let screen1= document.getElementById("screen2");
// // const Person = new Object(
// //     {
// //         Fname: "Ayush",
// //         Lname: "Ayush",
// //         // greet: function greet(s){
// //         //  screen.innerHTML=s;
// //         // }
// //         // greet: (s)=>{
// //         //  screen.innerHTML=s;
// //         // }
// //         greet: function(){
// //          screen.innerHTML="hello";
// //         },
       
// //         meet: (function(){
// //             console.log('beforeend',`<p>${Fname}</p>`)
// //         })
// //     }
    
// // )

// // Person.greet;

// // const limbo= ()=>{
// //     screen1.innerHTML="hillo"
// // }
// // Object.assign(Person,{limbo:limbo})
// // console.log(Person)
// // Person.limbo();

// const Person = new Object({
//     Fname: "Ayush",
//     Lname: "Ayush",

//     init: (function(fname) {
//         // Immediately invoked, uses 'fname'
//         console.log('beforeend', `<p>${fname}</p>`);
//     })(this.Fname) // Pass 'this.Fname' to the IIFE
// });

const Person = new Object({
    Fname: "Ayush",
    Lname: "Ayush",
    init: function(key ,value){
     Person[key] = value;
    },
    greet:function(){
     console.log(`greeting from ${this.Fname}`)
    }
});
console.log(Person)
Person.init("Mname","Tomar")
console.log(Person)
Person.greet()
console.log(Person)

