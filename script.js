let possibleChoices = ["rock", "paper", "scissors"];
let pointsComputer = 0;
let pointsPlayer = 0;

//Generates a random int number between 0 and 3 (excl.) and looks up the index in the array of choices
function getComputerChoice(){
    let choiceIndex = Math.floor(Math.random() * 3);
    return possibleChoices[choiceIndex];
}

function getPlayerChoice(){
    let playerChoice = prompt("Enter choice: ");
    playerChoice = playerChoice.toLowerCase();
    while (playerChoice != "rock" && playerChoice != "paper" && playerChoice !="scissors"){
        playerChoice = prompt("Incorrect entry. Enter again: ");
    }
    return playerChoice;

}

function addPoint(winner){
    if (winner == "Computer") {
        pointsComputer++;
    }
    else if (winner == "Player"){
        pointsPlayer++;
    }
    
}

function playRound(){
    let comp = getComputerChoice().toLowerCase();
    let player = getPlayerChoice();
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
            else{
                console.log(`comp: ${comp} | player: ${player}`);
                console.log("It's a tie!");
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
            else{
                console.log(`comp: ${comp} | player: ${player}`);
                console.log("It's a tie!");
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
            else{
                console.log(`comp: ${comp} | player: ${player}`);
                console.log("It's a tie!");
                break;
            }
        }
    }
    console.log(`comp: ${comp} | player: ${player}`);
}

do{
    playRound();
    console.log(`comp points: ${pointsComputer} | player points ${pointsPlayer}`);
}
while (pointsComputer < 5 && pointsPlayer < 5)