// Computer choose randomly and assign into variable
function computerPlay () {
    randomGenerator = Math.floor(Math.random() * 3);

    if (randomGenerator === 0) { 
        computerWeapon = "rock"        
    } else if (randomGenerator === 1) {
        computerWeapon ="paper"
    } else { 
        computerWeapon = "scissors"
    };

    return computerWeapon;
}

let computerSelection = computerPlay();

// Player Choose and assign into variable
let playerWeapon = prompt("This is rock paper scisors game, choose your weapon !!");
let playerSelection = playerWeapon.toLowerCase();


// compare computer selection and player selection
function game() {
    if ( "rock" === "rock" ) {
        alert("tie")
    } else if ( "rock")
}
