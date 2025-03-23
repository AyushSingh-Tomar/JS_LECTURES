/*

1> First condition to send notification to the user is that the user should allow the website to share the notification
2> The other one is that the notification server 

To send the notification we use notification object this object has requestPermission() method 

*/
// Notification.requestPermission();
// either the user accepts it or the user reject it, the default behavior is treated as denied
let request = async()=>{
let perm = await Notification.requestPermission();
console.log(perm)// granted || denied
}
request()


//------------------------------//
// How to create a notification
// new Notification("Welcome to the world of JS");

//-------------------------------//
// customize notation
// const greeting = new Notification("Welcome to the world of JS ",{
//     body:"Get in touch with us",
//     icon:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMr71xaFwZUgwNGf4F3kZ5dixAqVpm4bLFQ&s"
// })
// greeting.onclick=()=>{
//     window.open('https://www.google.com/')
//     }
// greeting.close();

// // setTimeOut
// setTimeout(()=>{
//     greeting.close();

// },1000)

// prefect notification
// function showNotification() {
//     if (Notification.permission === "granted") {
//         const greeting = new Notification("Welcome to the world of JS", {
//             body: "Get in touch with us",
//             icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJMr71xaFwZUgwNGf4F3kZ5dixAqVpm4bLFQ&s"
//         });

//         // Close after 5 seconds
//         setTimeout(() => greeting.close(), 5000);
//     } else {
//         Notification.requestPermission().then(permission => {
//             if (permission === "granted") {
//                 showNotification();
//             }
//         });
//     }
// }

// showNotification();

