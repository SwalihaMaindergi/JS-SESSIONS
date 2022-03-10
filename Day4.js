// Array : There are 2 ways to creating Array.

// 1. Using array literals

let arr = [];                      // empty array
console.log("arr",arr);


// 2. Using constructor function

let anotherArr = new Array();
console.log("anotherArr",anotherArr);



// Providing value inside array...

let arr = [1,2,3,4,5,6,7];                            
console.log("arr",arr);

let anotherArr = new Array(1,2,3,4,5,6,7);
console.log("anotherArr",anotherArr);



// Inside Array, We can store/content value of any data type.  
// numeric, string, decimal value, object also.

let arr = [1, "sai", 3, 42.3, 5, {id:1, name:"harsh"}, 7];
console.log("array", arr);


// How Acess data/values inside array...? : By Using index value.
// Array indexing start from 0.

let arr = [1, "sai", 3, 42.3, 5, {id:1, name:"harsh"}, 7];
console.log(arr[3]);



// 4 Functions of Array : 4 functions
// push , pop , shift , unshift

let values = ["a", "e", "i", "o", "u"]

// lenth of the array
console.log(values.length);              // 5

values[10] = 12;
console.log(values[6]);               // undefined  // It is not consider an Error in JS, but this is on the [10]index
console.log(values[10]);              // at index[10] value assigned to index[10]=20.

console.log(values);                  

// add last.           : when we want add new item inside array at the end of the array, use push function.
values.push(1);
console.log(values);

// removes from end.   : Basically remove last element of array.
values.pop();
console.log(values);

// removes from start. : Remove 1st element of Array.
values.shift();
console.log(values);

// add start.          : Add any element at start of array. Use unshift.
values.unshift("a");
console.log(values);



// function to find out how many numeric values in an array.

function countnumber (arr){
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (typeof(element)==="number") count++;
        // if (typeof(element)==="string")  //for strings
    }
    return count;
}
const result = countnumber([1,2,3,4,5]);
console.log(result);


// function to find out how many strings values in an array.

// function countString (arr){
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (typeof(element)==="string") count++;
//     }
//     return count;
// }

// const result = countString(["a", "b", "c"]);
// console.log("Strings Count :",result);


// Print for numeric inside array.

// function countString (arr){
//         let count = 0;
//         let tempArr = [];
//         for (let i = 0; i < arr.length; i++) {
//             const element = arr[i];
//             if (typeof(element)==="number") tempArr.push(element)
//          // if (typeof(element)==="string") tempArr.push(element)  // for sting print
//         }
//         return tempArr;
//     }
    
// const result = countString(["a", "b", "c", 1, 2, 3, 4, 5]);
// console.log(result);



// functions : some and every
// some and every                // 1. some and every are 2 functions always return boolean value. (true:false):Boolean Values
                                 // 2. Both functions takes call back function. // condition inside function.

let arr = [1,2,3,4,5];

let value1 = arr.some(element => element>2);               // => call back function. 
let value2 = arr.every(element => element>2);

console.log(value1, value2);     // true false
