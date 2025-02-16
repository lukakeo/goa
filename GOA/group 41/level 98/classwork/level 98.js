function User(name, lastName, phoneNumber, email, password, confirmPassword) {
    this.name = name;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
    this.email = email;
    this.password = password;
    this.confirmPassword = confirmPassword;

    this.introduce = function() {
        return "ჩემი სახელია" + this.name + ", ჩემი გვარია " + this.lastName+ " ჩემი ტელეფონის ნომერია " + this.phoneNumber + "ჩემი ელფოსტაა" + this.email;
    };
}

const user1 = new User("ნიკა", "აბაშიძე", "555112233", "nika@example.com", "pass123", "pass123");
const user2 = new User("თამარ", "გელაშვილი", "599223344", "tamar@example.com", "secure456", "secure456");
const user3 = new User("დავით", "ბერიძე", "577334455", "davit@example.com", "mypassword", "mypassword");

console.log(user1.introduce());
console.log(user2.introduce());
console.log(user3.introduce());