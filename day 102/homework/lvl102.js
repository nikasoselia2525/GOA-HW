function countElements(arr) {
    return arr.length;
}

console.log(countElements([1, 2, 3, 4]));
console.log(countElements([]));
console.log(countElements(['apple', 'banana', 'cherry']));

// =============================================================

function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}

console.log(mergeArrays([1, 2, 3], [4, 5, 6]));
console.log(mergeArrays(['a', 'b'], ['c', 'd']));
console.log(mergeArrays([], [7, 8, 9]));

// =============================================================

function addToArray(arr, value) {
    return arr.push(value);
}

let numbers = [1, 2, 3];
console.log(addToArray(numbers, 4));
console.log(numbers);
