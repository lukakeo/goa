let dayofweek = prompt("enter day of week")

if (dayofweek == 1){
    alert("monday")
} else if (dayofweek == 2){
    alert("tuesday")
} else if (dayofweek == 3){
    alert("wednesday")
} else if (dayofweek == 4){
    alert("thursday")
} else if (dayofweek == 5){
    alert("friday")
} else if (dayofweek == 6){
    alert("saturday")
} else if (dayofweek == 7){
    alert("sunday")
} else {
    alert("unknown")
}



const number = prompt("enter number")
if (number % 2 == 0){;
      alert("Even")
}else if (number % 1 == 0){;
      alert("Odd")
}
alert(number)


const weather = prompt("1 -> მზიანი   2 -> წვიმიანი  3 -> მოღრუბლული   4 -> ქარიანი")

if (weather == 1){
    alert("მზიანი")
} else if (weather == 2){
    alert("წვიმიანი")
} else if (weather == 3){
    alert("მოღრუბლული")
} else if (weather == 4){
    alert("ქარიანი")
}
else {
    alert("unknown")
}

const month = prompt("enter month")
if (month == 1)
    alert("january")
else if (month == 2)
    alert("february")
else if (month == 3)
    alert("march")
else if (month == 4)
    alert("april")
else if (month == 5)
    alert("may")
else if (month == 6)
    alert("june")
else if (month == 7)
    alert("july")
else if (month == 8)    
    alert("august")
else if (month == 9)
    alert("september")
else if (month == 10)
    alert("october")
else if (month == 11)
    alert("november")
else if (month == 12)
    alert("december")

if (month >= 1 && month <= 6) {
    alert("first half")
}else if (month >= 7 && month <= 12) {
    alert("second half")
}