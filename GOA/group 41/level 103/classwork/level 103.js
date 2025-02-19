let array1 = [1, 2, 3, 4, 5];
let array2 = [6, 7, 8, 9, 10];
concatArray = array1.concat(array2);
concatArray.copywithin(concatArray.length, 0, 2);
concatArray.fill(concatArray.length, 2, 4);
concatArray.pop();
concatArray.shift();
concatArray.unshift(100,200);


let arr1 = ["Rustavi"];
let arr2 = ["Luka"];
mergedarray = arr1.concat(arr2);
mergedarray.copywithin(mergedarray.length, 2, 4);
mergedarray.fill(0,2)