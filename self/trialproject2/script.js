let div = document.createElement("div");
document.body.appendChild(div);
div.innerText="Hello"
let p1 = document.createElement("p");
let p2 = document.createElement("p");
let p3 = document.createElement("p");
let p4 = document.createElement("p");
p1.innerText="1";
p2.innerText="2";
p3.innerText="3";
p4.innerText="4";
div.prepend(p1,p2,p3,p4);