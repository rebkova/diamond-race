const redDiamond = document.getElementById("redButton")
const redCounter = document.getElementById("redScore")


let nRed = 0
const startPositionRed = -17
const endPositionRed = 583
const moveToRightRed = (endPositionRed - startPositionRed) / 10
console.log(`initial int: ${nRed}`)
let currentPositionRed = startPositionRed
console.log(`Curr pos: ${currentPositionRed}`)


redDiamond.onclick = () => {
  console.log("Hej, you clicked the red button!")
  if (currentPositionRed < endPositionRed) {
    console.log(`End position: ${endPositionRed}`)
    nRed += 1
    console.log(`Int: ${nRed}`)
    currentPositionRed = startPositionRed + moveToRightRed * nRed
    console.log(`Curr pos: ${currentPositionRed}`)
    redDiamond.style.marginLeft = currentPositionRed + "px"
    redCounter.innerHTML = nRed
  } else if (currentPositionRed === endPositionRed) {
    console.log(`Hej, I'm here`)
  }
}