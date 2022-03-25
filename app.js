const selections = [...document.querySelectorAll('.selection')];
const possibleSelections = ['Rock', 'Paper', 'Scissors'];


const randomChoice = () => {
    random = Math.floor(Math.random() * 3);
    return possibleSelections[random];
}

let result = document.querySelector('.result');
let resultDescription = document.querySelector('.result-description');
let resultsContainer = document.querySelector('.results__container');
let pScore = document.querySelector('.playerScore');
let cScore = document.querySelector('.computerScore')
let playerScore = 0;
let computerScore = 0;
pScore.innerHTML = playerScore;
cScore.innerHTML = computerScore;
const checkWinner = (player, computer) => {

    if(playerScore === 10 || computerScore === 10) {
        alert('Game Ended.')
        return;
    }

    if(resultDescription.innerHTML === "") {
        resultsContainer.style.display = "none";
    }
    
      
    if (player == computer) {
        result.innerHTML = 'Tie!'
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        resultsContainer.style.display = "block";
        result.style.color = "blue";
    }
    if(player == 'Rock' && computer == 'Paper') {
        result.innerHTML = 'Computer Wins!'
        computerScore++;
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        cScore.innerHTML = computerScore;
        resultsContainer.style.display = "block";
        result.style.color = "red";


    }
    if(player == 'Rock' && computer == 'Scissors') {
        result.innerHTML = 'You Win!'
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        playerScore++;
        pScore.innerHTML = playerScore;
        resultsContainer.style.display = "block";
        result.style.color = "green";


    }
    if(player == 'Paper' && computer == 'Rock') {
        result.innerHTML = 'You Win!'
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        playerScore++;
        pScore.innerHTML = playerScore;
        resultsContainer.style.display = "block";
        result.style.color = "green";

    }
    if(player == 'Paper' && computer == 'Scissors') {
        result.innerHTML = 'Computer Wins!'
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        computerScore++;
        cScore.innerHTML = computerScore;
        resultsContainer.style.display = "block";
        result.style.color = "red";

    }
    if(player == 'Scissors' && computer == 'Paper') {
        result.innerHTML = 'You Win!'
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        playerScore++;
        pScore.innerHTML = playerScore;
        resultsContainer.style.display = "block";
        result.style.color = "green";

    }
    if(player == 'Scissors' && computer == 'Rock') {
        result.innerHTML = 'Computer Wins!'
        resultDescription.innerHTML = `You chose ${player} and computer chose ${computer}`
        computerScore++;
        cScore.innerHTML = computerScore;
        resultsContainer.style.display = "block";
        result.style.color = "red";

    }
    
}

selections.map((selection) => {
    let playerSelection = '';
    let computerSelection = '';
    selection.addEventListener('click', (e) => {
        if(e.target.parentNode.classList.value == 'selection rock') {
            playerSelection = 'Rock';
            computerSelection = randomChoice();
            checkWinner(playerSelection, computerSelection);
        }
        else if (e.target.parentNode.classList.value == 'selection paper') {
            playerSelection = 'Paper';
            computerSelection = randomChoice();
            checkWinner(playerSelection, computerSelection);
        }
        else if (e.target.parentNode.classList.value == 'selection scissors') {
            playerSelection = 'Scissors';
            computerSelection = randomChoice();
            checkWinner(playerSelection, computerSelection);
        }
    })
})



