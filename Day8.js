// Object

let user = {
    name : 'Rahul',
    age : 25,
    isAdmin : false
}

console.log(user.name)                         // Rahul
console.log(user.age)                          // 25


// other way to access object value : using [' '] square bracket notation.

console.log(user['name'])                       // Rahul
console.log(user['age'])                        // 25



// we have 2 methods to  creating/declaring  Object. 

//  1. Object literal syntax.

let user1 = {}
user1.name = 'Harry' 

console.log(user1)                                // name: 'Harry'


// using [' '] square bracket
let user2 = {}
user2['name'] = 'Harry'

console.log(user2)                               // name: 'Harry'



// 2. Object Constructor syntax.

let user3 = new Object()
user3.name = 'Kunal'

console.log(user3)                               // name: 'Kunal'



// we can delete some property in object also, using delete.

let users = new Object()
users.name = 'Kunal'
users.age = 25

delete users.name

console.log(users)                                 // age: 25



// if we have property key name which have space inbetween them, : only way to access them throught [' '] square bracket.

let use = {
    'like birds' : true
}

console.log(use['like birds'])                      // true



let fruit = 'apple'

let obj = {
    [fruit] : true                    // inside an object when we write [] square bracket, we can pass variable over here, and then that variable value become a key over here.  
}

console.log(obj)                 // apple: true    


let n = 23           

let obje = {
    [n] : true
}

console.log(obje)                   // 23 : true       // number will be automatically convert into string and it put into at key name


let m = [1, 2, 3, 4]

let objec = {
    [m.toString()] : true
}

console.log(objec)                    // 1,2,3,4: true   // array also convert into string and it put into at key name



// Que.

let fruits = 'apple'

let object1 = {
    [fruits + 'Computers']: true     //computed properties
}

console.log(object1)                       // appleComputers: true

console.log(object1.name)                 // undefined   // Because name key not exist inside Object



let ad = {
    name : 'Rahul',
    age : 24
}

console.log("age" in ad)   // true         // Boolean value  // key name is exist or not check.

// if(obj[key] === undefined )
// {
//     console.log(true)
// }



// looping in Object
// for in loop

let u1 = {
    name : 'Rahul',
    age : 24,
    isAdmin : true
}

for (let key in u1) 
{
    console.log(key)                  // Print keys 
}
// Output : name
        //  age
        //  isAdmin


let u = {
    name : 'Rahul',
    age : 24,
    isAdmin : true
}

for (let key in u) 
{
    console.log(key, u[key])             // Print keys and values
}
// Output : name Rahul
         // age 24
         // isAdmin true



// sum of salaries : write for loop : 
let salaries = {
    John: 100,
    Ann: 160,
    Peter: 130
}

let sum = 0

for (let item in salaries) 
{
   sum += salaries[item]         // sum = sum + salaries[item]      
}

console.log(sum)                                       // 390



// Multiply ONLY the numeric values with 2
let menu = {
    width: 200,
    height: 300,
    title: 'My menu'
}

for (let key in menu) {
    if (typeof menu[key] === 'number') {
        menu[key] = menu[key] * 2
    }
}

console.log(menu)                                         // width: 400, height: 600, title: 'My menu'



// -------Object referencing and copying

let msg = "hello"
phras = msg

console.log(msg)                              // hello
console.log(phras)                            // hello


let message = "hello"
phrase = message + "world"

console.log(message)                                    // hello

console.log(phrase)                                     // helloworld


// Now, considering an Object

let user7 = {
    name: 'Rahul'
}

admin7 = user7
// console.log(admin7 === user7)            // true               // Because they are same Object

console.log(user7)                                    // Rahul
console.log(admin7)                                   // Rahul

admin7.name = 'Pooja'

console.log(user7, 'user7')                          // Pooja          
console.log(admin7, 'admin7')                        // Pooja


// suppose
let uses = {}
let admins = {}

console.log(uses === admins)               // false   // Beacuse they are indepent Objects // because they both place in differnt memory location



let user5 = { name: 'Rahul' }
let admin5 = { name: 'Aarti' }

admin5.name = 'Shruti'

console.log(admin5 === user5)            // false

console.log(user5)           // Rahul
console.log(admin5)         // Shruti



// if we make something and then we chane so orignal object also change, if we want to orignal stay same

// let u3 = {
//     name : 'Rahul',
//     age : 23,
//     isHappy : true
// }

// let duplicate = {}


// for (let key in u3) {
//     duplicate[key] = u3[key]
// }
// duplicate.isHappy = false

// console.log(u3)                         // name: 'Rahul', age: 23, isHappy: true

// console.log(duplicate)                 // name: 'Rahul', age: 23, isHappy: false



// One other method :
let u3 = {
    name : 'Rahul',
    age : 23,
    isHappy : true
}

let duplicate = {}

Object.assign(duplicate, u3)
duplicate.isHappy = false                  // to show that duplicate is independent

console.log(u3)                  // name: 'Rahul', age: 23, isHappy: true

console.log(duplicate)           // name: 'Rahul', age: 23, isHappy: false



// another way :
let u4 = {
    name : 'Rahul',
    age : 23,
    isHappy : true
}

let duplicat = {}

Object.assign(duplicat, u4)

// one more syntax we write :

let clone = Object.assign({}, u4)
clone.isHappy = false                   //to show that duplicate is independent

console.log(u4)            // name: 'Rahul', age: 23, isHappy: true

console.log(clone)         // name: 'Rahul', age: 23, isHappy: true




// SPREAD OPERATOR (...)

let use8 = {
    name: 'rahul',
    age: 23
}

let clone1 = { ...use8, lastName: 'Sharma' }

console.log(use8)                                     // name: 'rahul', age: 23

console.log(clone1)                                   // name: 'rahul', age: 23, lastName: 'Sharma'


// Spread Operator also use in case of Arrays

let arr1 = [0, 1, 2]
let arr2 = [4, 5, 6]

// make arr3 which combines all values from arr1 and arr2    // merage arr1 and arr2

let arr3 = [...arr1, ...arr2]

console.log(arr3)                                      // 6 [0, 1, 2, 4, 5, 6]



let obj1 = { name: 'Rahul', x: 42 }
let obj2 = { name: 'Shyam', y: 13 }

let obj3 = { ...obj1, ...obj2 }                 // we use curly bracket // Bcoz, its Object.

console.log(obj3)                  // name: 'Shyam', x: 42, y: 13    // In an Object key doesnt repeate // So whatever values we have the newest/latest value replace the key

// Rahul is replace by Shyam  
