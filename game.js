let cpuObj = {
    owner: 'CPU',
    choice: ''
}

let playerObj = {
    owner: 'player',
    choice: ''
}

// Slight hack since I access .owner property in the "winner" return
let drawObj = {
    owner: 'no one'
}

const players = [cpuObj, playerObj]

function getComputerChoice() {
    let pick = Math.round(Math.random() * 2);
    return ["rock", "paper", "scissors"][pick];
}

function playRound(playerChoice, cpuChoice) {
    console.log(players);
    if (playerChoice === cpuChoice) {
        return drawObj;
    } else {
        let pair = [playerChoice, cpuChoice]
        if (pair.includes("rock") && pair.includes("scissors")) {
            return players.filter(p => p.choice === "rock")[0];
        } else if (pair.includes("paper") && pair.includes("rock")) {
            return players.filter(p => p.choice === "paper")[0];
        } else if (pair.includes("scissors") && pair.includes("paper")) {
            return players.filter(p => p.choice === "scissors")[0];
        }
    }
}

function game() {
    var p = 0;
    var c = 0;

    for(let i = 0; i < 5; i++) {
        cpuObj.choice  = getComputerChoice();
        playerObj.choice = prompt("What's your choice?").toLowerCase();
        winner = playRound(playerObj.choice, cpuObj.choice).owner;
        alert(`Player chose ${playerObj.choice} while CPU chose ${cpuObj.choice}, so ${winner} wins this round`);
        
        switch(winner) {
            case "player":
                p++;
                break;
            case "CPU":
                c++;
                break;
            case "no one":
                break;
        }
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