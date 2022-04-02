// strings
// primitive data type
// used to store textual data


// way of writing strings in js

let single = 'single-quote'
let double = "double-quote"

let backticks = `backtick-string`


let amount = 100

let billMessage = `Please pay Rs ${amount} here`

console.log(billMessage)                               // Please pay Rs 100 here



let amount1 = `One-hundred`

let billMessages = `Please pay Rs ${amount1} here`

console.log(billMessages)                               // Please pay Rs One-hundred here



let guestLists = `Guests :
Rahul
Harry
John`
console.log(guestLists)
// Guests :                                 // o/p
// Rahul
// Harry
// John



let strz = "Hello-\
I'm continuing in line2-\
this is line3"
console.log(strz)



let str1 = 'Hello\n World'
let str2 =`Hello
World`
console.log(str1 === str2)


let str3 ="Hello how're you doing?"
console.log(str3)


let str4 = `it\'s, it's, "color"`
console.log(str4)                                 // it's, it's, "color"



// string length
let strings = "hello"
console.log(strings)                                // 5



// Strings are IMMUTABLE in JS.
let strs = 'abc'

strs[0] = 'D'

console.log(strs)                                  // abc



// let str = 'abc'
// str = 'apple'

// str[0] = 'D'

// console.log(str)                                     // apple


// let str = 'abc'
// str = 'apple'

// str[0] = 'D'

// console.log(str[0])                                   // a



// concatination of Strings, [+, concat]

let name1 = 'Vijay Pratap Singh'
let age =  22

let statement = name1 + " is " + age + " Years Old "

console.log(statement)                                // Vijay Pratap Singh is 22 Years Old 

let newstr = name1.concat(" ",age)

console.log(newstr)                                  // Vijay Pratap Singh 22



// String Methods :

// ----------------indexOf
// str = 'Widget with id'

// console.log(str.indexOf('Widget'))                    // 0

// console.log(str.indexOf('with'))                       // 7

// console.log(str.indexOf('id'))                          // 1

// console.log(str.indexOf('id', 1))                       // 12         

// console.log(str.indexOf('widget'))                    // -1                // case sensitive : w in lowercase



// ---------------------includes() - returns a boolean value
let z = "Widget"
console.log(z.includes("G"))                                       // false

console.log(z.includes("W"))                                       // true

console.log(z.includes("D"))                                       // false



// ---------------slice()
// let str = "stringify"

// console.log(str.slice(0, 5))                                     // strin

// console.log(str.slice(0, 1))                                     // s

// console.log(str.slice(2))                                        // ringify

// console.log(str.slice(-4, -1))                                   // gif



// ---------------------substring()  -  does not work with negative indices
// let str = 'stringify'

// console.log(str.substring(2, 6))                                  // ring



// ------------splits - this method converts your string to an array

// let greeting = 'Hi how are you'

// let resultArr = greeting.split(' ')
// console.log(resultArr)                                              // 4 ['Hi', 'how', 'are', 'you']

// let resultAr = greeting.split('o')
// console.log(resultAr)                                              // 3 ['Hi h', 'w are y', 'u']




let t = "Vijay Pratap Singh"

let r = t.split('')
console.log(r)



// ---------------Reverse

// let arr = [1, 2, 3, 4]
// console.log(arr.reverse())                 // 4, 3, 2, 1


// let greeting = "Hi how are you"

// console.log(greeting.split(' ').reverse().join(' '))                 // you are how Hi


// let str = 'hello'
// let revStr = ''

// for(let i=str.length-1; i>=0; i--){
//     revStr += str[i]
// }

// console.log(revStr)                                           // olleh




// ------------replace(), replaceAll()

// const temp = 'John is a good guy. John is working as a developer'

// console.log(temp.replace('John', 'Rahul'))                         // Rahul is a good guy. John is working as a developer

// console.log(temp.replaceAll('John', 'Rahul'))                      // Rahul is a good guy. Rahuls is working as a developer



// ----------trim()

let st ='                 Rahul Sharma                '

console.log(st.trim())                                               // Rahul Sharma


let st1 ='             Rahul-----  *****Sharma             '

console.log(st1.trim())                                                  // Rahul-----  *****Sharma               



// toUpperCase(), toLowerCase

let str11 = 'hello'
console.log(str11.toUpperCase())            // HELLO


let str12 = 'HELLO'
console.log(str12.toLowerCase())           // hello
