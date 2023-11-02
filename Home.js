const diceRollTimes = 6

let totalDiceRol = 1

let playerOneTotalScore = 0
let playerTwoTotalScore = 0

let playerOneTotalTrial = 0
let playerTwoTotalTrial = 0

let playerOneSixCombo = 0
let playerTwoSixCombo = 0

let winner = "In Game"

let playAgain = true

// true is for player one and false for player 2
let turnToPlay = true

const dice = [1,2,3,4,5,6]

const diceVal = 1

let diceValuePlayerOne = `<img src="./Images/Dice_${diceVal}.svg.png" alt="Dice value ${diceVal}">`
let diceValuePlayerTwo = `<img src="./Images/Dice_${diceVal}.svg.png" alt="Dice value ${diceVal}">`

const thewinner = document.getElementById("WinnerHolder")

// Payer one selections
const playerOneScoreHolder = document.getElementById("score1")
const sixComboPlayer1 = document.getElementById("sixCombo1")
const dicevalueOne = document.getElementById("diceValuePlayerOne")
const onebo = document.getElementById("OneButton")


// Payer two selections
const playerTwoScoreHolder = document.getElementById("score2")
const sixComboPlayer2 = document.getElementById("sixCombo2")
const dicevalueTwo = document.getElementById("diceValuePlayerTwo")
const twobo = document.getElementById("TwoButton")




thewinner.innerText = winner

// PlayerOne info
playerOneScoreHolder.innerText = playerOneTotalScore
sixComboPlayer1.innerText = playerOneSixCombo
dicevalueOne.innerHTML = diceValuePlayerOne


// PlayerTwo info
playerTwoScoreHolder.innerText = playerTwoTotalScore
sixComboPlayer2.innerText = playerTwoSixCombo
dicevalueTwo.innerHTML = diceValuePlayerTwo


// GAME SYNTAX

// Getting random number from 1 to 6
const spinner = ()=>{
    return Math.floor(Math.random() * 6 + 1);
}

const ChangeDice = (diceValue)=>{
    return `<img src="./Images/Dice_${diceValue}.svg.png" alt="Dice value ${diceValue}">`
}

const restart = ()=>{
    setTimeout(()=>{
        totalDiceRol = 1
        playerOneTotalScore = 0
        playerTwoTotalScore = 0
        playerOneSixCombo = 0
        playerTwoSixCombo = 0
        thewinner.innerText = winner

        // Player one
        playerOneScoreHolder.innerText = playerOneTotalScore
        sixComboPlayer1.innerText = playerOneSixCombo
        dicevalueOne.innerHTML = diceValuePlayerOne

        // PlayerTwo info
        playerTwoScoreHolder.innerText = playerTwoTotalScore
        sixComboPlayer2.innerText = playerTwoSixCombo
        dicevalueTwo.innerHTML = diceValuePlayerTwo
    }, 5000)
}

const Check6ix = (x,isPlayer1)=>{
    if (x === 6){
        playAgain = true
        if (isPlayer1){
            playerOneSixCombo = playerOneSixCombo + 1
            sixComboPlayer1.innerText = playerOneSixCombo
        }else{
            playerTwoSixCombo = playerTwoSixCombo + 1
            sixComboPlayer2.innerText = playerTwoSixCombo
        }
    }else{
        playAgain = true

        // Player one
        playerOneSixCombo  = 0
        sixComboPlayer1.innerText = playerOneSixCombo

        // player two
        playerTwoSixCombo = 0
        sixComboPlayer2.innerText = playerTwoSixCombo
        
        if (isPlayer1){
            turnToPlay = false
        }else{
            turnToPlay = true
        }
    }

    // Check game over
    if (totalDiceRol === 6 || sixComboPlayer1 ==3 || sixComboPlayer2 === 3){
        if(sixComboPlayer1 ==3){
            thewinner.innerText = "Player One won!!"
        }else if (sixComboPlayer2 === 3){
            thewinner.innerText = "Player Two won!!"
        }else if (playerOneTotalScore === playerTwoTotalScore){
            thewinner.innerText = "It's a Tie!!"
        }else{
            if (playerOneTotalScore > playerTwoTotalScore){
                thewinner.innerText = "Player One won!!"
            }else{
                thewinner.innerText = "Player Two won!!"
            }
        }
        restart()
    }
    totalDiceRol = totalDiceRol + 1
}

onebo.addEventListener("click",()=>{
    if (turnToPlay && playAgain && totalDiceRol <= 6){
        let dicon = spinner()
        dicevalueOne.innerHTML = ChangeDice(dicon)
        playerOneTotalScore = playerOneTotalScore + dicon
        playerOneScoreHolder.innerText = playerOneTotalScore
        Check6ix(dicon,true)
    }else{
        turnToPlay = false
        playAgain = true
    }
})


twobo.addEventListener("click",()=>{
    if(!turnToPlay && playAgain && totalDiceRol <= 6){
        let dicon = spinner()
        dicevalueTwo.innerHTML = ChangeDice(dicon)
        playerTwoTotalScore = playerTwoTotalScore + dicon
        playerTwoScoreHolder.innerText = playerTwoTotalScore
        Check6ix(dicon,false)
    }else{
        turnToPlay = true
        playAgain = true
    }
})


























