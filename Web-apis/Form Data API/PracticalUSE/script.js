let form = document.getElementById("form");
let btn = document.getElementById("submit");
let box = document.getElementById("box");
btn.addEventListener("click",(e)=>{
         e.preventDefault();
         const formData = new FormData(form);
         for(let [key,value] of formData){
            const line = document.createElement('p');
            line.innerHTML =`${key} : ${value}`
            box.appendChild(line);
         }

})