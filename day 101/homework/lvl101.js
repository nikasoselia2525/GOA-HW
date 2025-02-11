const university = {
    name: "Tech University",
    departments: 5,
    website: "https://techuniversity.edu",
    ratings: {
        student1: { name: "Alice", review: "Great professors and courses!" },
        student2: { name: "Bob", review: "Loved the campus and resources!" },
        student3: { name: "Charlie", review: "Good experience with online classes." }
    }
};

console.log(university);
console.log("Has scholarship property?", "scholarship" in university);

const updatedUniversity = { ...university, studentsCount: 10000 };
console.log(updatedUniversity);

Object.freeze(updatedUniversity);
console.log("Is frozen?", Object.isFrozen(updatedUniversity));
