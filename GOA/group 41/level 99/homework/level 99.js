let student = {
    name: "Johnny",
    age: 30,
    grade: "B",
    isEnrolled: true,
    getInfo: function() {
      return "Name: " + this.name + ", Age: " + this.age + ", Grade: " + this.grade + ", Enrolled: " + this.isEnrolled;
    }
};
console.log(student.getInfo());
student.grade = "B+";
console.log(student);






function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
}

Car.prototype.getCarInfo = function() {
    return "Brand: " + this.brand + ", Model: " + this.model + ", Year: " + this.year;
};

let car1 = new Car("Toyota", "Corolla", 2020);
let car2 = new Car("Honda", "Civic", 2021);
let car3 = new Car("Ford", "Mustang", 2022);  
console.log(car1.getCarInfo());
console.log(car2.getCarInfo());
console.log(car3.getCarInfo());



let library = {
    name: "City Library",
    location: "123 Library St.",
    books: [
      {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        year: 1925
      },
      {
        title: "1984",
        author: "George Orwell",
        year: 1949
      },
      {
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        year: 1960
      }
    ],
    listBooks: function() {
      this.books.forEach(function(book) {
        console.log("This book is called '" + book.title + "', written by " + book.author + ", and published in " + book.year + ". You can find this book at " + this.name + " located at " + this.location + ".");
      }, this);
    }
};
  
library.listBooks();






let product1 = {
    productName: "Laptop",
    price: 1000,
    quantity: 5,
    isAvailable: true
};


let product2 = {
    productName: "Smartphone",
    price: 500,
    quantity: 0,
    isAvailable: true
};


let product3 = {
    productName: "Headphones",
    price: 100,
    quantity: 10,
    isAvailable: false
};


let inventory = {
    product1: product1,
    product2: product2,
    product3: product3,

    displayAvailableProducts: function() {
      if (this.product1.isAvailable && this.product1.quantity > 0) {
        console.log("Product: " + this.product1.productName + ", Price: " + this.product1.price + ", Quantity: " + this.product1.quantity);
      }
      if (this.product2.isAvailable && this.product2.quantity > 0) {
        console.log("Product: " + this.product2.productName + ", Price: " + this.product2.price + ", Quantity: " + this.product2.quantity);
      }
      if (this.product3.isAvailable && this.product3.quantity > 0) {
        console.log("Product: " + this.product3.productName + ", Price: " + this.product3.price + ", Quantity: " + this.product3.quantity);
      }
    }
};
  
inventory.displayAvailableProducts();