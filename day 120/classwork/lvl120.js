const car = {
    brand: "Toyota",
    model: "Prius",
    color: "black",
};

console.log("Properties:");
for (let key in car) {
    console.log(key);
}

console.log("Values:");
for (let key in car) {
    console.log(car[key]);
}

console.log('this is '+ car.brand + ' model ' + car.model + 'color ' + car.color);
