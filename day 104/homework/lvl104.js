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

let resultString = slicedArray.join(",");

console.log(mergedArray);
console.log(slicedArray);
console.log(resultString);
