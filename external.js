function game() {
    let wins = 0;
    let loses = 0;
  
  
    while (wins < 3 && loses < 3) {
      let playerSelect = window.prompt("Please select your weapon of choice!<br> Rock, Paper, or Scissors?");
      let playerSelectLowerCase = playerSelect.toLowerCase().trim();
      console.log("playerSelect: " + playerSelectLowerCase);
  
      function computerRandomSelect(computerPlay) {
        computerPlay = ["rock", "paper", "scissors"];
        return computerPlay[Math.floor(Math.random() * computerPlay.length)];
      }
  
      let computerSelection = computerRandomSelect();
      console.log("computerSelection: " + computerSelection);


function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock' && computerSelection === 'scissors' ) {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Player Wins!`
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Computer Wins!`
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Computer Wins!`
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return  `Player selects ${playerSelection}, Computer selects ${computerSelection}, Player Wins!`
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Player Wins!`
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return `Player selects ${playerSelection}, Computer selects ${computerSelection}, Computer Wins!`
    } else if (playerSelection === computerSelection) {
        return `It's a draw!`
    }    
}
}


    

console.log(playRound(playerSelection, computerSelection))}