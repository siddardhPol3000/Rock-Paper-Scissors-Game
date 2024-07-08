let userScore = 0; // Initialize user score to 0
let computerScore = 0; // Initialize computer score to 0

// Get all elements with class "choice" (rock, paper, scissors) and the message element
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

// Get elements where the scores will be displayed
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#com-score");

// Function to generate a random choice for the computer
const genComChoice = () => {
    const options = ["rock", "paper", "scissors"]; // Possible choices
    const randIdx = Math.floor(Math.random() * 3); // Generate a random index between 0 and 2
    return options[randIdx]; // Return the random choice
}

// Function to handle a draw game
const drawGame = () => {
    msg.innerText = "Game was draw"; // Update the message to indicate a draw
    msg.style.backgroundColor = "#081b31"; // Change the message background color to the original color
}

// Function to update the scores and message based on the game result
const showWinnner = (userWin, userChoice, comChoice) => {
    if (userWin) {
        userScore++; // Increment the user score
        userScorePara.innerText = userScore; // Update the user score on the screen
        msg.innerText = `You win!! ${userChoice} beats ${comChoice}`; // Update the message to indicate the user won
        msg.style.backgroundColor = "green"; // Change the message background color to green
    } else {
        computerScore++; // Increment the computer score
        compScorePara.innerText = computerScore; // Update the computer score on the screen
        msg.innerText = `You lost. ${comChoice} beats your ${userChoice}`; // Update the message to indicate the user lost
        msg.style.backgroundColor = "red"; // Change the message background color to red
    }
}

// Function to play the game when the user makes a choice
const playGame = (userChoice) => {
    const comChoice = genComChoice(); // Generate a random choice for the computer

    if (userChoice === comChoice) {
        drawGame(); // If both choices are the same, it's a draw
    } else {
        let userWin = true; // Assume user wins initially
        if (userChoice === "rock") {
            userWin = comChoice === "scissors"; // Rock beats scissors
        } else if (userChoice === "paper") {
            userWin = comChoice === "rock"; // Paper beats rock
        } else {
            userWin = comChoice === "paper"; // Scissors beat paper
        }
        showWinnner(userWin, userChoice, comChoice); // Update the scores and message based on the result
    }
};

// Add event listeners to each choice element to handle user clicks
choices.forEach((choice) => {
    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id"); // Get the id of the clicked element (rock, paper, or scissors)
        playGame(userChoice); // Play the game with the user's choice
    });
});
