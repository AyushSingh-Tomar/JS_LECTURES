const date = document.getElementById('date');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');

function updateDate(){
const today = new Date();
date.innerHTML=today.getDate()>10?today.getDate():"0"+today.getDate();
day.innerHTML=getDayName(today.getDay());
year.innerHTML=today.getFullYear();
month.innerHTML=getMonthName(today.getMonth());
}
updateDate();
setInterval(updateDate,1000);

function getDayName(x){
    if(x==1){
        return "Monday";
    }
    if(x==2){
        return "Tuesday";
    }
    if(x==3){
        return "Wednesday";
    }
    if(x==4){
        return "Thursday";
    }
    if(x==5){
        return "Friday";
    }
    if(x==6){
        return "Saturday";
    }
    if(x==0){
        return "Sunday";
    }
}
function getMonthName(x){
    if(x==1){
        return "January";
    }
    if(x==2){
        return "February";
    }
    if(x==3){
        return "March";
    }
    if(x==4){
        return "April";
    }
    if(x==5){
        return "May";
    }
    if(x==6){
        return "June";
    }
    if(x==7){
        return "July";
    }
    if(x==8){
        return "August";
    }
    if(x==9){
        return "September";
    }
    if(x==10){
        return "October";
    }
    if(x==11){
        return "November";
    }
    if(x==12){
        return "December";
    }
}