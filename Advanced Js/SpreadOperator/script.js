//(...)
//this operator allows you to spread elements of an iterable object such as an array
const num =[1,2,3]

// console.log(num.reduce((a,b)=>{return a+b}))
console.log(num)// [ 1, 2, 3 ]
console.log(...num)// 1  2  3
console.log(1,2,3)// 1  2  3

let x = [...num]
console.log(x) // [ 1, 2, 3 ]
let y = num
console.log(y) // [ 1, 2, 3 ]