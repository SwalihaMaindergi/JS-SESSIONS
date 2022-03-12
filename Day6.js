// Array Methods :

// ----------------------includes()  : its return boolean values (true false)

let array = [1, 2, 3, 4, 5]
console.log(array.includes(2))                                            // true




// ----------------------lastIndexOf  : return last index at which given ele. can formed.

let fruit = ['banana', 'orange', 'apple', 'banana', 'kiwi', 'banana']
console.log(fruit.lastIndexOf("banana"))                                  // 5




// ---------------------------findIndex :  

// returns the index of the first element in the array that satisfies the provided testing function.
// whenever we provide give a function as an argument to a function. is known as call back function.

// let arr = []
// function cb(){               // call back function
//     // condition
// }
// let result = arr.findIndex(cb)


let arr1 = [1, 2, 3, 4, 5, 6, 7]

function greaterThan4 (element) {           // return boolean values
    return element > 4
}

let res1 = arr1.findIndex(greaterThan4)
console.log(res1)                                                     //  4


let arr2 =[4, 5, 7, 2, 9]

function lessThan3 (ele) {
    return ele < 3
}

let res2 = arr2.findIndex(lessThan3)
console.log(res2)                                                           // 3




// ---------------------CONCAT  : It is used to merge two or more arrays.

let array1 = ["a", "b", "c"]

let array2 = ["d", "e",]

let array3 = array1.concat(array2)

console.log(array3)                                                   // a, b, c, d, e




// -------------------toString

let arr = [1, 2, 'a', '1a', 11.11];

let result = arr.toString()

console.log(result)                                                 // 1,2,a,1a,11.11




// --------------JOIN

let fruits = ["apple", "banana", "orange"]

let result1 = fruits.join("-")
console.log(result1)                                // apple-banana-orange


let frui = ["apple", "banana", "orange"]

let result2 = fruits.join("")
console.log(result2)                               // applebananaorange


let fru = ["apple", "banana", "orange"]

let result3 = fruits.join(" ")
console.log(result3)                                // apple banana orange


let fr = ["apple", "banana", "orange"]

let result4 = fruits.join()
console.log(result4)                                 // apple,banana,orange 




// --------------------SOME  : return true when atleast one of the ele. in the array statisfies the given condition. 

// let arr = [1, 2, 3, 4, 5]

// function isEven (element) { //if the element is even or not    (if..else..)
//     if(element % 2 === 0 ) {
//         return true
//     }
//     return false
// }

// element % 2 === 0  -----------> true false


let ar = [1, 2, 3, 4, 5]

function isEven(element) {                   // testing condition        
    return element % 2 === 0
}

let result5 = ar.some(isEven)
console.log(result5)                            // true


let ar1 = [1, 2, 3, 4, 5]

let result6 = ar1.some (function (element){
    return element % 2 === 0
})
console.log(result6)                               // true


//  Using arrow function :
let ar2 = [1, 2, 3, 4, 5]

let result7 = ar2.some(ele => ele % 2 === 0)
console.log(result7)                                // true




//-----------------EVERY  : returns true if EVERY element of the array satisfies the given condition.

let ar3 = [2, 4, 6, 8]

let results = ar3.every(item => item % 2 === 0)
console.log(results)                                  // true


let ar4 = [1, 2, 3, 4, 5, 6]

console.log(ar4.some(y => y < 2))                    //  true
console.log(ar4.every(y => y > 6))                   // false


let ar5 = [1, 2, 3, 4, 5]

console.log(ar5.some(y => y < 2))                     //  true
console.log(ar5.every(y => y < 6))                    // true


let fruitss = ['apple', 'orange', 'banana', 'pear', 'chiku', 'kiwi']

console.log(fruitss.some(item => item.length < 5))                            // true     




// *stringlength*

let str = "string"
console.log(str.length)          // 6


let str1 = "string "
console.log(str1.length)          // 7

let str3 = ["apple", "orange", "a", "sm"]
console.log(str3.length)         // 4         


// -------------------------FILTER - return a new array with the elements that satisfy the given condition.

let a = [1, 2, 3, 4, 5]

function isGreaterThan3(element) {
    return element > 3
}

let resultArray = a.filter(isGreaterThan3)

console.log(resultArray)                                    // 4, 5


// Using arrow function :
let a1 = [1, 2, 3, 4, 5, 6, 2, 3]

let resultArr = a1.filter(element => element > 3)

