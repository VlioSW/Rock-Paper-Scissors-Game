let computerScoreElement = document.getElementById(`computerScore`);
let humanScoreElement = document.getElementById(`humanScore`);
let currentRound = 1;

let computerScore = 0;
let humanScore = 0;

const startButtonElement = document.getElementById(`startButton`);
const buttonElement = document.querySelectorAll(`button`);
const rockButtonElement = document.querySelector(`.rockButton`);
const paperButtonElement = document.querySelector(`.paperButton`);
const scissorsButtonElement = document.querySelector(`.scissorsButton`);
const scoreElement = document.querySelector(`.score`);

const gameResult = document.getElementById(`gameResult`);
const roundElement = document.getElementById(`round`);
const endElement = document.querySelector(`.end`);


function getComputerChoice() {
    const number = Math.random();

    if (number < 0.333) {
        return "rock";
    }
    else if (number < 0.666) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

function playRound(computerChoice, humanChoice) {
    computerChoice = computerChoice.toLowerCase();
    humanChoice = humanChoice.toLowerCase();
    let message = ``;

    if (computerChoice === humanChoice) {
        message = (`It's a tie ! Same choice ${humanChoice}`);
    }
    else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice == "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
        humanScore++;
        console.log(`Your choice : ${humanChoice}`);
        console.log(`Computer choice : ${computerChoice}`);
        message = (`You win ! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore++;
        console.log(`Your choice : ${humanChoice}`);
        console.log(`Computer choice : ${computerChoice}`);
        message = (`You lose ! ${computerChoice} beats ${humanChoice}`);
    }

    gameResult.innerText = message;
    humanScoreElement.innerText = humanScore;
    computerScoreElement.innerText = computerScore;
    roundElement.innerText = currentRound;

    if (humanScore === 5 || computerScore === 5) {
        endGame();
    }
}

function endGame() {
    scoreElement.style.display = `none`;
    rockButtonElement.disabled = true;
    paperButtonElement.disabled = true;
    scissorsButtonElement.disabled = true;

    if (humanScore === 5) {
        endElement.innerText = `You win! Score: ${humanScore} | ${computerScore}`;
    } else if (computerScore === 5) {
        endElement.innerText = `Game Over! You lose! Score: ${computerScore} | ${humanScore}`;
    }

    startButtonElement.disabled = false;
}

function startGame() {
    humanScore = 0;
    computerScore = 0;
    currentRound = 1;
    humanScoreElement.innerText = humanScore;
    computerScoreElement.innerText = computerScore;
    scoreElement.style.display = `block`;
    roundElement.innerText = currentRound;
    gameResult.innerText = '';
    endElement.innerText = '';

    rockButtonElement.disabled = false;
    paperButtonElement.disabled = false;
    scissorsButtonElement.disabled = false;

    startButtonElement.disabled = true;


    rockButtonElement.addEventListener("click", function() {
        const humanSelection = "rock";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        currentRound++;
    });
    
    paperButtonElement.addEventListener("click", function() {
        const humanSelection = "paper";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        currentRound++;
    });
    
    scissorsButtonElement.addEventListener("click", function() {
        const humanSelection = "scissors";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
        currentRound++;
    });
    
}

startButtonElement.addEventListener("click", function() {
    startGame();
})