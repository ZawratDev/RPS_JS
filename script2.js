// function createPlBtn() {
//     const parent = document.querySelector('.options');
//     const rock = document.createElement("button");
//     const paper = document.createElement("button");
//     const scissors = document.createElement("button");
//     rock.classList.add('choice');
//     rock.setAttribute('id', 'rock');
//     paper.classList.add('choice');
//     paper.setAttribute('id', 'paper');
//     scissors.classList.add('choice');
//     scissors.setAttribute('id', 'scissors');
//     rock.textContent = "Rock";
//     paper.textContent = "Paper";
//     scissors.textContent = "Scissors";
//     parent.appendChild(rock);
//     parent.appendChild(paper);
//     parent.appendChild(scissors);
//     once: true;
// }
// playButton.addEventListener('click', createPlBtn, {
//     once: true
// });
const parent = document.querySelector('.options');
const rock = document.createElement("button");
const paper = document.createElement("button");
const scissors = document.createElement("button");
rock.classList.add('choice');
rock.setAttribute('id', 'rock');
paper.classList.add('choice');
paper.setAttribute('id', 'paper');
scissors.classList.add('choice');
scissors.setAttribute('id', 'scissors');
rock.textContent = "Rock";
paper.textContent = "Paper";
scissors.textContent = "Scissors";
parent.appendChild(rock);
parent.appendChild(paper);
parent.appendChild(scissors);
let gameButtons = document.querySelectorAll('.choice');
let playerInput;
let playerScore = 0;
let computerScore = 0;
gameButtons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
        if (playerScore === 5 || computerScore === 5) {
(playerScore > computerScore) ? console.log(`Congratulations! You won with score = ${playerScore} vs ${computerScore}!`): console.log(`Bad luck! You lose with score = ${playerScore} vs ${computerScore}!`);
        playerScore = 0;
        computerScore = 0;
        }
    }); 
}); 
function playRound(playerChoice) {
    function computerPlay() {
        const list = ['rock', 'paper', 'scissors'];
        let type = Math.floor(Math.random() * list.length);
        return list[type];
    }
    computerSelection = computerPlay()
    console.log(playerChoice);
    console.log(computerSelection);

    if (computerSelection === 'rock') {
        switch (playerChoice) {
            case 'rock':
                console.log ("It's a draw! There is no winner when rock is played versus rock!");
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
        switch (playerChoice) {
            case 'rock':
                console.log ("You lose! Your rock has got kicked by the paper!");
                ++computerScore;
                break;
            case 'paper': 
                console.log ("It's a draw! There is no winner when paper is played versus paper!");
                break;
            case 'scissors': 
                console.log ("You win! Your scissors beats the paper!");
                ++playerScore;
                break;
        }
    } else if (computerSelection === 'scissors') {
        switch (playerChoice) {
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
                break;
        }
    }
    console.log(`Your score: ${playerScore}`);
    console.log(`Computer score: ${computerScore}`);
}
const playButton = document.querySelector('.play');
// Wywolywanie gry 
rockChoice = document.querySelector('#rock');
console.log(rockChoice);
playButton.addEventListener('click', function playGame() {
    playRound();
});