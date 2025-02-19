let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [7, 8, 9];
let mergedArray = arr1.concat(arr2);
mergedArray.copyWithin(5, 0, 3);
mergedArray.fill(0, 6);
mergedArray.pop();
mergedArray.shift();
mergedArray.unshift(100, 200);
mergedArray.splice(2, 2, ...arr3);
let slicedArray = mergedArray.slice(-5);
console.log(slicedArray.join(","));






let students = ["Alice", "Bob", "Charlie"];
let grades = [85, 90, 78];
students.unshift("David");
grades.unshift(95);
console.log(students, grades);
students.pop();
grades.pop();
console.log(students, grades);
grades.splice(1, 1, 88);
console.log(grades);
grades.fill(100);
console.log(grades);






let playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];
playlist.unshift("Song 5");
console.log(playlist);
playlist.pop();
console.log(playlist);
playlist.copyWithin(playlist.length, 0, 2);
playlist.length = playlist.length + 2;
console.log(playlist);
let newPlaylist = playlist.concat(["Song 6", "Song 7"]);
console.log(newPlaylist);





let cartItems = ["Item 1", "Item 2", "Item 3"];
let prices = [10, 20, 30];
cartItems.unshift("Item 4");
prices.unshift(15);
console.log(cartItems, prices);
cartItems.shift();
prices.shift();
console.log(cartItems, prices);
cartItems.splice(1, 1, "New Item");
prices.splice(1, 1, 25);
console.log(cartItems, prices);
let receipt = cartItems.join(", ");
console.log(receipt);
prices.fill(5);
console.log(prices);