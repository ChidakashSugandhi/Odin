let playerScore = 0;
let computerScore = 0;
const score = document.querySelector(".score");

function checkScore() {
    console.log(playerScore, computerScore);
    if (playerScore == 5) {
        score.textContent = "Congracts!, You won the game.";
        console.log("You won the game!");
    }
    else if (computerScore == 5){
        score.textContent = "aww, Computer won this time!!"
        console.log("Compter won this time!");
    }
    else {
        score.textContent = `You:${playerScore}   Computer:${computerScore}`;
        return true;
    }
}

function generateSelection() {
    array = ["rock", "paper", "scissors"];
    randomNumber = Math.floor(Math.random()*3);
    return array[randomNumber];
}


function playGame(playerSelection) {
    computerSelection = generateSelection();
    // player win condictions
    if (playerSelection == "rock" && computerSelection == "scissors" ||
        playerSelection == "paper" && computerSelection == "rock" ||
        playerSelection == "scissors" && computerSelection == "paper") {
            playerScore = playerScore + 1;
            return "You won the round!"
        }
    // player loss condictions   
    if (playerSelection == "rock" && computerSelection == "paper" ||
        playerSelection == "paper" && computerSelection == "scissors" ||
        playerSelection == "scissors" && computerSelection == "rock") {
        computerScore = computerScore + 1;
        return "You lost the round!"
    }
    if (playerSelection == computerSelection) {
        return "Its a tie!"
    }
}


const rock = document.querySelector(".rock");
const paper = document.querySelector(".paper");
const scissors = document.querySelector(".scissors");

rock.addEventListener("click", () => {
    if (checkScore()){
        console.log(playGame("rock"));
    }
});
paper.addEventListener("click", () => {
    if (checkScore()){
        console.log(playGame("paper"));
    }
});
scissors.addEventListener("click", () => {
    if (checkScore()){
        console.log(playGame("scissors"));  
    }
});




    



// // console.log("Hello World!");
// /* Problem:
//     Rock paper scissors against cmputer.
//     User is supposed to choose among the three, the computer chooses 
//     a random play, based on who ever wins, the result is displayed.
//     */

// /*
//     No user interface; A prompt will be used to take input and console
//     will be used to display output.

//     input will be user selection.
//     Otput will be the result result of the game.
//     */

// /*
//     Prompt the user for an input and store it.
//     Generate a random selection for computer choice. // function.
//     Compare the user input and computer choice. // function.
//     Console log the result of whoever won.
//     Create a function to run the game 5 times. // fcuntion.

// */

// let playRound = function (playerSelection) {
//     computerSelection = generateComputerChoice()
//     playerSelection = playerSelection.toLowerCase()
//     switch (true){
        
//         case playerSelection == computerSelection:
//             return "t";
//             break;

        
//         case (playerSelection == "rock"):
//             if (computerSelection == "scissors"){
//                 return ("w");
//             }
//             else{
//                 return ("l");
//             }
//             break;


//         case (playerSelection == "paper") :
//             if (computerSelection == "rock"){
//                 return ("w");
//             }
//             else{
//                 return ("l");
//             }
//             break;

//         case (playerSelection == "scissors") :
//                 if (computerSelection == "paper"){
//                     return ("w");
//                 }
//                 else{
//                     return ("l");
//                 }
//                 break;
//     }
// }






