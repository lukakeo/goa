const allValue = [
    25,                        
    "Designer",              
    2.71,                     
    true,                    
    {                          
        firstName: "Olivia",
        lastName: "Brown",
        age: 35,
        country: "Australia",
        city: "Sydney"
    }
];

const person = allValue[4];

const sentence = "ჩემი სახელია " + person.firstName + ", ჩემი გვარია " + person.lastName + 
", მე ვარ " + person.age + " წლის, ვცხოვრობ " + person.country + "-ში, ქალაქ " + person.city + "-ში.";

console.log(sentence);