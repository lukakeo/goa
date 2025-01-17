let num = 1;
for (let i = 1; i <= 100; i++) {
    num *= i;
    if (num > 100) { 
        break;
    }
}
console.log(num);


function welcome(){
    let name = prompt("enter your name")
}

alert(welcome + welcome())


let foot = parseint(readLine(), 10);
function foottoinch(ft) {
    let inch = ft * 12
    alert(inch)

alert(foottoinch(4))
}
