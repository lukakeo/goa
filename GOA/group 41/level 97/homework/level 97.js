book = {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    pages: 208,
    year: 1925,
    getsumarry: function () {
        console.log("The book " + this.title + " was written by " + this.author + " in " + this.year + " and its pages are " + this.pages);
    }
}


client = {
    firstname: "John",
    lastname: "Doe",
    email: "someranomdudes@example.com",
    fullName: function() {
        return client.firstName + " " + client.lastName;
    },

    updateEmail: function(newEmail) {
        client.email = newEmail;
    }
}


movie = {
    title: "jaws",
    director: "steven Spielberg",
    year: 1975,
    duration: "124min",
    getmovieinfo: function() {
        console.log("The movie " + this.title + " was directed by " + this.director + " in " + this.year + " and its duration is " + this.duration);
    }
}

ticket = {
    eventname: "concert",
    eventdate: "2023-01-01",
    price: 100,
    isavailable: true,
    purcahseticket: function() {
        if (ticket.isavailable) {
            console.log("Ticket is available for purchase. Price: $" + this.price);
        } else {
            console.log("Ticket is not available for purchase.");
        }
    }
}