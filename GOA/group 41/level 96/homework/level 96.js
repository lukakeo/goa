Book = {
    title: "vefxistyaosani",
    author: "shota rustaveli",
    cameout: "XII century",
    genre: "poem",
    cost: "priceless"
}

console.log(Book.title);
console.log(book.author)
console.log(book.cameout)
console.log(book.genre)
console.log(book.cost)

console.log(book["title"]);
console.log(book["author"])
console.log(book["cameout"])
console.log(book["genre"])
console.log(book["cost"])


console.log("the book " + book.title + " was written by " + book.author + " in " + book.cameout + " and its genre is " + book.genre + " and its cost is " + book.cost);



let student1 = {
    name: "ნიკა",
    age: 20,
    faculty: "ინფორმატიკა",
    course: 3,
    averageGrade: 8.5
};

console.log(student1);

console.log("Name (Dot Notation):", student1.name);
console.log("Age (Dot Notation):", student1.age);
console.log("Faculty (Dot Notation):", student1.faculty);
console.log("Course (Dot Notation):", student1.course);
console.log("Average Grade (Dot Notation):", student1.averageGrade);

console.log("Name (Bracket Notation):", student1["name"]);
console.log("Age (Bracket Notation):", student1["age"]);
console.log("Faculty (Bracket Notation):", student1["faculty"]);
console.log("Course (Bracket Notation):", student1["course"]);
console.log("Average Grade (Bracket Notation):", student1["averageGrade"]);

console.log(student1.name + " არის " + student1.age + " წლის სტუდენტი, რომელიც სწავლობს " + student1.faculty + "-ში, " + student1.course + "-კურსზე. მისი საშუალო ქულა არის " + student1.averageGrade + ".");