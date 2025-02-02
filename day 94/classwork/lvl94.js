function calculateGrade() {
    let scores = [];
    for (let i = 1; i < 4; i++) {
        scores.push(parseFloat(prompt("Enter score " + i + ":")));
    }

    let average = scores.reduce((a, b) => a + b);

    if (average > 90) {
        if (average <= 100) console.log("Grade: A");
    } else if (average > 70) {
        if (average <= 80) console.log("Grade: B");
    } else if (average > 50) {
        if (average <= 65) console.log("Grade: C");
    } else if (average > 25) {
        if (average <= 50) console.log("Grade: D");
    } else {
        console.log("Grade: წადი ისწავლე და მერე მოდი");
    }
}

calculateGrade();
