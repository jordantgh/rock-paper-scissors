let cpuObj = {
    owner: 'cpu',
    choice: ''
}

let playerObj = {
    owner: 'player',
    choice: ''
}

const players = [cpuObj, playerObj]

function getComputerChoice() {
    let pick = Math.round(Math.random() * 2);
    switch(pick) {
        case 0:
            cpuObj.choice = "rock";
            break;
        case 1:
            cpuObj.choice = "paper";
            break;
        case 2:
            cpuObj.choice = "scissors";
            break;
    }
}

function playRound(playerChoice, cpuChoice) {
    console.log(players);
    if (playerChoice === cpuChoice) {
        return "Draw, go again."
    } else {
        let pair = [playerChoice, cpuChoice]
        if (pair.includes("rock") && pair.includes("scissors")) {
            const winner = players.filter(p => p.choice === "rock")[0];
            return winner;
        } else if (pair.includes("paper") && pair.includes("rock")) {
            const winner = players.filter(p => p.choice === "paper")[0];
            return winner;
        } else if (pair.includes("scissors") && pair.includes("paper")) {
            const winner = players.filter(p => p.choice === "scissors")[0];
            return winner;
        }
    }
}

function game() {
    for(let i = 0; i < 5; i++) {
        console.log("Let's play rock paper scissors!");
        getComputerChoice();
        playerObj.choice = prompt("What's your choice?");
        console.log(`You picked ${playerObj.choice}`);
        winner = playRound(playerObj.choice, cpuObj.choice).owner;
        alert(`The winner is ${winner}`);
        console.log(`The winner is ${winner}`);
    }
}

game();