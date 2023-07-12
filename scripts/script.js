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
//create random computer selection of rock, paper, scissors.

let computerSelection = getComputerChoice();
//assign getComputerChoice function to variable

let playerSelection;
//create playerSelection variable


//create win/lose/tie variables

let playerScore = 0;
let computerScore = 0;
//create player/computer scores for tracking wins

function playRound(playerSelection, computerSelection) {
    //playerSelection = prompt("Do you choose Rock, Paper, or Scissors?");
    const tieString = "Tie Game. ";
    const winString = "You win! ";
    const loseString = "You lose... ";
    if (playerSelection.toLowerCase () === "rock" && computerSelection === "Rock") {
        return(tieString + "Rock = Rock.");
    }
    else if (playerSelection.toLowerCase () === "paper" && computerSelection === "Paper") {
        return(tieString + "Paper = Paper.");
    }
    else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "Scissors") {
        return(tieString + "Scissors = Scissors.");
    }
    else if (playerSelection.toLowerCase () === "rock" && computerSelection === "Paper") {
        ++computerScore;
        return(loseString + "Paper beats Rock.");
    }
    else if (playerSelection.toLowerCase () === "paper" && computerSelection === "Scissors") {
        ++computerScore;
        return(loseString + "Scissors beats Paper.");
    }
    else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "Rock") {
        ++computerScore;
        return(loseString + "Rock beats Scissors.");
    }
    else if (playerSelection.toLowerCase () === "rock" && computerSelection === "Scissors") {
        ++playerScore;
        return(winString + "Rock beats Scissors.");
    }
    else if (playerSelection.toLowerCase () === "paper" && computerSelection === "Rock") {
        ++playerScore;
        return(winString + "Paper beats Rock.");      
    }
    else if (playerSelection.toLowerCase () === "scissors" && computerSelection === "Paper") {
        ++playerScore;
        return(winString + "Scissors beats Paper.");
    }
}
//game engine comparing playerSelection vs computerSelection 
//increments playerScore and computerScore


const btnRock = document.querySelector('.buttonRock');
const btnPaper = document.querySelector('.buttonPaper');
const btnScissors = document.querySelector('.buttonScissors');
const roundResults = document.querySelector('.roundResults');
const cpuScoreDisplay = document.querySelector('.cpuScoreDisplay')
const playerScoreDisplay = document.querySelector('.playerScoreDisplay')
const gameWinnerDisplay = document.querySelector('.gameWinnerDisplay')
//defining querySelectors

btnRock.addEventListener('click', function rockGame() {
    roundResults.textContent = (playRound("rock", getComputerChoice()));
    cpuScoreDisplay.textContent = `Computer Score is ${computerScore}`;
    playerScoreDisplay.textContent = `Player Score is ${playerScore}`;
    if (playerScore >= 5) {
        gameWinnerDisplay.textContent = "Player wins!";
        btnRock.removeEventListener('click', rockGame);
    } 
    else if (computerScore >= 5) {
        gameWinnerDisplay.textContent = "Computer wins!";
        btnRock.removeEventListener('click', rockGame);
    }  
})

btnPaper.addEventListener('click', function paperGame() {
    roundResults.textContent = (playRound("paper", getComputerChoice()));
    cpuScoreDisplay.textContent = `Computer Score is ${computerScore}`;
    playerScoreDisplay.textContent = `Player Score is ${playerScore}`;
    if (playerScore >= 5) {
        gameWinnerDisplay.textContent = "Player wins!";
        btnPaper.removeEventListener('click', paperGame);
    } 
    else if (computerScore >= 5) {
        gameWinnerDisplay.textContent = "Computer wins!";
        btnPaper.removeEventListener('click', paperGame);
    }
})

btnScissors.addEventListener('click', function scissorGame() {
    roundResults.textContent = (playRound("scissors", getComputerChoice()));
    cpuScoreDisplay.textContent = `Computer Score is ${computerScore}`;
    playerScoreDisplay.textContent = `Player Score is ${playerScore}`;
    if (playerScore >= 5) {
        gameWinnerDisplay.textContent = "Player wins!";
        btnScissors.removeEventListener('click', scissorGame);
    } 
    else if (computerScore >= 5) {
        gameWinnerDisplay.textContent = "Computer wins!";
        btnScissors.removeEventListener('click', scissorGame);
    }
})

    

