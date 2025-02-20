let arr1 = [1,2,3];
let arr2 = [4,5,6];
let nestedArray = [7,[,8[9]]]

let combinedArray = arr1.concat(arr2);
combinedArray.copyWithin(5, 0, 2);
combinedArray.fill(0 , 6);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(100,200);
combinedArray.splice(2,2,"x","y","Z")
let slicedArray = combinedArray.slice(-5);
slicedArray.join(",");
let flatArray = nestedArray.flat(2);
flatArray.includes(8);
flatArray.indexOf(9);
flatArray.lastIndexOf(7);