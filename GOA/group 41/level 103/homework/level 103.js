let numsArray = [10, 20, 30, 40, 50];
let strArray = ["x", "y", "z", "w", "v"];
let combinedArray = numsArray.concat(strArray);
combinedArray.copyWithin(4, 0, 3);
combinedArray.fill("modified", 2, 5);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(300, 400);
console.log(combinedArray);





let people = [name, "Alice", name, "Bob"];
let places = [city, "London", city, "Paris"];
let mergedArray = people.concat(places);
mergedArray.copyWithin(2, 0, 2);
mergedArray.fill(city ,"New York", mergedArray.length - 2, mergedArray.length);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift(name, "Charlie", name, "David");
console.log(mergedArray);





let mixedArray = [1, "two", 3, "four", 5];
let extendedArray = mixedArray.concat([true, false]);
extendedArray.copyWithin(0, 2, 4);
extendedArray.fill(0, 4, 7);
extendedArray.pop();
extendedArray.shift();
extendedArray.unshift(null, undefined)
console.log(extendedArray);