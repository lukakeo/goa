let score1 = parseInt(prompt("შეიყვანეთ პირველი საგნის ქულა:"));
let score2 = parseInt(prompt("შეიყვანეთ მეორე საგნის ქულა:"));
let score3 = parseInt(prompt("შეიყვანეთ მესამე საგნის ქულა:"));

let grade = ((average = (score1 + score2 + score3) / 3) > 90 && average < 100) ? 'A' : (average >= 70 && average < 80) ? 'B' : (average >= 50 && average < 65) ? 'C' : (average >= 25 && average < 50) ? 'D' : 'წადი ისწავლე და მერე მოდი';