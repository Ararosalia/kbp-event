const inputField = document.getElementById('inputField');
const keyDisplay = document.getElementById('keyDisplay');

inputField.addEventListener('keydown', function(event) {
    keyDisplay.textContent = `karakter terakhir yang ditekan: ${event.key}`;
});
