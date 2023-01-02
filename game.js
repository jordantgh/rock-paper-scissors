
function getComputerChoice() {
    let pick = Math.round(Math.random() * 2);
    switch(pick) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function playRound(player, cpu) {
    if (player === cpu) {
        print("Draw, go again.")
    }

}

function game() {

} 

// pseudo
if rock, win condition = scissors
if paper, win condition = rock
if scissors, win condition = paper