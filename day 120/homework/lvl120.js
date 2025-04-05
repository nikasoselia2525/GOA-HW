const person = {
    name: "john",
    age: 20,
    city: "tbilisi",
};

for (let key in person) {
    console.log(key + ": " + person[key]);
}
