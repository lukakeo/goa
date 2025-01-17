function checkPassword() {
    let password = 'Group 41 is best';
    let attemptsLeft = 3;

    while (attemptsLeft > 0) {
        let attempt = prompt('გთხოვთ შეიყვანოთ პაროლი (' + attemptsLeft +  'ცდილობა დარჩენილია):'); 
        if (attempt === password) {
            alert('თქვენი შეყვანილი პაროლი სწორია');
            return;
        }
        attemptsLeft--;
    }
    alert('თქვენ ამოგეწურათ ცდების რაოდენობა');
}


function Factorial() {
    let number = prompt("გთხოვთ შეიყვანოთ რიცხვი:");
    let result = 1;
    for (let i = 1; i <= number; i++) {
        result *= i;
    }
    alert('ფაქტორიალის რიცხვი რაოდენობა '+ number +' არის ' + result);
}


function seconds() {
    second1 = 0
    
    while (i = 100; i < second1; i--) {
}
return "დარჩენილია" + seconds + "წამი"
}