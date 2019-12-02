let playerScore = 0; // score of player at start
let computerScore = 0; // score of computer at start

function computerSelection() {
	let choices = ["paper", "rock", "scissor"];

	let randomChoice = choices[Math.floor(Math.random() * choices.length)];

	//console.log("Computer choice is : " + randomChoice);
	return randomChoice;
}

function round(playerSelection, computerSelection) {
	console.log("Round : Player Choice is : " + playerSelection);
	console.log("Round : computer Choice is : " + computerSelection);
	document.getElementById("status").innerHTML =
		"<p> You played <strong>" +
		playerSelection +
		"</strong>. The computer played <strong>" +
		computerSelection;
	if (playerSelection === "paper") {
		if (computerSelection === "rock") {
			document.getElementById("status").innerHTML += "<p> You Win ! </p>";
			playerScore++;
		} else if (computerSelection === "scissor") {
			document.getElementById("status").innerHTML += "<p> You Lose !</p>";
			computerScore++;
		} else {
			document.getElementById("status").innerHTML += "<p> Tie ! ! </p>";
		}
	} else if (playerSelection === "rock") {
		if (computerSelection === "scissor") {
			document.getElementById("status").innerHTML += "<p> You Win ! </p>";
			playerScore++;
		} else if (computerSelection === "paper") {
			document.getElementById("status").innerHTML += "<p> You Lose !</p>";
			computerScore++;
		} else {
			document.getElementById("status").innerHTML += "<p> Tie ! </p>";
		}
	} else if (playerSelection === "scissor") {
		if (computerSelection === "paper") {
			document.getElementById("status").innerHTML += "<p> You Win ! </p>";
			playerScore++;
		} else if (computerSelection === "rock") {
			document.getElementById("status").innerHTML += "<p> You lose ! </p>";
			computerScore++;
		} else {
			document.getElementById("status").innerHTML += "<p> Tie ! </p>";
		}
	}
	document.getElementById("playerScore").innerHTML = playerScore;
	document.getElementById("computerScore").innerHTML = computerScore;
}

function game(choice) {
	let computer = computerSelection();
	round(choice, computer);
	console.log(Works);
	console.log(
		"player" + " : " + playerScore + " - " + "computer" + " : " + computerScore
	);

	if (playerScore == 5 || computerScore == 5) {
		const play = document.querySelector("#sb");
		const greenBanner = document.querySelector("#banner-green");
		const results = document.querySelector("#sb");
	}

	if (playerScore == 5) {
		const youWon = document.querySelector("#youwon");
		youWon.style.display = "block";
	}
	if (computerScore == 5) {
		const youLost = document.querySelector("#you-lost");
		youLost.style.display = "block";
	}
}
