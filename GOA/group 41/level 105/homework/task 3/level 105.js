let numbers = [10,20,30,40,50];
let secondArray = [60,70,80];
concArray = numbers.concat(secondArray);
concArray.copywithin(1,2,-2);
concArray.fill(100,0,2);
let pop = concArray.pop();
let shift = concArray.shift();
concArray.unshift(5,15);
concArray.join("-");
let slicedArray = concArray.slice(0,3);
concArray.splice(1,2,200,300);
let nestedArray = [1,[2,3],[4,[5,6]]];
nestedArray.flat(3);
concArray.includes(50);
numbers.indexOf(30);
numbers.lastIndexOf(20);
concArray.push(90,100)