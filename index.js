const convertBtn = document.getElementById("convert-btn");
const inputValue = document.getElementById("input-value");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");
const massResult = document.getElementById("mass-result");

convertBtn.addEventListener("click", () => {
    const value = parseFloat(inputValue.value);
    if (isNaN(value)) {
        alert("Please enter a valid number");
        return;
    }

    // Length Conversion
    const metersToFeet = (value * 3.281).toFixed(3);
    const feetToMeters = (value / 3.281).toFixed(3);
    lengthResult.textContent = `${value} meters = ${metersToFeet} feet | ${value} feet = ${feetToMeters} meters`;

    // Volume Conversion
    const litersToGallons = (value * 0.264).toFixed(3);
    const gallonsToLiters = (value / 0.264).toFixed(3);
    volumeResult.textContent = `${value} liters = ${litersToGallons} gallons | ${value} gallons = ${gallonsToLiters} liters`;

    // Mass Conversion
    const kilosToPounds = (value * 2.204).toFixed(3);
    const poundsToKilos = (value / 2.204).toFixed(3);
    massResult.textContent = `${value} kilograms = ${kilosToPounds} pounds | ${value} pounds = ${poundsToKilos} kilograms`;
});
