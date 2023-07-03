document.addEventListener("DOMContentLoaded", function () {
  const choices = ["rock", "paper", "scissors"];

  const playerChoiceElement = document.getElementById("player-choice");
  const computerChoiceElement = document.getElementById("computer-choice");
  const resultElement = document.getElementById("result");

  document.getElementById("rock").addEventListener("click", function () {
    playGame("rock");
  });

  document.getElementById("paper").addEventListener("click", function () {
    playGame("paper");
  });

  document.getElementById("scissors").addEventListener("click", function () {
    playGame("scissors");
  });

  function computerChoice() {
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  function playGame(playerChoice) {
    const computerChoiceValue = computerChoice();
    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoiceValue;

    if (playerChoice === computerChoiceValue) {
      resultElement.textContent = "Hasil: Seri!";
    } else if ((playerChoice === "rock" && computerChoiceValue === "scissors") || (playerChoice === "paper" && computerChoiceValue === "rock") || (playerChoice === "scissors" && computerChoiceValue === "paper")) {
      resultElement.textContent = "Hasil: Anda Menang!";
    } else {
      resultElement.textContent = "Hasil: Anda Kalah!";
    }
  }
});
