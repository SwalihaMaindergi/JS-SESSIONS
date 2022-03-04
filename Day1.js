// var a;   
// declaring a variable.  or  create variable.
// var a = 10;
// we are initializing the variable with the value of 10.



// Decision Making or If..else

// One Condition 

// if..else
// let a = 10;

// if (a == 10){
//     //success
// } else {
//     //failure
// }


// TWo Conditions

// if - else ladder
// let a = -10;

// if (a < 10){
//     console.log("Negative");
// } else if (a == 0) {
//     console.log("Zero");
// } else {
//     console.log("Positive");
// }


// .........SWITCH CASE.............

// Three or More Conditions :
// let gender = "m";
// switch(gender){
//     case "m":
//         console.log("Male");
//         break;
//     case "m":
//         console.log("female");
//         break; 
//     case "m":
//         console.log("transgender");
//         break;   
// }



// Que :

// Take age as the variable 
// age < 18 = Child
//  age greater than 18 but less than 40 = Adult 
// age is greater than 40 = Old age

// when we are not comapring value directly we use (true) : like inbetween ranges...

// let age = 25 ;

// switch(true){               
//     case age < 18:
//         console.log("Child");
//         break;
//     case 18 < age < 40:
//         console.log("Adult");
//         break; 
//     default:
//         console.log("Old age");
//         break;   
// }




// Que : Week Calender using switch case

// Take variable name as Day , its possible values are  1 2 3 4 5 6 7
// 1 = Monday 
// 2 = Tuesday
// 3 = Wednesday
// 4 = Thursday
// 5 = Friday
// 6 = Saturday
// 7 = Sunday


// let Day = 3;

// switch(Day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break; 
//     case 3:
//         console.log("Wednesday");
//         break;   
//     case 4:
//         console.log("Thursday");
//         break;   
//     case 5:
//         console.log("Friday");
//         break; 
//     case 6:
//         console.log("Saturday");
//         break;
//     case 7:
//         console.log("Sunday");
//         break;
//     default:
//         console.log("Invalid Input");
//         break;          
// }




// Loops ::::
// Also known as Iteration Statements

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// Loops - for , while , do while

// for loop : 
// 3 values : // initialization
              // condition
              // increment / decrement

// for( let i = 1; i<= 10; i++){
//     console.log(i)
// }



// Question : Print the table of 19 like 19 * 1 = 19
// 19 * 1 = 19
// 19 * 2 = 38


// let a = 19;
// let b;

// for( let i = 1; i <= 10; i++ ) {
//     b = a * i;
//     console.log( a+ "*" +i+ "=" +b );
// }



// Question : Print the table of 27 like 27 * 1 = 27

for( let i = 1; i <= 10; i++ ){
    console.log( "27*" +i+ "=" +27*i );
}
