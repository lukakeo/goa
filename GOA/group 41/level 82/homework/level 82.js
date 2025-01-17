let input1 = prompt("enter number1")
let input2 = prompt("enter number2")

if (input1 > input2) {
    console.log("number 1 is bigger than number 2");
  }
else if (input1 < input2) {
    console.log("number 2 is bigger than number 1");
  }
else {
    console.log("numbers are equal");
}



let string = "string"
let string_upper = string.toUpperCase()
let string_lower = string.toLowerCase()
console.log(string_upper)
console.log(string_lower)



let current_year = 2024
let birth_year = prompt("enter your birth year")
let age = current_year - birth_year
console.log(age)




let number1 = prompt("enter number1")
let number2 = prompt("enter number2")
let number3 = prompt("enter number3")
console.log(number1 + number2 + number3)
console.log((number1 + number2 + number3) / 3)