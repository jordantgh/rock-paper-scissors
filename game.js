let cpuObj = {
    owner: 'cpu',
    choice: ''
}

let playerObj = {
    owner: 'player',
    choice: ''
}

const players = {
    pc: cpuObj,
    human: playerObj
}

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

function playRound(playerObj, cpuObj) {
    if (playerObj.choice === cpuObj.choice) {
        return "Draw, go again."
    } else {
        let pair = [playerObj.choice, cpuObj.choice]
        if (pair.includes("rock") && pair.includes("scissors")) {
            const winner = players.filter(p => p.choice === "rock");
            return winner;
        } else if (pair.includes("paper") && pair.includes("rock")) {
            const winner = players.filter(p => p.choice === "paper");
            return winner;
        } else if (pair.includes("scissors") && pair.includes("paper")) {
            const winner = players.filter(p => p.choice === "scissors");
            return winner;
        }
    }
}

function game() {

}

//if (pair.includes("rock") && pair.includes("scissors"))