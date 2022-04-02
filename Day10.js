// this : this refers to the object from where the function is called.      // defination of "this" keyword

// value of "this" is determined at run-time.

var a = 10;
console.log(a)                 // 10
console.log(window.a)          // 10



function sayHi() {
    console.log(this)
}

sayHi()     // window.sayHi() or sayHi()   // global object or window object     // Bcoz function is part of Global   // we are invoke the function inside window object


let sayHiArrow = () => {
    console.log(this)
}

sayHiArrow()                    // global object or window object    // arrow function refer window object    


let adminS = {
    name: "Rahul",
    sayHiObject() {
        console.log(this) 
    }
}

adminS.sayHiObject()             // name: 'Rahul', sayHiObject: ƒ         // here we get adminS object // Bcoz sayHiObject() calles from adminS Object.



// -----------------------call, apply, and bind methods

let use = {
    name : "Harry",
    sayHi() {
        console.log(this.name)
    }
}

use.sayHi()                // Harry


// -----------Q : Here "this.name" refer to Prateek not Harry.
let user = {
    name : "Harry",
    sayHi() {
        console.log(this.name)
    }
}


let admin = {
    name : "Prateek"
}

// console.log(user.sayHi)                // function defination

user.sayHi.call(admin)        // Prateek

// call is rebunding the objects.   // what ever we give argument "this" is refer that object value only    // it is used for function only


// -----------

let user1 = {
    name1 : "Harry",
    sayHi() {
        console.log(this.name1)
    }
}

function hello() {
    console.log('hello', this.name1)
}

let admin1 = {
    name1 : "Prateek"
}

hello()                 // hello undefined

hello.call(admin1)     // hello Prateek                     // we calling hello function from admin1 object

hello.call(user1)      // hello Harry                       // we calling hello function  from user1 object


// call and apply methos are similar.    

hello.apply(admin1)     // hello Prateek

hello.apply(user1)       // hello Harry


// ----------------- difference between call n apply
let ad = {
    name : 'John'
}

function hi(a, b) {                           
    console.log("hi", this.name)
    console.log(a, b)
    console.log('------------------')
}

hi.call(ad, 1, 2)              // extra parametr that hi function take goes into the argument of call function.                             
// hi John
// 1 2
// -------------------

hi.apply(ad, [3, 4])
// hi John
// 3 4
// -------------------


// What does bind method do ?
// bind : bind doesnt execute directly function.
// it return we a function with the new value of this

function helloo() {
    console.log("Hello", this.name)                     // Hello Peter     
}

let users = {
    name : "Peter"
}

let newHello = helloo.bind(users)
newHello()                                 


// another way use bind method :       hellooo.bind(userss)()

function hellooo(a, b) {
    console.log("Helloo", this.name)                     // Helloo Peter     
    console.log(a, b)                               // 1, 2
}

let userss = {
    name : "Peter"
}

hellooo.bind(userss)(1, 2)                                          


// ---------------Que. :
var message = 'Hello Earth'

const obj = {
    message : 'Hello, World'
}

function print() {
    console.log(this.message)
}

print()                                 // Hello Earth  // window object
print.call(obj)                         // Hello, World
print.apply(obj)                        // Hello, World
print.bind(obj)()                       // Hello, World



// ----------------Map and Set

// Map is the collection of keyed data items., just like an object. 
// The main difference between Map and Object is that Inside Map allows key of any type.

// we use "new Map()" function to create a Map

let myMap = new Map()

myMap.set(1, 'num1')                // numeric key
myMap.set('1', 'str1')              // string key
myMap.set(true, 'bool1')            // boolean key

console.log(myMap)                  // Map(3) {1 => 'num1', '1' => 'str1', true => 'bool1'}

console.log(myMap.get(1))          // num1
console.log(myMap.get('1'))        // str1

console.log(myMap.size)            // 3              // for size of given Map.


// delete method  : it delete the perticular Properties.

myMap.delete('1')
console.log(myMap)                // Map(2) {1 => 'num1', true => 'bool1'}


// clear method    :  it clear everything inside Map. 

myMap.clear()
console.log(myMap)               // Map(0) {size: 0}


// All these method are CHAINABLE method  : Means we can use that One after the Other.

myMap.set('1', 'str1').set(1, 'num1').set(true, 'bool1')

console.log(myMap)                                         // Map(3) {1 => 'num1', '1' => 'str1', true => 'bool1'}


myMap.set('1', 'str1').set(1, 'num1').set(true, 'bool1').set('2', 'str2').set(7, 'dhoni').delete('1')

console.log(myMap)                      // Map(4) {1 => 'num1', true => 'bool1', '2' => 'str2', 7 => 'dhoni'}


// looping inside Map

let fruitMap = new Map([
    ['banana', 40],
    ['kiwi', 150],
    ['apple', 60]
])

// to iterate all these value we use "for of" loop

for (let item of fruitMap) {
    console.log(item)
    console.log('Key is', item[0], '&', 'Value is', item[1])           
}

// ['banana', 40] 
// Key is banana & Value is 40
// ['kiwi', 150]
// Key is kiwi & Value is 150
// ['apple', 60]
// Key is kiwi & Value is 60


// One more Method : we can access

console.log(fruitMap.values())             // MapIterator {40, 150, 60}   // here we get Map iterator values.

console.log(fruitMap.keys())               // MapIterator {'banana', 'kiwi', 'apple'}


let valueArray = Array.from(fruitMap.values())         // from this iterator make an Array
let keyArray = Array.from(fruitMap.keys())

console.log(valueArray)     // (3) [40, 150, 60]
console.log(keyArray)       // (3) ['banana', 'kiwi', 'apple']


// using "for of" loop  

for (let item of fruitMap.keys()) {
    console.log(item)                        // banana kiwi apple
}    

for (let item of fruitMap.values()) {
    console.log(item)                        // 40 150 60
}    


// instead of using  "for of"  we use  "forEach"  as well.
// "forEach"  : In case of Map 1st parameter is 'value' n 2nd parameter is 'key'.

fruitMap.forEach((value, key) => {
    console.log(value, key)                      
})

// 40 'banana'
// 150 'kiwi'
// 60 'apple'

