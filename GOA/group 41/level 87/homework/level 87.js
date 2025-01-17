let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("საბოლოო რიცხვების ჯამი არის " + sum);





for (let m = 1; m <= 10; m++) {
    console.log(m + " - ის კვადრატი არის " + (m * m));
}





let text = "გამარჯობა";

for (let n = 0; n < text.length; n++) {
    console.log(text[n]);
}




let w = 1 

for (let w = 1; w <= 101; w++) {
    if (w % 5 == 0 && w % 3 == 0) {
        console.log("FizzBuzz");
    } else if (w % 3 == 0) {
        console.log("Fizz");
    } else if (w % 5 == 0) {
        console.log("Buzz");
    } else {
        console.log(w);
    }
}