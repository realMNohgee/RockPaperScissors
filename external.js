const computerPlay = (min = 1, max = 4) => {
    return Math.floor(Math.random() * (max - min) + min);
}

console.log('1 = Scissors, 2 = Paper, 3 = Rock');


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 3 && computerSelection === 1) {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Player Wins!`
    } else if (playerSelection === 1 && computerSelection === 3) {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Computer Wins!`
    } else if (playerSelection === 2 && computerSelection === 1) {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Computer Wins!`
    } else if (playerSelection === 1 && computerSelection === 2) {
        return  `Player selects ${playerSelection}, Computer selects ${computerSelection}, Player Wins!`
    } else if (playerSelection === 3 && computerSelection === 2) {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Player Wins!`
    } else if (playerSelection === 2 && computerSelection === 3) {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Computer Wins!`
    } else if (playerSelection === computerSelection) {
        return `It's a draw!`
    }    
}


const playerSelection = 2;
const computerSelection = computerPlay();
console.log(playRound(playerSelection, computerSelection));