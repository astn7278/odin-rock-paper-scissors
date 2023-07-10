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

const tieString = "Tie Game. ";
const winString = "You win! ";
const loseString = "You lose... ";
//create win/lose/tie variables

let playerScore = 0;
let computerScore = 0;
//create player/computer scores for tracking wins

function playRound(playerSelection, computerSelection) {
    //playerSelection = prompt("Do you choose Rock, Paper, or Scissors?");
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

const btnRock = document.querySelector('.buttonRock');
const btnPaper = document.querySelector('.buttonPaper');
const btnScissors = document.querySelector('.buttonScissors');
const divResults = document.querySelector('.divResults');

/*
const content = document.createElement('p');
content.textContent = 'Hello world!';
divResults.appendChild(content);
*/

btnRock.addEventListener('click', () => {
    const content = document.createElement('p');
    content.textContent = (playRound("rock", getComputerChoice()));
    divResults.appendChild(content);
})

btnPaper.addEventListener('click', () => {
    const content = document.createElement('p');
    content.textContent = (playRound("paper", getComputerChoice()));
    divResults.appendChild(content);
})

btnScissors.addEventListener('click', () => {
    const content = document.createElement('p');
    content.textContent = (playRound("scissors", getComputerChoice()));
    divResults.appendChild(content);
})

//game engine comparing playerSelection vs computerSelection 
//increments playerScore and computerScore

/*
function game() {
    console.log(playRound(playerSelection, getComputerChoice()));
    console.log(playRound(playerSelection, getComputerChoice()));
    console.log(playRound(playerSelection, getComputerChoice()));
    console.log(playRound(playerSelection, getComputerChoice()));
    console.log(playRound(playerSelection, getComputerChoice()));
    if (playerScore > computerScore) {
        alert("You won the game! Player = " + playerScore + " Computer = " + computerScore)
    }   else if (playerScore < computerScore) {
        alert("You lost the game... Player = " + playerScore + " Computer = " + computerScore)
    }   else {
        alert("It was a tie game. Player = " + playerScore + " Computer = " + computerScore)
    }
}
//creates 5-round game and compares playerScore and computerScore at end

game();
//runs game on browser load

*/
    

