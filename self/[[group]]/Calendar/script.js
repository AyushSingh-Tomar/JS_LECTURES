let date = document.getElementById('date');
let day = document.getElementById('day');
let month = document.getElementById('month');
let year = document.getElementById('year');

function updateDate(){
const updateDate =new Date();
arrYear =[null,"January","February","March","April","May","June","July","August","September","October","November","December"];
arrDay =[null,"Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"];
date.innerText = updateDate.date;
day.innerText = arrDay[Number(updateDate.day)];
month.innerText = arrYear[Number(updateDate.year)];
date.innerText = updateDate.date;
}

// setInterval(updateDate,1000);
updateDate()