const mixedData = [10, "apple", 5, "banana", 20, "cherry"];

const firstString = mixedData.find(item => typeof item === "string");
console.log(firstString);

const fruits = ["mango", "orange"];
const isFruitsArray = Array.isArray(fruits);
console.log(isFruitsArray);

const stringItems = mixedData.filter(item => typeof item === "string");
const stringLengths = Array.from(stringItems, str => str.length);
console.log(stringLengths);

const reversedData = [...mixedData].reverse();
console.log(reversedData);

const sortedNumbers = mixedData
  .filter(item => typeof item === "number")
  .sort((a, b) => a - b);
console.log(sortedNumbers);
