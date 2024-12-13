let wins = 0;
let losses = 0;
let draws = 0;

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function determineOutcome(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "Draw";
    } else if (
        (userChoice === "Rock" && computerChoice === "Scissors") ||
        (userChoice === "Paper" && computerChoice === "Rock") ||
        (userChoice === "Scissors" && computerChoice === "Paper")
    ) {
        return "Win";
    } else {
        return "Loss";
    }
}

function playRound(userChoice) {
    const computerChoice = getComputerChoice();
    const outcome = determineOutcome(userChoice, computerChoice);

    if (outcome === "Win") { 
        wins++;
    } else if (outcome === "Loss") {
        losses++;
    } else {
        draws++;
    }

    console.log(`User Choice: ${userChoice}`);
    console.log(`Computer Choice: ${computerChoice}`);
    console.log(`Outcome: ${outcome}`);

    document.getElementById("user-choice").textContent = `Your Choice: ${userChoice}`;
    document.getElementById("computer-choice").textContent = `Computer's Choice: ${computerChoice}`;
    document.getElementById("result").textContent = `Result: ${outcome}`;
    document.getElementById("wins").textContent = `Wins: ${wins}`;
    document.getElementById("losses").textContent = `Losses: ${losses}`;
    document.getElementById("draws").textContent = `Draws: ${draws}`;
}

function resetGame() {
    wins = 0;
    losses = 0;
    draws = 0;

    console.log("Game reset.");

    document.getElementById("wins").textContent = "Wins: 0";
    document.getElementById("losses").textContent = "Losses: 0";
    document.getElementById("draws").textContent = "Draws: 0";
    document.getElementById("user-choice").textContent = "Your Choice: ";
    document.getElementById("computer-choice").textContent = "Computer's Choice: ";
    document.getElementById("result").textContent = "Result: ";
}

document.getElementById("rock").addEventListener("click", () => playRound("Rock"));
document.getElementById("paper").addEventListener("click", () => playRound("Paper"));
document.getElementById("scissors").addEventListener("click", () => playRound("Scissors"));

document.getElementById("reset").addEventListener("click", resetGame);
