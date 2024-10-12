let maximum = 100; // Set a default maximum
const targetNum = Math.floor(Math.random() * maximum) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById('guessInput');
    const messageElement = document.getElementById('message');
    const guess = parseInt(guessInput.value);
    attempts++;

    if (isNaN(guess)) {
        messageElement.textContent = "Please enter a valid number!";
    } else if (guess === targetNum) {
        messageElement.textContent = `You got it! It took you ${attempts} guess${attempts === 1 ? '' : 'es'}.`;
        guessInput.disabled = true;
    } else if (guess > targetNum) {
        messageElement.textContent = "Too high! Try again.";
    } else {
        messageElement.textContent = "Too low! Try again.";
    }

    guessInput.value = '';
    guessInput.focus();
}

// Optional: Add event listener for Enter key
document.getElementById('guessInput').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        checkGuess();
    }
});