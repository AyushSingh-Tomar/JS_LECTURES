//(...)
//this operator allows you to spread elements of an iterable object such as an array
const num =[1,2,3]

// console.log(num.reduce((a,b)=>{return a+b}))
console.log(num)// [ 1, 2, 3 ]
console.log(...num)// 1  2  3
console.log(1,2,3)// 1  2  3

let x = [...num]
console.log(x) // [ 1, 2, 3 ]
let y = num                  // those does not create a new array refere {g}
console.log(y) // [ 1, 2, 3 ]

const newNum = [-1,0,...num,4,6,7]
console.log(newNum)

//{g}
let oldNum=[1,2,3,4,5,6,7,8,9,10];
let NextNum=oldNum;
oldNum[2]=22;
console.log(NextNum);


// Object

const person ={
    name:"Peter",
    age:22
}

const learn ={
    course:"JS",
    for:"Ever"
}

const new_obj ={
    ...person,...learn
}
console.log(new_obj)