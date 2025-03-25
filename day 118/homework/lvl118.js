document.getElementById("convertButton").addEventListener("click", function() {
    const temperature = parseFloat(document.getElementById("temperatureInput").value);
    const unit = document.getElementById("unitSelector").value;
    const resultDiv = document.getElementById("result");

    if (isNaN(temperature)) {
        resultDiv.textContent = "Please enter a valid number!";
        return;
    }

    let convertedTemperature;
    if (unit === "C") {
        convertedTemperature = (temperature * 9/5) + 32;
        resultDiv.textContent = `${temperature}°C is ${convertedTemperature.toFixed(2)}°F`;
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        resultDiv.textContent = `${temperature}°F is ${convertedTemperature.toFixed(2)}°C`;
    }
});
