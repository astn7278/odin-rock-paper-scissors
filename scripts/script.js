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

let playerSelection = prompt("Do you choose Rock, Paper, or Scissors?");

let tieString = "Tie Game. ";
let winString = "You win! ";
let loseString = "You lose... ";

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase () === "rock" && computerSelection === "Rock") {
        return(tieString + "Rock = Rock.")
    }

    else if (playerSelection.toLowerCase () === "paper" && computerSelection === "Paper") {
        return(tieString + "Paper = Paper.")
    }

    else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "Scissors") {
        return(tieString + "Scissors = Scissors.")
    }

    else if (playerSelection.toLowerCase () === "rock" && computerSelection === "Paper") {
        ++computerScore;
        return(loseString + "Paper beats Rock.")
    }

    else if (playerSelection.toLowerCase () === "paper" && computerSelection === "Scissors") {
        ++computerScore;
        return(loseString + "Scissors beats Paper.")
    }

    else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "Rock") {
        ++computerScore;
        return(loseString + "Rock beats Scissors.")
    }

    else if (playerSelection.toLowerCase () === "rock" && computerSelection === "Scissors") {
        ++userScore;
        return(winString + "Rock beats Scissors.");
    }

    else if (playerSelection.toLowerCase () === "paper" && computerSelection === "Rock") {
        ++userScore;
        return(winString + "Paper beats Rock.");      
    }

    else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "Paper") {
        ++userScore;
        return(winString + "Scissors beats Paper.");
    }
}