console.log(resultArr)                                    // 4, 5


// filter out the odd element given array.       // using array.
let a2 = [1, 2, 3, 4, 5]

let OddElement = a2.filter(element => element % 2 != 0)

console.log(OddElement)                                     // 1, 3, 5




// ------------Map : returns a new array populated with the results of the callback function.

// -------------normal way------------

// let arr = [1, 2, 3, 4, 5]
// let newArr = [];               // doubled values
// for(let i=0; i<arr.length; i++)                            // for loop
// {
//     newArr.push(arr[i]*2)
// }
// console.log(newArr)                                  // 2, 4, 6, 8, 10



// ------------Using map()------------

let arrr = [1, 3, 4, 5]

function double(item){
    return item*2
}

let newArr = arrr.map(double)

console.log(newArr)                                      // 2, 6, 8, 10


// arrow function

let arrr1 = [3, 4, 5, 6]

let newArrr = arrr1.map(element => element * 2)
console.log(newArrr)                                     // 6, 8, 10, 12



// Que. : How to write same condition for 2 arrays ?
// ans :
let arrr2 = [3, 4, 5, 6]
let arrr3 = [10, 9, 8]

let newArrr2 = arrr2.map(item => item * item)
let newArrr3 = arrr3.map(item => item * item)

console.log(newArrr2, newArrr3)                             // [9, 16, 25, 36]  [100, 81, 64]

// just combine arrays using concat method
let concat = newArrr2.concat(newArrr3)
console.log(concat)                                         // 9, 16, 25, 36, 100, 81, 64 



// Que. : return a new array which adds 5 to each element

let arrayss = [3, 4, 5, 6]

let NewArray = arrayss.map(e => e + 5)
console.log(NewArray)                                         // 8, 9, 10, 11




// ---------------FOREACH  : executes a provided function once for EACH element in the array.

// using for loop
// let arr10 = [1, 2, 3, 4, 5]
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr10[i] * 2)
// }


// forEach

let arr10 = [1, 2, 3]

arr10.forEach(item => {                                                                                                   // 6
    console.log(item * 2)                            
})                                              // 2 4 6                   


// using forEach calculate the sum of elements in array

// let arr = [1, 2, 3, 4, 5]
// ------using for loop----
// let sum = 0
// for (let i = 0; i < arr.length; i++) {
//     sum += arr[i]
// }
// console.log(sum)


let arr11 = [1, 2, 3, 4, 5]

let sum = 0
arr11.forEach(item => {
    sum += item                            // sum+ = sum + item
})
console.log(sum)                          // 15




// ---------------------REDUCES  : return a single value.
// accumulator, current, initial value


let arr7 = [1, 2, 3, 4, 5]

let initialValue = 0
let reduceResult = arr7.reduce(function (accumulator, current){
    accumulator = accumulator + current                   // accumulator += current
    return accumulator
}, initialValue)

console.log(reduceResult)                     // 15



let arrX = [1, 2, 3, 4, 5]

let squareArr = arrX.map(i => i * i)                        // sqauing array

let evenSquares = squareArr.filter(i => i % 2 === 0)        // filtering out even values

let sumOfEvenSquares = evenSquares.reduce((acc, curr) => {  // reduce values
    acc += curr
    return acc
}, 0)

console.log(sumOfEvenSquares)           // 20


// FILTER MAP and REDUCE methods are CHAINABLE. 

let arrY = [1, 2, 3, 4, 5]

let sumOfEvenSquare = arrY.map(item => item * item).filter(item => item % 2 === 0).reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)

console.log(sumOfEvenSquare)



// ---------HOMEWORK----------

let salary = [100, 200, 300, 400, 500, 600]

// filter out salaries greater than 300

// double the filtered salaries

// find out the total salary

let totalsalary = salary.filter(salary => salary > 300).map(salary => salary * 2).reduce((acc, curr) => {
        acc += curr
        return acc
}, 0)
console.log(totalsalary)                                           // 3000



// ----------------------------------------------------------------------------------------------------------------

let Array = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// squaring array                                     // 1st square each n every ele. of given array
// filter out new array only with Odd result. 
// then sum of Squareodd result

let sumOfOddSquares = Array.map(ele => ele * ele).filter(ele => ele % 2 != 0).reduce((acc, curr) => {
    acc += curr
    return acc
}, 0)

console.log(sumOfOddSquares)                                     // 165


