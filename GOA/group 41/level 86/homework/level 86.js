function calc(num0, num1,operation){
    if(operation == "+"){
        return num0 + num1
    }
    else if(operation == "-"){
        return num0 - num1
    }
    else if(operation == "*"){
        return num0 * num1
    }
    else if(operation == "/" && num1 != 0){
        return num0 / num1
    }
}


function even_or_odd(number){
    if(number % 2 == 0){
        return "Even"
    }
    else if(number % 1 == 0){
        return "Odd"
    }
}

function square(numbers){
    return numbers * numbers
}

function which_one(num){
    if (num > 0){
        return "positive"
    }
    else if (num < 0){
        return "negative"
    }
    else{
        return "zero"
    }
}