/*
The getCurrentPosition() method sends an asynchronous request to detect
the user's location
*/

//navigator.geolocation has to get two parameters, callbacks, the second one is optional.
// first one is on success and the other one is on failure
if(navigator.geolocation){
console.log(navigator.geolocation);
console.log(navigator.geolocation.getCurrentPosition(successFul,Failed));
function successFul(location){
    let x = location.coords.latitude;
    let y = location.coords.longitude;
    console.log(`latitude: ${x} \n\ longitude: ${y}`);
}
function Failed(){
    console.log("Failed to get your location")
}
}