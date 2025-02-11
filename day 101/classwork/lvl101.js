const academy = {
    name: "GOA",
    courses: ["JavaScript", "Python", "HTML", "Web Development"],
    socialLink: "https://GOA.com",
    reviews: {
        user1: "Great for learning",
        user2: "The teachers are very helpful.",
        user3: "Best academy"
    }
};

console.log("Property-Value Pairs:", academy);

console.log("Properties:", Object.keys(academy));

console.log("Values:", Object.values(academy));

console.log("Has 'courses' property?", academy.hasOwnProperty("courses"));
console.log("Has 'members' property?", academy.hasOwnProperty("members"));

Object.freeze(academy);

console.log("Is academy object frozen?", Object.isFrozen(academy));
