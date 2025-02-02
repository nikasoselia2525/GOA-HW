let car = {
    brand: "Toyota",
    model: "Prius",
    year: 2020,
    color: "Black",
    weight: "1300kg",
    
    getDescription: function() {
        return "ამ მანქანის ბრენდია " + this.brand + ", კონკრეტული მოდელი " + this.model + 
               ", გამოშვების წელია " + this.year + ", ფერი " + this.color + 
               ", წონა " + this.weight + ".";
    }
};

console.log(car.brand);
console.log(car.model);
console.log(car.year);
console.log(car.color);
console.log(car.weight);

car.brand = "Mersedes";
car.model = "benz";
car.year = 2023;
car.color = "black";
car.weight = "2000kg";

car.mode = "offroad";

delete car.mode;


let myCarBrand = "Mersedes";

if (car.brand === myCarBrand) {
    console.log("იგივე მანქანის ბრენდი გვყოლია ძმობილო");
} else {
    console.log("სხვადასხვა მანქანის ბრენდია, ჩემი მოუგებს");
}

console.log(car.getDescription());
