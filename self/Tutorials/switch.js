// a =null
// msg=``
// console.log(typeof msg)
// switch(typeof a){
//     case "number":msg="number";
//     break;
//     case "string":msg="string";
//     break;
//     case "boolean":msg="boolean";
//     break;
//     default :msg=`${typeof a}`;
// }
// // document.write(
// // msg
// // )
// // console.log(
// //     msg
// //     )
let obj={
    name:"Ayush",
    roll:"107"
}
let arr=[obj]
student=document.getElementById("getdata1")
roll=document.getElementById("getdata2")
button=document.getElementById("butt")
table=document.getElementById("data");
button.addEventListener("click",()=>{
    table.insertAdjacentHTML('beforeend', `<tr><td>${student.value}</td><td>${roll.value}</td></tr>`);
})

