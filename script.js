function playRound() {
    console.log("Hello! Let's play a Rock/Paper/Scissors game!")
    function computerPlay() {
        const list = ['rock', 'paper', 'scissors'];
        let type = Math.floor(Math.random() * list.length);
        return list[type];
    }
    playerScore = 0;
    computerScore = 0;
    for (let round = 1; round < 6; ++round) {
        console.log(`Your score: ${playerScore}`);
        console.log(`Computer score: ${computerScore}`);
        computerSelection = computerPlay()
        let i = 0;
        while (i == 0) {
            let playerInput = prompt("Rock, paper, or maybe scissors? Type here:")
            playerCorrInput = playerInput.toLowerCase();
            if (playerCorrInput == 'rock' || playerCorrInput == 'scissors' || playerCorrInput == 'paper') {
                i += i;
                break;
            } else {
                i = 0;
            }
        }
        console.log(playerCorrInput);
        console.log(computerSelection);

        if (computerSelection === 'rock') {
            switch (playerCorrInput) {
                case 'rock':
                    console.log ("It's a draw! There is no winner when rock is played versus rock!");
                    --round;
                    break;
                case 'paper': 
                    console.log ("You win! Your paper beats the rock!");
                    ++playerScore;
                    break;
                case 'scissors': 
                    console.log ("You lose! Your scissors has got kicked by the rock!");
                    ++computerScore;
                    break;
            }
        } else if (computerSelection === 'paper') {
            switch (playerCorrInput) {
                case 'rock':
                    console.log ("You lose! Your rock has got kicked by the paper!");
                    ++computerScore;
                    break;
                case 'paper': 
                    console.log ("It's a draw! There is no winner when paper is played versus paper!");
                    --round;
                    break;
                case 'scissors': 
                    console.log ("You win! Your scissors beats the paper!");
                    ++playerScore;
                    break;
            }
        } else if (computerSelection === 'scissors') {
            switch (playerCorrInput) {
                case 'rock':
                    console.log ("You win! Your rock beats the scissors!");
                    ++playerScore;
                    break;
                case 'paper': 
                    console.log ("You lose! Your paper has got kicked by the scissors!");
                    ++computerScore;
                    break;
                case 'scissors': 
                    console.log ("It's a draw! There is no winner when scissors is played versus scissors!");
                    --round;
                    break;
            }
        }
    }
    (playerScore > computerScore) ? console.log(`Congratulations! You won with score = ${playerScore} vs ${computerScore}!`): console.log(`Bad luck! You lose with score = ${playerScore} vs ${computerScore}!`);
}

const playButton = document.querySelector('.play');
function createPlBtn() {
    const parent = document.querySelector('.options');
    const rock = document.createElement("button");
    const paper = document.createElement("button");
    const scissors = document.createElement("button");
    rock.classList.add('choice');
    paper.classList.add('choice');
    scissors.classList.add('choice');
    rock.textContent = "Rock";
    paper.textContent = "Paper";
    scissors.textContent = "Scissors";
    parent.appendChild(rock);
    parent.appendChild(paper);
    parent.appendChild(scissors);
    once: true;
}
playButton.addEventListener('click', createPlBtn, {
    once: true
});