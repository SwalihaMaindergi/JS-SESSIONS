// normal function

function f1(){
    console.log("normal function")
}
f1();                                            // normal function


f1();                                           // normal function
function f1(){
    console.log("normal function")
}


var f2 = function (){
    console.log("anonymous function")
}
f2();                                           // anonymous function

// console.log(f2)       // function defination 


// f2();                                             // TypeError : f2 is not a function
// var f2 = function (){
//     console.log("anonymous function")
// }              


var f3 = () =>{
    console.log("arrow function")
}
f3();                                             // arrow function


// arrow function and anonymous functions ar NOT hoisted.


// Que. : convert this to an arrow function

function add(a, b) {
    return a + b
}

// ans :
// 1.
var add = (a,b) => {
    return a + b
}
console.log(5,4);

// 2.
var add = (a, b) => a + b            // implicit return; ONLY when the single statement inside the function is return statement.

console.log(add(4, 5))


// using 1 parameter :
var multiplyBy2 = n => n*2           // In case of one parameter inside function, the paranthesis() can also be removed.

console.log(multiplyBy2(5));



// -----------------shadowing-----------------------

var x = 10

function a(){
    console.log(x)
}

a()                        //  10      


var x = 10

function a(){
    var x = 40;
    console.log(x);
}

a()                          // 40



var x = 10

function a() {
    var x = 20
    function b() {
        var x = 30
        console.log(x, 'b')     //30
    }
    b()
    console.log(x, 'a')         //20
}
console.log(x, 'global')        //10
a()

// 10 'global
// 30 'b'
// 20 'a'




// -----------------------Arrays-------------------------

var arr = [1, 2, 3, 4, 5]

console.log(arr)


var arr = [1, 2, "hi", "bye", [4, 5, 6]]

console.log(arr[4][1])                          // 5

console.log(arr[4].length)                      // 4



// -------------------------array methods-------------------------------


// push - adds elements to the END of the array; secondly, it returns the new length of the array

let arr = [1, 2, 3, 4]
console.log(arr)

let result = arr.push(5, 6, 7, 8)
arr.push([5, 6, 7])

console.log(arr)
console.log(result)                  // length of new array



// pop - deletes the last element from the array; secondly, it returns the popped element.

let arr = [1, 2, 3, 4]

console.log(arr, 'before pop')

let result = arr.pop()

console.log(arr, 'after pop')
console.log(result, 'result')



let fruits = ['apple', 'banana', 'orange', 'kiwi']

fruits.pop();
console.log(fruits)                         // apple, banana, orange

console.log(fruits.pop())                   // orange
console.log(fruits)                         // apple, banana

console.log(fruits.push('strawberry'))      // 3 

console.log(fruits.push('melon'))           // 4  

console.log(fruits)                         // apple, banana, strawberry, melon 


console.log(fruits.shift())                 // apple
console.log(fruits)                         // banana, orange, kiwi 

let result = fruits.unshift("first")

console.log(friuts)                         // first, apple, banana, orange, kiwi
console.log(result)                         // 4




// --------------indexOf : its returns the first index at which a given element occurs.

let fruits = ['apple', 'banana', 'orange', 'kiwi', "banana", "jackfruit", "cheeku", "banana"]

let result = fruits.indexOf('banana')
console.log(result)                                // 1

let result1 = fruits.indexOf('banana', 4)
console.log(result1)                               // 4

let result2 = fruits.indexOf('banana', 5)
console.log(result2)                               // 7



// ------------------------SLICE-------------------------

let fruits = ['apple', 'banana', 'orange', 'kiwi', "melon", "tomato", "grapes"]

let result = fruits.slice(1,5)       // ending index is NOT included                // apple, banana, orange, kiwi, melon, tomato, grapes
console.log(fruits, 'FRUITS')
console.log(result, 'sliced fruits in result')                                      // banana, orange, kiwi, melon

let result1 = fruits.slice(4)  
console.log(result1, 'sliced fruits in result')                                     // melon, tomato, grapes

let result2 = fruits.slice(-4)  
console.log(result2, 'sliced fruits in result')                                     // kiwi, melon, tomato, grapes   



let fruits = ['apple', 'banana', 'orange', 'kiwi', 'melon', 'tomato', 'grapes']

console.log(fruits.push('strawberry', 'papaya', 'pear'))                // 7+3 = 10

console.log(fruits.pop())                                               // pear

console.log(fruits.shift())                                             // apple

console.log(fruits.unshift('jackfruit'))                                // 9

let result = fruits.slice(0, 3)
console.log(result)                                                     // jackfruits, banana, orange, 
