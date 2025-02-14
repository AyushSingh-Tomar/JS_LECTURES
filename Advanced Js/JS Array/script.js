// IN js an array is na ordered list of values. Each value is called an element at a specific index
// we can create array in the following ways
// 1> Constructor
 let arr1 = new Array();
 arr1[0]=10;
 arr1[1]=10;
 arr1[2]=10;
 arr1[3]=10;
 arr1[4]=10;
 arr1[5]=10;
 console.log(arr1);

 // 2> Array LiteralNotation

 let arr2 = ['red',0,'green',true];
 console.log(arr2);

 //how to access the elements of the array
 console.log(arr2[0]);



 //to modify length of  an array
 arr2.length=6;
 console.log(arr2)

 //to modify length of  an array
 arr2.length=2;
 console.log(arr2)

  //to modify length of  an array
  arr2.length=0;
  console.log(arr2)


  // Methods of Arrays in JS
   

  // 1> PUSH method

  arr2.push(2);
  console.log(arr2);

  // 2> 

arr2.push(2,4,5,6,7,8);
console.log(arr2);

  // 3>

let arr3 = [1,2,3,4,5,6,7];
// arr2.push(arr3);
console.log(arr2);

for(let i of arr3){
 arr2.push(i);
}
console.log(arr2);

//unshift()  method add elements at the starting of the array and returns the length of the new array

let length = arr2.unshift(6,7);
console.log(length,arr2)

//pop() method removes the last element of the array and returns it

let number = [10,20,30,40]
let last = arr2.pop()
console.log(last,arr2)

// shift() method removes the first elements of the array and returns it 
let first = arr2.shift();
console.log(first,arr2)

//splice() method allows to delete existing elements, add new elements and replace the existing elements of the array
let d = arr2.splice(0,2);// the first argument is the starting index of splicing and the other argument is the end of splicing,last index is inclusive, this method also returns deleted numbers
console.log(arr2);
console.log(`Deleted elements :${d}`)

// it also returns deleted numbers
let deletedNumbers=arr2.splice(0,2);
console.log(deletedNumbers)

// it can also add new elements -->

// arr2.splice(Position,0,new1,new2,...)
arr2.splice(3,0,19,18,17,16); // now it will return an empty array as nothing is removed
console.log(arr2);
console.log("here")
// replacing the pre-existing elements by new elements
let array_num= [10,20,30];
//Array.splice(position,1,val)
array_num.splice(1,1,25);
console.log(array_num);

array_num.splice(1,1,25,40);
console.log(array_num);


//slice method returns a new array consisting of the subsets of old array

let main_array=[1,2,3,4,5,6,7,8,9,10,"red","tw","20",true];
let subArray=main_array.slice();
console.log(subArray);
let subArray1=main_array.slice(1,3);
console.log(subArray1);

// map(), used to add a callBack function onto the array

//ex 
 let num2x = main_array.map(function(x){return x*2});
 console.log(num2x);

 let num3x = main_array.map(x=> x*3);
 console.log(num3x);

// filter() method

let new_number=main_array.filter(function(x){return x%2==0})
console.log(new_number);

let new_number_only_string=main_array.filter(function(x){return typeof x=="string"?x:null})
console.log(new_number_only_string);

console.log(typeof (typeof num3x));


//reduce() method is used to reduce an array to a value

let test=[1,2,3,4,5,6,7,8,9,10];
let sum_of_all_elements=test.reduce(function(prev,curr){
    //by default it takes prev val as 0
    // we can set the initial value by ourselves see in next example
    return prev+curr
})
console.log(sum_of_all_elements);

let sum_of_all_element=test.reduce(function(prev,curr){
    //by default it takes prev val as 0
    // set the initial value by yourself
    return prev+curr
},100)
console.log(sum_of_all_element);

let dictionary =["Hello",()=>{return "Hello"},"name","is","this"];
let sentence = dictionary.reduce(function(prev,curr){
   return prev+" "+curr;
})
console.log(sentence)


//reduceRight() method is same as reduce but starts at last element and travels to the first element

let oppose_sentence=dictionary.reduceRight(function(prev,curr){
    return prev+" "+curr;
});
console.log(oppose_sentence);

//every() method checks if all the elements of an array passes a specific test
// this method returns a truthy value for every array elements, otherwise false;
let arr_test1 = test.every(function(x){
    return x>=0;
});
let arr_test = test.every(function(x){
    console.log(this)
    return x>=0;
},8);
// it stops execution if the test fails somewhere
console.log(arr_test);

//some() method checks if at least one element of an array passes a specific test, it iterates over the elements until it finds an element that passes the test
// it will immediately returns true without checking rest of the elements in the array

let num_array=[false,false,false,false,true,false,false];
let does_it_have_a_true=num_array.some(function(x){return x==true;});
console.log(does_it_have_a_true);
// this can also be used in some() method

// sort(), by default the sort method arranges the elements of the array in ascending order
let unsorted_array=[1,3,6,9,8,5, ,2,0,4,7,10]
// puts  empty element et the end
//by default the sort method converts the elements of the array to string and sorts lexicographically
console.log(unsorted_array,unsorted_array.sort());
// numeric sorting 
console.log(unsorted_array,unsorted_array.sort((a,b)=> a-b));
// the sort() method uses compareFunction to sort the elements of array
// the compareFunction should get two parameters and the sorting depends on the return value of the compareFunction
// the following rules should be followed

let unTreated_array=[7,4,5,8,6,9,0,1,4,3,2];
let treated_array=unTreated_array.sort(function(a,b){
    if(a>b) return 1;// b will come first
    if(a<b) return -1;// a will come first
    return 0;// unchanged
})
console.log(treated_array)

let unTreated_array1=[7,4,5,8,6,9,0,1,4,3,2];
let treated_array1=unTreated_array.sort(function(a,b){
    if(a>b) return -1;// b will come first
    if(a<b) return 1;// a will come first
    return 0;// unchanged
})
console.log(treated_array1)

// we can further simplify the functions 

let unSorted_array=[7,4,6,3,5,9,8,1,2,0];
let Sorted_array=unSorted_array.sort(function(a,b){return a-b});
console.log(Sorted_array)

// to execute a function on each element of an array , you can use foreach() method

// Array.forEach(function,thisValue)

unSorted_array.forEach((x)=>{console.log(x)});

// multidimensional array
let multidimensional_array =[[1,2,3],[1,2,3]]
multidimensional_array.forEach((x)=>{x.forEach((y)=>{console.log(y)})});