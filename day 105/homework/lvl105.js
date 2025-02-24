let cartItems = ["Apple", "Banana", "Orange"];
let prices = [1.5, 0.8, 1.2];

function addItem(item, price) {
    cartItems.unshift(item);
    prices.unshift(price);
    return { cartItems, prices };
}

function removeFirstItem() {
    cartItems.shift();
    prices.shift();
    return { cartItems, prices };
}

function replaceItem(index, newItem, newPrice) {
    cartItems.splice(index, 1, newItem);
    prices.splice(index, 1, newPrice);
    return { cartItems, prices };
}

function createReceipt() {
    return cartItems.join(", ");
}

function applyDiscount(discountPrice) {
    prices.fill(discountPrice);
    return prices;
}

console.log(addItem("Grapes", 2.0));
console.log(removeFirstItem());
console.log(replaceItem(1, "Mango", 1.8));
console.log(createReceipt());
console.log(applyDiscount(0.99));
