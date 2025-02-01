let car = {
    brand: "Lamborghini",
    model: "Huracán",
    year: 2022,
    color: "ყვითელი",
    weight: 1422,
    info: function() {
        console.log(`ამ მანქანის ბრენდია ${this.brand}, მოდელია ${this.model}, გამოშვების წელი ${this.year}, ფერი ${this.color}, წონა ${this.weight} კგ.`);
    }
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

car.brand = "Lamborghini";
car.model = "Aventador";
car.year = 2023;
car.color = "შავი";
car.weight = 1575;

car.mode = "Sport";

delete car.mode;

let myCarBrand = "Lamborghini";

if (car.brand === myCarBrand) {
    console.log("იგივე მანქანის ბრენდი გვყოლია ძმობილო");
} else {
    console.log("სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს");
}

car.info();