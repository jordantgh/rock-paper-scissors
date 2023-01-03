let cpuSelection = {
    owner: 'cpu',
    choice: ''
}

let playerSelection = {
    owner: 'player',
    choice: ''
}

function getComputerChoice() {
    let pick = Math.round(Math.random() * 2);
    switch(pick) {
        case 0:
            cpuSelection.choice = 'rock';
            break;
        case 1:
            cpuSelection.choice = 'paper';
            break;
        case 2:
            cpuSelection.choice = 'scissors';
            break;
    }
}

function playRound(playerSelection, cpuSelection) {
    if (playerSelection.choice === cpuSelection.choice) {
        return "Draw, go again."
    } else {
        let pair = [playerSelection.choice, cpuSelection.choice]
        if (pair.includes("rock") && pair.includes("scissors")) {

        }
    }
}

function game() {

} 

// pseudo
if rock, win condition = scissors
if paper, win condition = rock
if scissors, win condition = paper