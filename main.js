let playerScore = 0; // score of player at start
let computerScore = 0; // score of computer at start
let roundScore = 0;

function computerSelection() {
	let choices = ["paper", "rock", "scissor"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	//console.log("Computer choice is : " + randomChoice);
	return randomChoice;
}

function round(playerSelection, computerSelection) {
	let winner = "";

	console.log("Round : Player Choice is : " + playerSelection);
	console.log("Round : computer Choice is : " + computerSelection);

	if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			winner = "You won !";
			playerScore++;
		} else if (computerSelection === "scissor") {
			winner = "You lost !";
			computerScore++;
		} else {
			winner = "Tie !";
		}
		console.log(winner);
	} else if (playerSelection === "rock") {
		if (computerSelection === "scissor") {
			winner = "You won !";
			playerScore++;
		} else if (computerSelection === "paper") {
			winner = "You lost !";
			computerScore++;
		} else {
			winner = "Tie !";
		}
		console.log(winner);
	} else if (playerSelection === "scissor") {
		if (computerSelection === "paper") {
			winner = "You won !";
			playerScore++;
		} else if (computerSelection === "rock") {
			winner = "You lost !";
			computerScore++;
		} else {
			winner = "Tie !";
		}
		console.log(winner);
	}
}

function game(choice) {
	let computer = computerSelection();
	round(choice, computer);

	roundScore++;
	console.log(
		"player" + " : " + playerScore + " - " + "computer" + " : " + computerScore
	);
	console.log(roundScore);
	let winner = "";
	if (playerScore > computerScore) {
		winner = "Player";
	} else {
		winner = "Computer";
	}
	if (roundScore === 5) {
		console.log("Game Over - the winner is : " + winner);
		return winner;
	}
}
