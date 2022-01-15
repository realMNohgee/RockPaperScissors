let playerSelection = prompt("Select your weapon! Rock, paper or scissors?").toLowerCase();

let computerSelection = Math.random();

if ( computerSelection < 0.34 ) {
	computerSelection = "rock";
} else if ( computerSelection <= 0.67 ) {
	computerSelection = "paper";
} else {
	computerSelection = "scissors";
}
 
let compare = function( selection1, selection2 ) {
    if ( selection1 === selection2 ) {
        return "The result is a tie!";
    }

    else if ( selection1 === "rock" ) {
        if ( selection2 === "scissors" ) {
            return "rock wins"
        }

        else if ( selection1 === "paper" ) {
            return "paper wins";
        }
    }

    else if ( selection1 === "paper" ) {
        if ( selection2 === "scissors" ) {
            return "scissors win"
        }

        else if ( selection1 === "rock" ) {
            return "paper wins";
        }
    }

    else if ( selection1 === "scissors" ) {
        if ( selection2 === "paper" ) {
            return "scissors win"
        }

        else if ( selection2 === "rock" ) {
            return "rock wins";
        }
    }
    
}
function game() {
    for(var i=0; i<5; i++) {
      singleRound();
    }
}    

console.log(compare(playerSelection,computerSelection));