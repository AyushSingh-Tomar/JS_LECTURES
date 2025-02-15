

function setCookie(name, value,max_age){
    document.cookie=`${name}=${value}; max-age=${max_age}; path=/`;
}
function getCookie(cname){
    let str = document.cookie;
    let arr = str.split("; ");
    for(let elem of arr){
        if(elem.includes(cname)){
        return elem.split('=')[1];
    }
}
return null;
}

function checkExistence(){
    if(getCookie("username") !== null){
        document.write(`Hello ${getCookie("username")}`);
}
else{
    let name = prompt("Please Enter your age");
    setCookie("username",name,3600);
    location.reload();
}
}
checkExistence();