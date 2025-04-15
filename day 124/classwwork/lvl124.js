const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 45 },
    { name: "Monitor", price: 150 },
    { name: "USB Cable", price: 10 }
];

const productNames = products.map(product => product.name);
console.log("Product Names:", productNames);

const affordableProducts = products.filter(product => product.price < 100);
console.log("Affordable Products:", affordableProducts);

const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
console.log("Total Price:", totalPrice);

const productNamesReversed = products.reduceRight((acc, product, index) => {
    return acc === "" ? product.name : acc + " - " + product.name;
}, "");

console.log("Reversed Product Names:", productNamesReversed);







