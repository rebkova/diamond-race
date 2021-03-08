
const yellowButton = document.getElementById("yellowButton")
const yellowCounter = document.getElementById("yellowScore")

const yellowDiamond = new Diamond()

yellowButton.onclick = () => {
  yellowDiamond.click()
  yellowButton.style.marginLeft = yellowDiamond.currentPosition + "px"
  console.log(yellowDiamond.currentPosition)
  yellowCounter.innerHTML = yellowDiamond.n
}


// resetButtonYellow.onclick = () => {
//   console.log("You clicked on Reset button yellow")
//   startPositionYellow = -17
//   nYellow = 0
//   yellowDiamond.style.marginLeft = startPositionYellow + "px"
//   yellowCounter.innerHTML = nYellow
// }