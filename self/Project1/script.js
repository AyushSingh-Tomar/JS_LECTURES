let idNo=0;
let tasks=[
    {description:"Study",time:"20:30",status:"undone",id:"1"},
    {description:"Study",time:"20:30",status:"undone",id:"2"},
    {description:"Study",time:"20:30",status:"undone",id:"3"},
    {description:"Study",time:"20:30",status:"undone",id:"4"},
]
let list =document.getElementById("listdata");
let number =document.getElementById("snodata");

function renderList(){
list.innerHTML ='';
number.innerHTML ='';
let s=1;
tasks.forEach((obj)=>{

    list.insertAdjacentHTML('beforeend',`<p class="data">${obj.description} at ${obj.time} &nbsp; <input id="in${obj.id}" type="checkbox" onChange="myFunction('${obj.id}')"/></p>`)
    number.insertAdjacentHTML('beforeend',`<p class="data">${s++}</p>`)
   
});
idNo=s+1;
}

function myFunction(n){


           tasks=tasks.filter(((t)=>{return t.id!==n}));

    renderList();
}

function myFunctionAdd(s,n){
tasks.push({description:n,time:s,status:"undone",id:`${idNo}`})
idNo++;

renderList()
}

renderList()
