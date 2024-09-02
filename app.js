function getComputerChoice() {
    let rndmnmb = Math.random()
    if(rndmnmb >= 0.6) {
        return "Rock"
    } else if (rndmnmb >= 0.3) {
        return "Paper"
    } else {
        return "Scissors"
    }
    
 
}

console.log(getComputerChoice())