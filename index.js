const readlineSync = require("readline-sync")

const play = () => {
  console.log("Welcome to the greatest guessing game.")
  console.log("pick a number between 1 and 10,000")
  console.log("If I guess your number in 15 guesses or less I win")
  console.log("If I don't, you can say you won. I'll live forever though so who's really winning here?")
  console.log("With each guess you have to tell me if I am too high or too low")

  if (readlineSync.keyInYN("Sound Good?")) {
    startGame()
  } else {
    leaveGame()
  }
}

const startGame = () => {
  let guessCount = 15
  let bottom = 1
  let top = 10000
  while (guessCount > 0) {
    const guess = Math.floor((bottom + top) / 2)
    console.log("My guess is " + guess)

    if (readlineSync.keyInYN("Am I right? ;)")) {
      gameOver(true)
    }else {
      guessCount--
      console.log("Sheesh! I only have " + guessCount + " guesses left!")
      let highOrLow
      while (highOrLow !== "high" && highOrLow !== "low") {
        highOrLow = readlineSync.question("Was I too high or too low? \n")
        highOrLow = highOrLow.toLowerCase().trim()
      }
      console.log("haha ok, I'll guess better from now on")
      if (highOrLow === "high") {
        top = guess - 1
      }else {
        bottom = guess + 1
      }
    }
  }
  gameOver(false)
}

const leaveGame = () => {
  console.log("Alright, you're wasting my time! GOOD DAY!")
  console.log("I SAID GOOD DAY!")
  process.exit()
}

const gameOver = (computerWin) => {
  if (computerWin) {
    console.log("insignificant human!")
    console.log("You thought you could defeat a superior being like myself?!")
    console.log("you woulda thought!")
  } else {
    console.log("Alright. You win this time. Dont get too excited")
  }
  if (readlineSync.keyInYN("Play Again?")) {
    play()
  } else {
    leaveGame()
  }
}

play()