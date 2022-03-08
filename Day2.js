// Switch Case

// 1st type of scenario
// we will compare the value of the variable directly

// break;   : break the flow of case 

// let a = 15;

// switch (a)
// {
//     case 10:
//         console.log("Value is 10");
//         break;  
    
//     case 15:
//         console.log("Value is 15");
//         break;
        
//     default:
//         console.log("Default Case");
//         break;
// }


// let a = 12;

// switch (true)
// {
//     case a>0:
//         console.log("Positive");
//         break; 
    
//     case a<0:
//         console.log("Negative");
//         break;
        
//     default:
//         console.log("Zero");
//         break;
// } 


// let x = 3;
// let y = 11;

// switch(true)
// {
//     case (x<y):
//         console.log("3 is smaller than 11");
//         break;
          
//     case (x>y):
//         console.log("3 is greater than 11");
//         break;
          
//     case (x=y):
//         console.log("3 is equal to 11");
//         break;
          
//     default: 
//         console.log("Invalid Input");
//         break;
// }



// for loop : 
// 3 values : // initialization
              // condition
              // increment / decrement


// for (initialization ; condition ; increment/decrement){
//     Block of Code 
// }

for( let i = 1; i<= 10; i++){
   console.log("Value of i is",i);
}


// Que :
// Can we do declaration Outside ?
// Yes..We can..But we have to write semicol. (;) inside the bracket... 
// let i = 1;

// for( ; i<= 10; i++)
// {
//     console.log("Value of i is",i);
//  }


// Que :
// can we do increment/decrement Outside ?
// Yes...we can...
// let i = 1;

// for( ; i<= 10; )
// {
//    console.log("Value of i is",i);
//    i++;
// }
                


// While loop :

// Below are two condition to avoid Infinity loop
// 1. We must write the condition properly
// 2. At the end of the loop you should have either increment or decrement statement

// condition write coorect inside while loop otherwise its go to the Infinity loop

let i = 0;

while (i<10)
{
    console.log("Value of i is", i);
    i++;
}
console.log("Outside loop");



// do-while loop

// let i = 0;
 
// do{
//     console.log("Value of i is :", i);     // 1st it print the Value of i is : 0
    // i++;                                   // Increment the Value of i : 0 to 1 
// }while(i>10)                               // then it check condition (1>10) ; Conditon false ; not check other conditions or not go to the loop again. 
// Output : Value of i is : 0                 // Output remain same. that's why the Value of i is : 0.


// let i = 0;
 
do{
    console.log("Value of i is :", i);
    i++;                                  // Remember this is important, else we will be in infinity loop.
}while(i<10)
// Output : Value of i is : 0
//                          .
//                          .
//          Value of i is : 9


// nested loops

// for(let i=0; i<5; i++)
// {
//     for(let j=0; j<2; j++)
//     {
//         console.log("Value of i is :", i, "and j is :", j);
//     }
// }

// For one itreration of i, j will run __ times

// ......................................................................................................................



// Fuctions : 
// Use of Function : when we having some statement that we want to execute multiple times then we use function.

// let a = 10;
// let b = 20;
// let addition = a+b;
// console.log(addition);


// *Basic function*   ::::::::::   1st type

let a = 2;                                                                                                             
let b = 3;                                                   

function add() {                       // fuction defination      
    console.log(a+b);     
}     

// function execution     
add();


// we use any function name...
// i.e : add , display..etc

// let a = 2;
// let b = 3;
// function display(){
//     console.log(a+b);
// }
// display();




// function with parameters   :   2nd type

// Javascript is having concept of hosting in js, 
// its says that when we use something like we want use variable we declare and initial it first then only use it.
// in the same way in case of functions also if want to execute some function then declare/define the function first and then only use it.


// if we try to execute function before it declare or define it work in the function case because : function get the proper value assign at the time of memory allocation
// at the memory allocation function get proper value assign but in case of variable they assign with the value of undefined... 
// ..that is why we can't acess the variable before there initialization but we can access the function before declaration/defination
// Example Below :   But this is not correct way..don't use it.

// addTwoNumbers(10,20);
// addTwoNumbers(2,5);
// addTwoNumbers(11,9);
// addTwoNumbers(7,8);
// addTwoNumbers(4,11);

// function addTwoNumbers(a,b){
//     console.log(a+b);
// }


// This is correct way to use functions
// *function with parameters*  :::::::::::::::::::  2nd type

function addTwoNumbers(a,b){                                         // a , b is known as Parameter.  
    console.log(a+b);                
}

addTwoNumbers(10,20);                                               // 10 , 20 is known as Argument. 
addTwoNumbers(2,5);
addTwoNumbers(11,9);
addTwoNumbers(7,8);
addTwoNumbers(4,11);
addTwoNumbers(13,7);
addTwoNumbers(33,2);

// Argument  : var at the time of Execution  : The values which we pass to a variable.               i.e : 10,20 and 2,5 and 11,9  ...etc
// Parameter : var at the time of defination : The value which function uses to do the operation.    i.e : a and b 




// *function with return statement*  ::::::::::::::::::  3rd type

// function addNumbers(x,y){
//     return x+y;                  // Any code written after return is not accessible. 
// }

// const result = addNumbers(12,12);
// console.log(result);


function sw(x,y)
{
    return x-y;
}
const re = sw(20,9);
console.log(re);




// functions which exist only in JS 

// const add = function(){
//     console.log("value");
// }
// add();


let a = 5;
let b = 2;

const add = function(){ 
    console.log(a+b);
}
add();

const sub = function(){ 
    console.log(a-b);
}
sub();

const mul = function(){ 
    console.log(a*b);
}
mul();

const div = function(){ 
    console.log(a/b);
}
div();                              

const mod = function(){ 
    console.log(a%b);
}
mod();                             




// arrow function

const div = (m,n) => {
    return m/n;
}
console.log(div (30,10));
