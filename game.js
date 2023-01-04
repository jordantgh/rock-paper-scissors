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
    return ["rock", "paper", "scissors"][pick];
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
        cpuObj.choice  = getComputerChoice();
        playerObj.choice = prompt("What's your choice?");
        console.log(`You picked ${playerObj.choice}`);
        winner = playRound(playerObj.choice, cpuObj.choice).owner;
        alert(`The winner is ${winner}`);
        console.log(`The winner is ${winner}`);
    }
}

game();