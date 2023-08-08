let possibleChoices = ["rock", "paper", "scissors"];
let pointsComputer = 0;
let pointsPlayer = 0;

const scoreTracker = document.querySelector('.scoreTracker');
const scoreTrackerPlayer = document.querySelector('.scorePlayer');
const scoreTrackerComputer = document.querySelector('.scoreComp');






//Generates a random int number between 0 and 3 (excl.) and looks up the index in the array of choices
function getComputerChoice(){
    let choiceIndex = Math.floor(Math.random() * 3);
    return possibleChoices[choiceIndex];
}

function addPoint(winner){
    if (winner == "Computer") {
        pointsComputer++;
    }
    else if (winner == "Player"){
        pointsPlayer++;
    }
    updateScore();
    if (pointsComputer == 5 || pointsPlayer == 5){
        announceWinner();
        removeButtons();
    }
}

function announceWinner(){
    let winnerMessage = pointsComputer == 5 ? "Computer wins!" : "Player wins!";
    
    let announcementOfWinner = document.createElement('h2');
    announcementOfWinner.textContent = winnerMessage;
    scoreTracker.appendChild(announcementOfWinner);
}

function playRound(player){
    let comp = getComputerChoice().toLowerCase();
    console.log(`Computer: ${comp} || Player: ${player}`);
    
    if (player == comp){
        console.log("It's a tie!");
        return;
        }
    switch (comp) {
        case "rock":{
            if (player == "paper"){
                addPoint("Player");
                break;
            }
            else if (player == "scissors"){
                addPoint("Computer");
                break;
            }
        
        }
        case "paper":
            {
            if (player == "scissors"){
                addPoint("Player");
                break;
            }
            else if (player == "rock"){
                addPoint("Computer");
                break;
            }
        }
        case "scissors":{
            if (player == "rock"){
                addPoint("Player");
                break;
            }
            else if (player == "paper"){
                addPoint("Computer");
                break;
            }
        }
    }
    
}

function updateScore(){
    scoreTrackerPlayer.textContent = pointsPlayer;
    scoreTrackerComputer.textContent = pointsComputer;
}

function removeButtons(){
    let buttons = document.getElementById("buttons");
    
    while (buttons.firstChild){
        buttons.removeChild(buttons.firstChild);
    }

    let restartButton = document.createElement('button')
    restartButton.className = 'playButtons';
    restartButton.innerText = "Play again";
    restartButton.addEventListener('click', function(){
        window.location.reload();
    });
    buttons.appendChild(restartButton);
    
}

const buttonRockPlayer = document.querySelector('#rockButtonPlayer');
buttonRockPlayer.addEventListener('click', function(e){
    playRound('rock');    
});

const buttonScissorsPlayer = document.querySelector('#scissorsButtonPlayer');
buttonScissorsPlayer.addEventListener('click', function(e){
    playRound('scissors');
});

const buttonPaperPlayer = document.querySelector('#paperButtonPlayer');
buttonPaperPlayer.addEventListener('click', function(e){
    playRound('paper');
});



