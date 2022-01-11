const computerPlay = (min = 1, max = 4) => {
    return Math.floor(Math.random() * (max - min) + min);
}
console.log('1 = Scissors, 2 = Paper, 3 = Rock\n');

function playRound(playerSelection, computerSelection) {

}

const playerSelection = "rock";
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));