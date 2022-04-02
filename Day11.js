
// const heading = document.getElementsByTagName("h1");
// console.log(heading[1].innerText);


const heading2 = document.getElementsByClassName("class");
console.log(heading2[0].innerText);



// const data = document.getElementById('main').innerText;
// const data2 = document.getElementById('main').innerHTML;
// console.log(data)
// console.log(data2)


// -----------------------------------------------------------------------------
// function handleSubmit () {
//     const value = document.getElementById("main");
//     value.innerText = "Hey...";
//     value.style.color = "aqua";
//     value.style.backgroundColor = "black"
// }



// --------------------------------------------------
// function handleSubmit () {
//     const userInput = document.getElementById("name");
//     const todo = document.createElement("h1");                // <h1></h1>         //create empty h1 tag
//     todo.innerText = userInput.value;                         // <h1>text</h1>
//     todo.setAttribute("class", "todoDiv");                    // <h1 class="todoDiv">text</h1>
//     document.getElementById("todoData").appendChild(todo);
// }


// adding dynamic html 
// create an empty div tag and give it some id.
// capture the input field value
// create the element that you want to add in html.
// append the element inside the empty div tag



// 1

// document.getElementById('txt')

// function clickme() {
//     console.log("My Button is Clicked")
// }


// function clickme() {
    // document.getElementById('txt').innerText="Heloooooo"
// }


// function clickme() {

    // let result = document.getElementsByClassName("txt1")
    // result[0].innerText = "Hiiiii"
// }




// ----------- 4

// function clickme() {
//     document.getElementById('change').innerText='Hello World'
// }


// ---------------5

// function clickme() {
//     document.getElementById('container').style.flexDirection="column"
// }



// ----------------7

// function clickme() {
//     document.getElementById('red').style.color="red";
//     document.getElementById('red').style.backgroundColor="yellow"
// }


// ---------------8

// function clickme() {
    // document.getElementById('txt').innerText='Elevation Academy'
// }



// ---------------------9
function clock(){

    var hours=document.getElementById("hour");
    var minutes=document.getElementById("min");
    var seconds=document.getElementById("sec");
    var am=document.getElementById("ampm");
    
    var time=new Date();
    var hrs=time.getHours();
    var mins=time.getMinutes();
    var secs=time.getSeconds();
    var am_pm="AM";
    
    
    if(hrs==0)
    {
    
    hrs=12;
    
    }
    if(hrs>12){
    
    
        hrs=hrs-12;
        am_pm="PM"
    
    }
    if(hrs<10){
    
    hrs="0"+hrs;
    
    }
    if(mins<10){
    
        mins="0"+mins;
        
        }
    if(secs<10){
    
        secs="0"+secs;
        
        }
    
        hours.innerText=hrs;
        minutes.innerText=mins;
        seconds.innerText=secs
        am.innerHTML=am_pm
    
    }
    setInterval(clock,1000)



// --------------10

// function getOption() {
//     var result = document.getElementById('txt');
//     var result2 = result.value
//     document.getElementById('op').innerText=result2
// }

