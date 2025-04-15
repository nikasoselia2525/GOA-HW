const users = [
    { name: "Alice", email: "alice@example.com" },
    { name: "Bob", email: "bob@example.com" },
    { name: "Charlie", email: "charlie@example.com" }
];

const formattedEmails = users.map(user => "<" + user.email + ">");
console.log("Formatted Emails:", formattedEmails);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const evenNumbers = numbers.filter(num => num % 2 === 0);
const squaredEvens = evenNumbers.map(num => num * num);

console.log("Even Numbers:", evenNumbers);
console.log("Squared Evens:", squaredEvens);

const items = [
    { name: "Book", price: 10, quantity: 3 },
    { name: "Pen", price: 2, quantity: 10 },
    { name: "Notebook", price: 5, quantity: 5 }
];

const totalValue = items.reduce((total, item) => {
    return total + (item.price * item.quantity);
}, 0);

console.log("Total Value:", totalValue);


