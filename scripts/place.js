// Function to calculate Wind Chill
function calculateWindChill(tempC, windKmh) {
    // Convert Celsius to Fahrenheit
    let tempF = (tempC * 9/5) + 32;
    // Convert km/h to mph
    let windMph = windKmh * 0.621371;

    // Wind chill only applies if temperature is below 10°C and wind speed above 4.8 km/h
    if (tempC <= 10 && windKmh > 4.8) {
        let windChillF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(windMph, 0.16)) + (0.4275 * tempF * Math.pow(windMph, 0.16));
        let windChillC = (windChillF - 32) * 5/9; // Convert back to Celsius
        return windChillC.toFixed(1) + "°C";
    } else {
        return "N/A"; // No wind chill factor
    }
}

// Function to update Wind Chill
function updateWindChill() {
    let temp = parseFloat(document.getElementById("temperature").textContent);
    let windSpeed = parseFloat(document.getElementById("wind-speed").textContent);
    document.getElementById("windchill").textContent = calculateWindChill(temp, windSpeed);
}

// Function to update footer details
function updateFooter() {
    document.getElementById("copyright-year").textContent = new Date().getFullYear();
    document.getElementById("last-modified").textContent = "Last Modified: " + document.lastModified;
}

// Run functions when page loads
document.addEventListener("DOMContentLoaded", () => {
    updateWindChill();
    updateFooter();
});
