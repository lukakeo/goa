function Person(name, age, profession) {
    this.name = name;
    this.age = age;
    this.profession = profession;
    this.introduce = function() {
        console.log("Hi, I'm " + this.name + ", a " + this.age + "-year-old " + this.profession + ".");
    };
}

let person1 = new Person("Alice", 30, "Software Developer");
person1.introduce();





function Book(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
    this.getSummary = function() {
        return this.title + " by " + this.author + ", published in " + this.year;
    };
  }
  
let book1 = new Book("1984", "George Orwell", 1949);
let book2 = new Book("To Kill a Mockingbird", "Harper Lee", 1960);
let book3 = new Book("Moby-Dick", "Herman Melville", 1851);
  
console.log(book1.getSummary());
console.log(book2.getSummary());
console.log(book3.getSummary());


function User(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
    this.changePassword = function(newPassword) {
      this.password = newPassword;
    };
    this.getDetails = function() {
        return "Username: " + this.username + ", Email: " + this.email;
    };
  }
  
let user1 = new User("john_doe", "john@example.com", "1234password");
let user2 = new User("jane_doe", "jane@example.com", "abcdpassword");
  
user1.changePassword("newpassword123");
  
console.log(user1.getDetails());
console.log(user2.getDetails());