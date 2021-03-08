// const { Diamond } = require('./Diamond')

const resetButton = document.getElementById("resetButton")
const reset = new Diamond()
const allDiamonds = document.getElementsByClassName("race-track__button")
console.log(`allDiamonds: ${allDiamonds}`)

const scoreAllDiamonds = document.getElementsByTagName("span")


// const allDiamonds = document.getElementById("blueButton")
const blueScore = document.getElementById("blueScore")

resetButton.onclick = () => {
  console.log("You clicked on Reset button blue")
  reset.reset()

  for (i = 0; i < allDiamonds.length; i++) {
    allDiamonds[i].style.marginLeft = reset.start + "px"
  }

  for (i = 0; i < scoreAllDiamonds.length; i++) {
    scoreAllDiamonds[i].innerHTML = reset.n
  }

}