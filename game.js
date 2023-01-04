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
        const winner = "No one." 
        return winner; // Not working atm
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
        cpuObj.choice  = getComputerChoice();
        playerObj.choice = prompt("What's your choice?");
        
        winner = playRound(playerObj.choice, cpuObj.choice).owner;
        alert(`${winner} wins this round`);
        
        var p = 0;
        var c = 0;

        if (winner = "player") { p++ } else if (winner = "cpu") { c++ }
    }

    if(p > c) {
        alert("Player is the overall winner!");
    } else if (c > p) {
        alert("CPU is the overall winner!");
    } else {
        alert("Draw!");
    }
}

game();