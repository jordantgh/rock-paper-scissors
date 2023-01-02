
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