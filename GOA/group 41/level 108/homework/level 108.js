let date = new Date();
date.getFullYear();
date.getMonth();
date.getDate();
date.getHours();
date.getMinutes();
date.getSeconds();


let date2 = new Date();

console.log(date2.setFullYear(prompt("enter year")) - date.getFullYear() + " years" + date2.setMonth(prompt("enter month")) - date.getMonth() + " month" + date2.setDate("enter date")) - date.getDate() + " days";

let date3 = new Date()

let counter = 0;
let timerElement = document.getElementById("timer");

timerElement.textContent = "Timer: " + counter + " sec";
setInterval(function() {
    counter = counter + 1;
    timerElement.textContent = "Timer: " + counter + " sec";
}, 1000);

let date4 = new Date()

setInterval(function() {
    console.log(date4.getFullYear , date4.getMonth() , date4.getDate() , date4.getHours() , date4.getMinutes() , date4.getSeconds());
}, 1000);

setInterval(function() {
    console.log(0 || 1);
}, 1000);


let message = prompt("enter message")
let delay = prompt("enter delay in ms") 
setTimeout(function() {
    console.log(message);
}, delay);


setTimeout(function() {
    console.log("Hi");
}, 3000);



setTimeout(function() {
    console.log("Hello");
}, 1000);

setTimeout(function() {
    console.log("Hi");
}, 2000);

setTimeout(function() {
    console.log("Hello World");
}, 3000);

setTimeout(function() {
    console.log("hI");
}, 4000);



let date5 = new Date();
setInterval(function() {
date5.getHours();

if (date5.getHours() < 12) {
    console.log("Good Morning");
}
else if (12 > date5.getHours() < 18) {
    console.log("Good Afternoon");
}
else {
    console.log("Good Evening");
}
}, 1000);



