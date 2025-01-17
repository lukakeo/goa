let age = prompt("enter your age")

if (age > 5 && age < 12) {
    console.log("შენ ხარ ბავშვი")
} else if (age > 12 && age > 18) {
    console.log("შენ ხარ თინეიჯერი/მოზარდი")
} else if (age > 18 && age < 80) {
    console.log("შენ ხარ სრულწოვანი")
} else{
    console.log("დაბერდი ძმაო")
}



let num1 = prompt("enter number 1")
let num2 = prompt("enter number 2")
let operation = prompt("enter operation + , - , * , /")

Math.floor(num1)
Math.floor(num1)

if (num1 && num2 == Number){
    console.log("")
} else {
    console.log("enter numbers")
}

if (operation == "+") {
    console.log(num1 + num2)
} else if (operation == "-") {
    console.log(num1 - num2)
} else if (operation == "*") {
    console.log(num1 * num2)
} 

if (operation == "/" && num1 == 0 && num2 == 0){
    console.log("please enter a valid number instead of 0")
}
else{
    console.log(num1 / num2)
}