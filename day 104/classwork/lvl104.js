let fruits = ["apple", "orange", "banana", "peach", "mango"];


let citrus = fruits.slice(1, 3);

fruits.splice(-2, 2, "grape");

let fruitString = fruits.join("-");

console.log("Citrus:", citrus);
console.log("Modified Fruits:", fruits);
console.log("Fruit String:", fruitString);
