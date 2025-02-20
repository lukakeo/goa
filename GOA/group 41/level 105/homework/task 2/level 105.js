let arr1 = [1,2,3,4,5];
let arr2 = [6,7,8,9,10];
nestedArray = [11,[12,[13,[14,[15]]]]];

let combinedArray = arr1.concat(arr2);
combinedArray.copyWithin(4,0,2);
combinedArray.fill(0,2,6);
combinedArray.pop();
combinedArray.shift();
combinedArray.unshift(10,20);
combinedArray.splice(2,2,"x","y","z");
let slicedArray = combinedArray.slice(-3);
slicedArray.join("-");
let flatArray = nestedArray.flat(4);
flatArray.includes(9);
flatArray.push(13)