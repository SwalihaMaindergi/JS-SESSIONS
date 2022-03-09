// var a = 100;

// console.log(a);  // 100



// var a;

// console.log(a);     // undefined

// a = 10;

// console.log(a)       // 10

// ..........................................................................

// functions

// functions are reusable blocks of code.


// function abc(){                  // function declaration
//     // code block for the function 
//     console.log("Inside abc")
// }

// to run the block of code inside the function, we need to execute(call) the function
// abc();


// function add(a,b){   // 4, 5 // parameters
//     console.log(a+b);
// }
// add(4, 5);           // arguments


// function add(a, b){
//     return a + b;
//     console.log("hi there")
// }
// var result = add(4, 6);
// console.log(result)



// function add (a,b){
//     return a + b;
// }
// console.log(add(4, 1))



// function add(a, b){
//     console.log(a)
//     debbuger;                // stops the code at this point of execution
//     console.log(a+b)
// }

// // console.log(add)          // whole code of function is there.
// add(4, 5)



// function add(a, b){
//     return a + b;
// }

// var result = add(4, 3)
// console.log(result)



// scope is where that variable is present.
// Every Execution Context there is "Referance to the parents lexical scope" present

// Global Execution Context   : Referance is Null.
// Function Execution Context : Referance to the parents lexical scope.

// Referance to the parents lexical scope : lexical scope means where variable phisically it present

// lexical scope or lexical environment

// function abc(){          // scope of a, b is abc function
//     var a = 10
//     var b = 20
//     console.log(a, b, "inside abc")
//     console.log(x)
// }

// var x = 30               // scope of x is global
// abc()
// console.log(a, b, "inside global")    // o/p : Reference Error : because this present in global scope.



var x = 10

function a() {
    var y = 20
    function b() {
        console.log(x, y)
    }
    b()
}
a()

