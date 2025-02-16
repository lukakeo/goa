const university = {
    name: "Tbilisi State University",
    departments: 10,
    website: "https://www.tsu.ge",
    ratings: {
        student1: 4.5,
        student2: 4.7,
        student3: 4.3
    }
}

for (let key in university) {
    console.log(key + ": " + university[key])
}

console.log("Has 'scholarship' property: " + university.hasOwnProperty("scholarship"))

const updatedUniversity = { name: university.name, departments: university.departments, website: university.website, ratings: university.ratings, studentsCount: 25000 }
console.log("Updated university with studentsCount: ", updatedUniversity)

Object.freeze(university)

university.name = "New University"
delete university.website
console.log("After modification attempt: ", university)

console.log("Is university frozen: " + Object.isFrozen(university))





const sportsClub = {
    clubName: "Real Madrid",
    sportType: "Football",
    foundedYear: 1902,
    achievements: {
        title1: "La Liga Champion 2023",
        title2: "UEFA Champions League Winner 2022",
        title3: "FIFA Club World Cup Winner 2018"
    }
}

console.log("Object keys: " + Object.keys(sportsClub))
console.log("Object values: " + Object.values(sportsClub))

console.log("Has 'sponsors' property: " + sportsClub.hasOwnProperty("sponsors"))

const updatedSportsClub = { clubName: sportsClub.clubName, sportType: sportsClub.sportType, foundedYear: sportsClub.foundedYear, achievements: sportsClub.achievements, stadiumCapacity: 81044 }
console.log("Updated sports club: ", updatedSportsClub)

Object.freeze(sportsClub)

sportsClub.clubName = "New Club"
delete sportsClub.sportType
console.log("After modification attempt: ", sportsClub)

console.log("Is sportsClub frozen: " + Object.isFrozen(sportsClub))








const hotel = {
    hotelName: "Grand Palace",
    stars: 5,
    location: "Paris, France",
    guestReviews: {
        guest1: "Excellent service and location",
        guest2: "Very comfortable and clean",
        guest3: "Great food but expensive"
    }
}

for (let key in hotel) {
    console.log(key + ": " + hotel[key])
}

console.log("Has 'spa' property: " + hotel.hasOwnProperty("spa"))

const updatedHotel = { hotelName: hotel.hotelName, stars: hotel.stars, location: hotel.location, guestReviews: hotel.guestReviews, roomsCount: 200 }
console.log("Updated hotel: ", updatedHotel)

Object.freeze(hotel)

hotel.hotelName = "New Hotel"
delete hotel.location
console.log("After modification attempt: ", hotel)

console.log("Is hotel frozen: " + Object.isFrozen(hotel))






const cinema = {
    cinemaName: "Galaxy Cinema",
    moviesCount: 12,
    location: "New York, USA",
    movieReviews: {
        user1: "Amazing sound quality and comfortable seats",
        user2: "Great selection of movies but expensive snacks",
        user3: "Clean environment and friendly staff"
    }
}

for (let key in cinema) {
    console.log(key + ": " + cinema[key])
}

console.log("Has 'vipSeats' property: " + cinema.hasOwnProperty("vipSeats"))

const updatedCinema = { cinemaName: cinema.cinemaName, moviesCount: cinema.moviesCount, location: cinema.location, movieReviews: cinema.movieReviews, ticketPrice: 15 }
console.log("Updated cinema: ", updatedCinema)

Object.freeze(cinema)

cinema.cinemaName = "New Cinema"
delete cinema.location
console.log("After modification attempt: ", cinema)

console.log("Is cinema frozen: " + Object.isFrozen(cinema))