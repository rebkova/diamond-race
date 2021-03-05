// const { Diamond } = require('./Diamond')

const resetButton = document.getElementById("resetButton")
const diamond = new Diamond()
const allDiamonds = document.getElementsByClassName(".race-track__button")

resetButton.onclick = () => {
  console.log("You clicked on Reset button blue")
  diamond.reset()
  allDiamonds.style.marginLeft = diamond.start + "px"


  //   startPosition = -17
  //   n = 0
  //   blueDiamond.style.marginLeft = startPosition + "px"
  //   blueCounter.innerHTML = n
}

// resetButtonBlue.onclick = () => {
//   console.log("You clicked on Reset button blue")
//   startPosition = -17
//   n = 0
//   blueDiamond.style.marginLeft = startPosition + "px"
//   blueCounter.innerHTML = n
// }