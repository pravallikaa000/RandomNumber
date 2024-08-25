function generateRandomNumber() {
    const min = parseInt(document.getElementById('minValue').value);
    const max = parseInt(document.getElementById('maxValue').value);

    if (isNaN(min) || isNaN(max)) {
        alert("Please enter valid numbers for both fields.");
        return;
    }

    if (min > max) {
        alert("Minimum value cannot be greater than Maximum value.");
        return;
    }

    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    document.getElementById('randomNumber').innerText = `Generated Random Number: ${randomNumber}`;
}
