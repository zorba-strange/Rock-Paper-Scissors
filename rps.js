
//gets the users choice
/*var userChoice = prompt("Do you choose rock, paper, or scissors?");*/
var userChoice = "paper";

//get the computers choice
function computerChoice() {
  var computerPick = Math.random();
  if (computerPick <= 0.33) {
    return "rock";
  } else if (computerPick >= 0.34 && computerPick <= 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
};

function getWinner(user, computer) {
  //check for tie
  if (user === computer) {
    return "tie";
  } else if (user === "rock") {
    if (computer === "paper") {
      return "computer";
    } else {
      return "user";
    }
  } else if (user === "paper") {
    if (computer === "rock") {
      return "user";
    } else {
      return "computer";
    }
  } else if (user === "scissors") {
    if (computer === "rock") {
      return "computer";
    } else {
      return "user";
    }
  }
};

function game() {
  //variable to keep track of wins
  var userWins = 0;
  var computerWins = 0;
  var ties = 0;
  //contiune playing the game until someone gets to five wins
  while (true) {
    //checking to see who won each round
    var winner = getWinner(userChoice, computerChoice());
    //checks to see if someone has five wins
    if (userWins === 5 || computerWins === 5) {
      break;
      //if no one has 5 wins, continue playing the game
    } else {
      if (winner === "tie") {
      ties += 1;
      console.log("It is a tie!")
    } else if(winner === "user") {
      userWins += 1;
      console.log("The User has won this round!")
    } else {
      computerWins += 1;
      console.log("The computer has Won this round!")
    }
  }
  }
  //checks to see who won then prints out a congradulations to the winner
  if (userWins > computerWins) {
   console.log("The User has won Rock Paper Scissors!");
 } else {
  console.log("The Computer has won Rock Paper Scissors!");
 }
}

console.log(game());
