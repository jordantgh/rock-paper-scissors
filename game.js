// We use objects to link owner+choice, so we can easily return the owner of the
// winning choice
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

// Compares the player vs CPU choice
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

const winContainer = document.querySelector("#win-msg-container");
const winDisplay = document.createElement("p");
winDisplay.id = "winner-display";

let buttons = document.querySelectorAll("button");

// Add listeners for each button
// On click, compare player vs CPU and output winner
buttons.forEach(b => {
    b.addEventListener("click", (event) => {
        cpuObj.choice = getComputerChoice();
        playerObj.choice = event.currentTarget.id;
        winner = playRound(playerObj.choice, cpuObj.choice).owner;
        winDisplay.textContent = `${winner} wins!`;
        winContainer.append(winDisplay);
    })
})