"use strict";

let playerChoice;
let computerChoice;
let decision;
let computerScore = 0;
let playerScore = 0;
let playing = true;

const btnRock = document
  .getElementById("rock")
  .addEventListener("click", function () {
    playerChoice = "rock";
    console.log(playerChoice);
    if (playing) {
      computerMove();
      compareValues();
      resultDeclaration();
    }
    stopGame();
    resetGame();
  });
const btnPaper = document
  .getElementById("paper")
  .addEventListener("click", function () {
    playerChoice = "paper";
    console.log(playerChoice);
    if (playing) {
      computerMove();
      compareValues();
      resultDeclaration();
    }
    stopGame();
    resetGame();
  });
const btnScissors = document
  .getElementById("scissors")
  .addEventListener("click", function () {
    playerChoice = "scissors";
    console.log(playerChoice);
    if (playing) {
      computerMove();
      compareValues();
      resultDeclaration();
    }
    stopGame();
    resetGame();
  });

const btnReset = document.getElementById("reset");

function computerMove() {
  const randomNumber = Math.trunc(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    computerChoice = "rock";
  } else if (randomNumber === 2) {
    computerChoice = "paper";
  } else if (randomNumber === 3) {
    computerChoice = "scissors";
  }
  console.log(computerChoice);
}

function compareValues() {
  if (playerChoice === computerChoice) {
    decision = "it is a tie";
    playerScore = playerScore + 0;
    computerScore = computerScore + 0;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    decision = "player wins";
    playerScore = playerScore + 1;
    computerScore = computerScore + 0;
  } else {
    decision = "computer wins";
    playerScore = playerScore + 0;
    computerScore = computerScore + 1;
  }
  console.log(decision);
  console.log(playerScore);
  console.log(computerScore);
}

function resultDeclaration() {
  if (decision === "it is a tie") {
    document.getElementById(
      "result"
    ).textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
    document.getElementById("final-result").textContent = ` it is a tie👏`;
    document.getElementById("computer--score").textContent = computerScore;
    document.getElementById("player--score").textContent = playerScore;
  } else if (decision === "player wins") {
    document.getElementById(
      "result"
    ).textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
    document.getElementById("final-result").textContent = `you won🎉`;
    document.getElementById("computer--score").textContent = computerScore;
    document.getElementById("player--score").textContent = playerScore;
  } else {
    document.getElementById(
      "result"
    ).textContent = `You chose ${playerChoice} and computer chose ${computerChoice}.`;
    document.getElementById("final-result").textContent = `computer won😁`;
    document.getElementById("computer--score").textContent = computerScore;
    document.getElementById("player--score").textContent = playerScore;
  }
}
function stopGame() {
  if (playerScore >= 5 || computerScore >= 5) {
    playing = false;
    document.getElementById("winner-container").remove.classList("hidden");
  }
}
function resetGame() {
  btnReset.addEventListener("click", function () {
    playerChoice;
    computerChoice;
    decision;
    computerScore = 0;
    playerScore = 0;
    playing = true;

    document.getElementById("result").textContent = ``;
    document.getElementById("final-result").textContent = ``;
    document.getElementById("computer--score").textContent = computerScore;
    document.getElementById("player--score").textContent = playerScore;
  });
}
