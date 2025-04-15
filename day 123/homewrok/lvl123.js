const numbers = [2, 4, 6, 8, 10];

const allEven = numbers.every(num => num % 2 === 0);
console.log("All Even:", allEven);

// ===================================================================

const words = ["apple", "banana", "cat", "elephant"];

const hasLongString = words.some(word => word.length > 5);
console.log("Has Long String:", hasLongString);

// ===================================================================

const originalNumbers = [1, 3, 5, 7];
const doubledNumbers = [];

originalNumbers.forEach(num => {
    doubledNumbers.push(num * 2);
});

console.log("Doubled Numbers:", doubledNumbers);
