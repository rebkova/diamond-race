const resetButton = document.getElementById("resetButton")
const allDiamonds = document.getElementsByClassName("race-track__button")
const scoreAllDiamonds = document.getElementsByTagName("span")

const diamonds = []
diamonds.push(blueDiamond, redDiamond, greenDiamond, yellowDiamond)

const blueScore = document.getElementById("blueScore")

resetButton.onclick = () => {

  for (i = 0; i < diamonds.length; i++) {
    diamonds[i].reset()
  }

  //------- STYLE ------------------------------------------
  for (i = 0; i < allDiamonds.length; i++) {
    allDiamonds[i].style.marginLeft = diamonds[i].currentPosition + "px"
  }

  for (i = 0; i < scoreAllDiamonds.length; i++) {
    scoreAllDiamonds[i].innerHTML = diamonds[i].count
  }

}