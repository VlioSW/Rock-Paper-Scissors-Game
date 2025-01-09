let computerScore = 0;
let humanScore = 0;

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
        humanScore = humanScore + 1;
        console.log(`Your choice : ${humanChoice}`);
        console.log(`Computer choice : ${computerChoice}`);
        message = (`You win ! ${humanChoice} beats ${computerChoice}`);
    }
    else {
        computerScore = computerScore + 1;
        console.log(`Your choice : ${humanChoice}`);
        console.log(`Computer choice : ${computerChoice}`);
        message = (`You lose ! ${computerChoice} beats ${humanChoice}`);
    }

    document.getElementById("gameResult").textContent = resultMessage;
    document.getElementById("scoreBoard").textContent = `You: ${humanScore} | Computer: ${computerScore}`;
}

for (let round = 1; round <= 5; round++) {
    document.querySelector("round").textContent = `Round ${round}`;

    document.getElementById("rockButton").addEventListener("click", function() {
        const humanSelection = "rock";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });
    
    document.getElementById("paperButton").addEventListener("click", function() {
        const humanSelection = "paper";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });
    
    document.getElementById("scissorsButton").addEventListener("click", function() {
        const humanSelection = "scissors";
        const computerSelection = getComputerChoice();
        playRound(computerSelection, humanSelection);
    });
}

if (humanScore > computerScore) {
    console.log(`You win ! ${humanScore} | ${computerScore}`);
}
else if (humanScore < computerScore) {
    console.log(`You lose ! ${computerScore} | ${humanScore}`);
}
else {
    console.log(`Tie ! Score : ${humanScore}`);
}
    

