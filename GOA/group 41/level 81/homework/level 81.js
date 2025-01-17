let a = "luka"
const b = a.length
if (b <= 140) {
    alert(a)
}
else{
    alert(a.substring(0,140))
}




const name = prompt("enter your name")
const name1 = name[0].toUpperCase()
const name2 = name.substring(1,name.length).toLowerCase() 
alert("Hello " + name1 + name2)





const user1 = prompt("enter your name")
const user2 = prompt("enter your name")
const use1 = user1.length()
const use2 = user2.length()

if (use1 > use2) {
    console.log("is bigger by" + use1-use2)
}
else{
    console.log("is bigger by" + use2-use1)
}



let number1 = prompt("user1 enter number")
let number2 = prompt("user2 enter number")
alert(number1 + number2)
alert(number1 - number2)
alert(number1 * number2)
alert(number1 ** number2)
alert(number1 / number2)
alert(number1 % number2)