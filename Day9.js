// 'this' Keyword

// a function bound to an object is called a Method.

let user = {
    age : 30,
    name : 'Rahul',
    sayHi : function () {                     // Method
        console.log('hi!')
    }
}

user.sayHi()                                               // hi!

console.log(user)           // age: 30, name: 'Rahul', sayHi: ƒ / f : functin defination


let user1 = {
    age : 30,
    firstName : 'Rahul',
    sayHi : function () {
        console.log('hi!',user1.firstName)
    }
}

user1.sayHi()                                      // hi! Rahul


let user2 = {
    age : 30,
    firstName : 'Rahul',
    sayHi : function () {
        console.log('hi!',user2.firstName)
    }
}

let admin = user2

user2.sayHi()                                                  // hi! Rahul
admin.sayHi()                                                  // hi! Rahul


// let use = {
//     age : 30,
//     firstName : 'Kunal',
//     sayHi : function () {
//         console.log('hi!',use.firstName)
//     }
// }

// let ad = use
// use = null

// // console.log(ad.sayHi)                      // here we get function defination.
// ad.sayHi()                     // getting error here, because user value is null. (Cannot read properties of null (reading 'firstName')) // so we use this keyword



// for above reason JavaScript add "this" keyword         // data is present in object but we cant access them, using variable name

let use1 = {
    age : 30,
    firstName : 'Rahul',
    sayHi : function () {
        console.log('hi!',this.firstName)               // inside function we access this 
    }
}

let ad1 = use1
use1 = null

ad1.sayHi()                                      // hi! Rahul  // we get o/p



let us = {
    firstName : 'Rahul',
    score : 0,
    incrementScore() {
        this.score++                // incre. this score
    }
}

console.log(us.score)                               // 0         // here just we call function



let us1 = {
    firstName : 'Rahul',
    score : 0,
    incrementScore() {
        this.score++
    }
}

us1.incrementScore() 
us1.incrementScore()
us1.incrementScore()

console.log(us1.score)                               // 3      



function sayHi() {
    console.log(this.firstName)         // Peter   // Harry
}
let users = {
    firstName : 'Peter'
}
let admins = {
    firstName : 'Harry'
}

users.funcUsers = sayHi
admins.funcAdmins = sayHi

users.funcUsers()                                      
admins.funcAdmins()                                 

// value of 'this' is defined during runtime and it refers to the object from where it was called.




// Inside normal function, the  value of 'this' is global object. // refer to global Object

function say() {
    console.log(this)             // window: Window, self: Window, document: document, name: '', location: Location, …
}

say()



function sayHii() {
    console.log(this, 'VALUE OF this KEYWORD')
}
let userx = {
    firstName : 'John',
    objectTypes : 'UESR'
}
let adminx = {
    firstName : 'Harry',
    objectTypes : 'ADMIN'
}

userx.funcUser = sayHii
adminx.funcAdmin = sayHii

userx.funcUser()                                      // {firstName: 'Rahul', objectTypes: 'UESR', funcUser: ƒ} 'VALUE OS this KEYWORD'
adminx.funcAdmin()                                    // {firstName: 'Harry', objectTypes: 'ADMIN', funcUser: ƒ} 'VALUE OS this KEYWORD'


var Name = 'Garry'

let ur = {
    Name : 'Carry',
    sayHi : function () {
        console.log(this.Name)          // carry    // sayHi is normal function method
    }
}

ur.sayHi()


var firstName = 'Garry'

let u2 = {
    firstName : 'Carry',
    sayHi : () => {
        console.log(this.firstName)       // Garry   // "this" inside an arrow function refers to the WINDOW/GLOBAL Object  // It is behaviour of arrow function.
    }
}

u2.sayHi()



// Que :

let ladder = {
    step : 0,

    up() {
        this.step++
    },

    down() {
        this.step--
    },

    showstep() {
        console.log(this.step)                  // -1    2
    },
}

ladder.up()         //   1
ladder.up()         //   2
ladder.down()       //   1
ladder.down()       //   0
ladder.down()       //   -1
ladder.showstep()             //   -1
ladder.up()         //   0
ladder.up()         //   1
ladder.up()         //   2
ladder.showstep()             //   2


// H.W
let ladder1 = {
    step : 0,

    up() {
        console.log(this.step++)
    },

    down() {
        console.log(this.step--)
    },

    showstep() {
        console.log(this.step)                  
    },
}

ladder1.up()                 // 0
ladder1.up()                 // 1             
ladder1.showstep()           // 2        // Beacuse of up() (step++ : post increment)       




const obj = {
    message : 'Hello, World',

    getMessage() {
        const message = 'Hello, Earth'
        return this.message                          // "this" refer to the object.
    }
}

let result = obj.getMessage()
console.log(result)                                    // Hello, World



const obj1 = {
    message : 'Hello, World',

    getMessage() {
        const message = 'Hello, Earth'
        return message
    }
}

let result1 = obj1.getMessage()
console.log(result1)                                    // Hello, Earth



// var who = 'World'
let obj2 = {
    who : 'World',

    greet : function()
    {
        console.log(`Hello, ${this.who}`)              // Hello, World
    },

    farewell : () => {
        console.log(`Goodbye, ${this.who}`)           // Goodbye, undefined
    }
}

obj2.greet()
obj2.farewell()


var who = 'World'



let lad = {
    step: 0,
    up() {
        this.step++
        console.log(this.step++)
    }
    // down() {
    //     this.step--
    //     console.log('decremented')
    // },
    // showStep() {
    //     console.log(this.step)
    // }
}

lad.up()
lad.up()
lad.up()
