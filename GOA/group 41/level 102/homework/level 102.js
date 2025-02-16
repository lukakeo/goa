function getArrayLength(arr) {
    return arr.length;
}

function concatenateArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

function addToEnd(arr, value) {
    arr.push(value);
    return arr.length;
}

function removeLastElement(arr) {
    return arr.pop();
}

function concatenateAndPush(arr1, arr2, value) {
    let newArray = arr1.concat(arr2);
    newArray.push(value);
    return newArray;
}

function sumArray(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function evenIndexedElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 === 0) {
            result.push(arr[i]);
        }
    }
    return result;
}

function stringLengths(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        result.push(arr[i].length);
    }
    return result;
}