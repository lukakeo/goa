function year(leap) {
        if (leap % 4 == 0 && (leap % 100 !== 0 || leap % 400 == 0)) {
            return "it's a leap year";
        } else {
            return "it's not a leap year";
        }
    }





const names = ["luka", "gio", "mari", "mate", "rati"];
console.log(names[Math.floor(Math.random() * names.length)]);

for (w in range(1, 101)) {
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
function generateRandomNumbers(N) {
    if (N <= 0) return 0;
    let numbers = [];
    let sum = 0;
    for (let i = 0; i < N; i++) {
        let randomNum = Math.random();
        numbers.push(randomNum);
        sum += randomNum;
    }
    return sum / N;
}
console.log(generateRandomNumbers(10));