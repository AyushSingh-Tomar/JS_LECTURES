let list = document.querySelector(".list");
let area = document.querySelector(".area");
// list.addEventListener('dragstart',(e)=>{
//     console.log(e.type);
//     console.log(e.target);
// })
list.addEventListener('drag',(e)=>{
    let selected = e.target;
    area.addEventListener('dragover',(e)=>{
        e.preventDefault();
    })
    area.addEventListener('drop',(e)=>{
        area.appendChild(selected)
    })
})
// list.addEventListener('dragend',(e)=>{
//     console.log(e.type);
// })
// area.addEventListener('dragenter',(e)=>{
//     e.preventDefault()
//     console.log(e.type)
// })
// area.addEventListener('dragover',(e)=>{
//     e.preventDefault()
//     console.log(e.type)
// })
// area.addEventListener('dragleave',(e)=>{
//     e.preventDefault()
//     console.log(e.type)
// })
// When an object get over a possible droppable element
/* 
it first throws Drag Enter
and continuously Drag Over


it will either throw Drag leave or Drag leave


*/


//-------------dataTransfer Object-------------------------------------//
/* dataTransfer object has two methods:setData() and getData()
*/

DataTransfer.setData('text/uri-list',data);

DataTransfer.getta('text/uri-list',data);


