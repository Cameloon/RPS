let humanScore = 0;
let compScore = 0;

function getComputerChoice() {
    let rndmnmb = Math.random()
    if (rndmnmb >= 0.6) {
        let rndmnmb = "rock"
        console.log("Comp chose: " + rndmnmb)
        return rndmnmb
    } else if (rndmnmb >= 0.3) {
        let rndmnmb = "paper"
        console.log("Comp chose: " + rndmnmb)
        return rndmnmb
    } else {
        let rndmnmb = "scissors"
        console.log("Comp chose: " + rndmnmb)
        return rndmnmb
    }
}

function getHumanChoice() {
    let hChoice = window.prompt("Rock, Paper or Scissors?").toLocaleLowerCase();
    console.log("You chose: " + hChoice)
    return hChoice
}

function playRound() {
    let humanSelect = getHumanChoice();
    let compSelect = getComputerChoice();
    
    if(humanSelect == "rock" && compSelect =="scissors") {
        humanScore += 1
        console.log("You win")
    }else if(humanSelect == "rock" && compSelect == "paper") {
        compScore += 1
        console.log("You lose")
    }else if(humanSelect == "paper" && compSelect == "rock") {
        humanScore += 1
        console.log("You win")
    }else if(humanSelect == "paper" && compSelect == "scissors") {
        compScore += 1
        console.log("You lose")
    }else if(humanSelect == "scissors" && compSelect == "rock") {
        compScore += 1
        console.log("You lose")
    }else if(humanSelect == "scissors" && compSelect == "paper") { 
        humanScore += 1
        console.log("You win")
    }else {
        console.log("Tied")
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    console.log("Youre score: " + humanScore + "\n Comp score: " + compScore)
}

// playRound()
playGame()
