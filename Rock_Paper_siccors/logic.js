// console.log("Hello World!");
/* Problem:
    Rock paper scissors against cmputer.
    User is supposed to choose among the three, the computer chooses 
    a random play, based on who ever wins, the result is displayed.
    */

/*
    No user interface; A prompt will be used to take input and console
    will be used to display output.

    input will be user selection.
    Otput will be the result result of the game.
    */

/*
    Prompt the user for an input and store it.
    Generate a random selection for computer choice. // function.
    Compare the user input and computer choice. // function.
    Console log the result of whoever won.
    Create a function to run the game 5 times. // fcuntion.

*/

// Defining functions.

let playGame = function () {
    let playerSelection = prompt("Enter Your selection:")
    let computerSelection = generateComputerChoice();
    
    console.log(playerSelection)
    console.log(computerSelection);

    if (checkPlayerSelection (playerSelection)) {
        result = playRound(playerSelection, computerSelection);
        console.log(result);
    }
    else {
        console.log("Please enter a valid selection!")
    }

}


let generateComputerChoice = function() {
    randomNumber = Math.random()*3 + 1;
    randomNumber = Math.floor(randomNumber);
    switch (randomNumber){
        case 1:
            return ("rock");
            break;
        case 2:
            return ("paper");
            break;
        case 3:
            return ("scissors");
            break;
    }
}

let playRound = function (playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    switch (true){
        
        case playerSelection == computerSelection:
            return "Its a tie";
            break;

        
        case (playerSelection == "rock"):
            if (computerSelection == "scissors"){
                return ("You Win! Rock beats Scissors");
            }
            else{
                return ("You Loose! Paper beats Rock");
            }
            break;


        case (playerSelection == "paper") :
            if (computerSelection == "rock"){
                return ("You Win! pape beats Rock");
            }
            else{
                return ("You Loose! Scissors beats Paper");
            }
            break;

        case (playerSelection == "scissors") :
                if (computerSelection == "paper"){
                    return ("You Win! Scissors beats Paper");
                }
                else{
                    return ("You Loose! Rock beats Scissors");
                }
                break;
    }
}

let checkPlayerSelection = function (playerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection == "rock" || playerSelection == "scissors" || playerSelection == "paper"){
        return true;
    }
    else {
        return false;
    }
}

playGame();




// computerSelection playerSelection
// 1                   1  = tie
// 1                   2  = won
// 1                   3  = lost 
// 2                   1  = 
// 2                   2
// 2                   3
// 3                   1
// 3                   2
// 3                   3


// Rock - 1
// Paper -2 
// Scissors -3



// let output = document.querySelector('.output');
// output.innerHTML = '';

// let i = 10;

// while (i>=0) {
//     const para = document.createElement('p');
//     if (i==10) {
//         para.textContent ='Countdown 10';
//     }
//     else if (i==0) {
//         para.textContent ='Blast off!';
//     }
//     else {
//         para.textContent =`${i}`; 
//     }
//     output.appendChild(para);
//     i--
// }


const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

// loop starts here

// let i = 0;

// do {
//     if (people[i] == 'Phil' || people[i] == 'Lola') {
//         if (i == people.length-1) {
//             refused.textContent += `${people[i]}.`;
//             break;
//         }
//         refused.textContent += `${people[i]}, `;
//         }
//     else {
//         if (i == people.length-1) {
//             admitted.textContent += `${people[i]}.`;
//             break;
//         }
//         admitted.textContent += `${people[i]}, `;
//         }
//         i++

// } while (i < people.length)


let i = 0;

do {
    if (people[i] == 'Phil' || people[i] == 'Lola') {
        refused.textContent += `${people[i]}, `;
        }
    else {
        admitted.textContent += `${people[i]}, `;
        }
        i++

} while (i < people.length)

refused.textContent = refused.textContent.slice (0, refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice (0, admitted.textContent.length-2) + '.';
// refused.textContent += ;
// admitted.textContent += ;


