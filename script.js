let possibleChoices = ["rock", "paper", "scissors"];
let pointsComputer = 0;
let pointsPlayer = 0;

const scoreTracker = document.getElementById("scoreTracker");
const scoreTrackerPlayer = document.getElementById("playerScore");
const scoreTrackerComputer = document.getElementById("computerScore");
const selectionPlayerDiv = document.getElementById("selectionPlayer");
const selectionComputerDiv = document.getElementById("selectionComputer");
const resultDiv = document.getElementById("result");

//Generates a random int number between 0 and 3 (excl.) and looks up the index in the array of choices
function getComputerChoice() {
  let choiceIndex = Math.floor(Math.random() * 3);
  return possibleChoices[choiceIndex];
}

function addPoint(winner) {
  if (winner == "Computer") {
    selectionComputerDiv.style.outline = "2px solid darkslategrey";
    selectionComputerDiv.style.backgroundColor = "red";
    resultDiv.textContent = "Computer wins round!";
    pointsComputer++;
  } else if (winner == "Player") {
    selectionPlayerDiv.style.outline = "2px solid darkslategrey";
    selectionPlayerDiv.style.backgroundColor = "greenyellow";
    resultDiv.textContent = "Player wins round!";
    pointsPlayer++;
  }
  updateScore();
  if (pointsComputer == 5 || pointsPlayer == 5) {
    announceWinner();
    removeButtons();
  }
}

function clearOutlines() {
  selectionPlayerDiv.style.outline = "none";
  selectionComputerDiv.style.outline = "none";
  selectionComputerDiv.style.backgroundColor = "";
  selectionPlayerDiv.style.backgroundColor = "";
}

function announceWinner() {
  let winnerMessage =
    pointsComputer == 5 ? "Computer wins the game!" : "Player wins the game!";

  resultDiv.textContent = winnerMessage;

  resultDiv.classList.add("celebrate");
}

function playRound(playerSelection) {
  clearOutlines();
  let comp = getComputerChoice().toLowerCase();
  updateSelections(playerSelection, comp);

  if (playerSelection == comp) {
    resultDiv.textContent = "It's a tie!";
    return;
  }
  switch (comp) {
    case "rock": {
      if (playerSelection == "paper") {
        addPoint("Player");
        break;
      } else if (playerSelection == "scissors") {
        addPoint("Computer");
        break;
      }
    }
    case "paper": {
      if (playerSelection == "scissors") {
        addPoint("Player");
        break;
      } else if (playerSelection == "rock") {
        addPoint("Computer");
        break;
      }
    }
    case "scissors": {
      if (playerSelection == "rock") {
        addPoint("Player");
        break;
      } else if (playerSelection == "paper") {
        addPoint("Computer");
        break;
      }
    }
  }
}

function updateScore() {
  scoreTrackerPlayer.textContent = pointsPlayer;
  scoreTrackerComputer.textContent = pointsComputer;
}

function removeButtons() {
  let buttons = document.getElementById("buttons");

  while (buttons.firstChild) {
    buttons.removeChild(buttons.firstChild);
  }

  let restartButton = document.createElement("button");
  restartButton.className = "playButton";
  restartButton.innerText = "Play again";
  restartButton.addEventListener("click", function () {
    window.location.reload();
  });
  buttons.appendChild(restartButton);
}

function updateSelections(playerSelection, computerSelection) {
  selectionPlayerDiv.style.backgroundImage = `url(./assets/${playerSelection}.svg)`;
  selectionComputerDiv.style.backgroundImage = `url(./assets/${computerSelection}.svg)`;
}

const buttonRockPlayer = document.querySelector("#rockButtonPlayer");
buttonRockPlayer.addEventListener("click", function (e) {
  playRound("rock");
});

const buttonScissorsPlayer = document.querySelector("#scissorsButtonPlayer");
buttonScissorsPlayer.addEventListener("click", function (e) {
  playRound("scissors");
});

const buttonPaperPlayer = document.querySelector("#paperButtonPlayer");
buttonPaperPlayer.addEventListener("click", function (e) {
  playRound("paper");
});
