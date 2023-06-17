function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
        if (randomNumber === 0) {
            return "Rock"
        } else if (randomNumber === 1) {
            return "Paper"
        } else {
            return "Scissors"
        }
}

const computerSelection = getComputerChoice();

let userSelection = prompt("Do you choose Rock, Paper, or Scissors?");

