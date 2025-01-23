function recommendTransport() {
    let distance = parseFloat(prompt("Enter the distance you need to travel:"));
    let budget = parseFloat(prompt("Enter your budget:"));

    if (distance <= 1) {
        console.log("Recommended transport: Walking.");
    } else if (distance <= 5) {
        console.log(budget >= 2 ? "Recommended transport: Bicycle." : "Recommended transport: Walking.");
    } else if (distance <= 20) {
        console.log(budget >= 5 ? "Recommended transport: Public Transport." : "Recommended transport: Bicycle.");
    } else {
        console.log(budget >= 20 ? "Recommended transport: Taxi." : "Recommended transport: Public Transport.");
    }
}

recommendTransport();
