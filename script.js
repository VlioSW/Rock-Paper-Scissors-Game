function playGame() {

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

    function getHumanChoice() {
        let userChoice = prompt("Choose between 'rock', 'paper' or 'scissors'");
        userChoice = userChoice.toLowerCase();

        while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
            userChoice = prompt("Invalid imput. Choose between 'rock', 'paper' or 'scissors'");
        }

        return userChoice;
    }

    function playRound(computerChoice, humanChoice) {
        computerChoice = computerChoice.toLowerCase();
        humanChoice = humanChoice.toLowerCase();

        if (computerChoice === humanChoice) {
            console.log(`It's a tie ! Same choice ${humanChoice}`);
        }
        else if ((humanChoice === "rock" && computerChoice === "scissors") || (humanChoice === "paper" && computerChoice == "rock") || (humanChoice === "scissors" && computerChoice === "paper")) {
            humanScore = humanScore + 1;
            console.log(`Your choice : ${humanChoice}`);
            console.log(`Computer choice : ${computerChoice}`);
            console.log(`You win ! ${humanChoice} beats ${computerChoice}`);
        }
        else {
            computerScore = computerScore + 1;
            console.log(`Your choice : ${humanChoice}`);
            console.log(`Computer choice : ${computerChoice}`);
            console.log(`You lose ! ${computerChoice} beats ${humanChoice}`);
        }
    }

    for (let round = 1; round <= 5; round++) {
        console.log(`Round ${round}`);

        const computerSelection = getComputerChoice();
        const humanSelection = getHumanChoice();

        playRound(computerSelection, humanSelection);
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
    
}

playGame();