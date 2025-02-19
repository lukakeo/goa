let fruits = ["mandarin", "banana", "orange", "elderberry"];
let citrus = fruits.slice(1, 3);
fruits.splice(2, 2, "fig");
let fruitString = fruits.join("-");

console.log(fruits);