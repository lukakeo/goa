let student1 = {
    name: "David",
    status: "parent",
    review: "Excellent school with great teachers!"
};

let student2 = {
    name: "Mariam",
    status: "child",
    review: "I had fun, but the homework is tough."
};

let student3 = {
    name: "Elene",
    status: "parent",
    review: "Helpful and engaging courses for kids."
};

let academyInfo = {
    name: "Global Academy",
    courses: ["Mathematics", "Physics", "Literature"],
    socialLink: "https://www.globalacademy.com",
    reviews: {
    student1: student1,
    student2: student2,
    student3: student3
    }
};

console.log(Object.keys(academyInfo)); 
console.log(Object.values(academyInfo)); 

console.log(academyInfo.hasOwnProperty('name')); 
console.log(academyInfo.hasOwnProperty('address')); 
  
let additionalInfo = {
    memberStatus: "Active"
};

let updatedAcademy = Object.assign({}, academyInfo, additionalInfo);
console.log(updatedAcademy);

Object.freeze(academyInfo);
console.log(Object.isFrozen(academyInfo)); 

academyInfo.name = "New Academy";
console.log(academyInfo.name); 