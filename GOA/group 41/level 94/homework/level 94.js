function isTriangle(a, b, c) {
    if (a + b > c && b + c > a && c + a > b) {
      return true;
    } else {
      return false;
    }
}




function requestEmail() {
    let email = prompt("გთხოვთ, შეიყვანოთ თქვენი ელექტრონული ფოსტა:");

    alert("access granted");
}





function compareNumbers(num1, num2) {
    if (num1 === num2) {
      alert("რიცხვები უდრის ერთმანეთს.");
    } else if (num1 > num2) {
      alert(num1 + " დიდია " + num2 + "-ზე.");
    } else {
      alert(num1 + " პატარაა " + num2 + "-ზე.");
    }
}




function financialPlan(age, gender, income) {

    if (age >= 18) {
      if (gender === "ქალი") {

        if (income > 5000) {
          console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
        } else if (income > 3000 && income <= 5000) {
          console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
        } else {
          console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
      } else if (gender === "კაცი") {

        if (income > 6000) {
          console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
        } else if (income > 4000 && income <= 6000) {
          console.log("შემოსავალი სტაბილურია");
        } else {
          console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
        }
      }
    } else {

      console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
    }
}



function financialPlan(age, gender, income) {

    if (age >= 18) {
      switch (gender) {
        case "ქალი":

          switch (true) {
            case income > 5000:
              console.log("თქვენი ფინანსური მდგომარეობა უზრუნველყოფილია");
              break;
            case income > 3000 && income <= 5000:
              console.log("ფინანსური პოზიცია სტაბილურია. უკეთესი გეგმაა საჭირო.");
              break;
            default:
              console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
          }
          break;
  
        case "კაცი":

          switch (true) {
            case income > 6000:
              console.log("თქვენ მზად ხართ ინვესტიციებისთვის!");
              break;
            case income > 4000 && income <= 6000:
              console.log("შემოსავალი სტაბილურია");
              break;
            default:
              console.log("გჭირდებათ ფინანსური გეგმის გაუმჯობესება");
          }
          break;
  
        default:
          console.log("შეცდომა: სქესი არ არის სწორად შესული.");
      }
    } else {

      console.log("მიიღეთ განათლება და შემდეგ დაიწყეთ ინვესტიცია");
    }
}



function evaluatePerformance(age, grade) {

const message = (age >= 18) ? (grade > 50 ? "თქვენ წარმატებული ხართ" : "გჭირდებათ მეტი სწავლა") : "შენც ბავშვი ხარ, მაგრამ შეგიძლია წარმატებას მიაღწიო";
  
console.log(message);
}


let s = 0;

for (let num = 2; num <= 100; num++) {
  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    s += num;
  }
}





let sum = 0;
let num = 2;

while (num <= 100) {
let isPrime = true;

let i = 2;
while (i <= Math.sqrt(num)) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
    i++;
  }

  if (isPrime) {
    sum += num;
  }

  num++;
}




for (let num = 1; num <= 50; num++) {

    if (num === 25) {
      continue;
    }

    if (num % 2 === 0) {
      console.log(num);
    }
}