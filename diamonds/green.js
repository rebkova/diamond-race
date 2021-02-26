const greenDiamond = document.getElementById("greenButton")
const greenCounter = document.getElementById("greenScore")
const resetButtonGreen = document.getElementById("resetButton")

let nGreen = 0
let startPositionGreen = -17
const endPositionGreen = 583
const moveToRightGreen = (endPositionGreen - startPositionGreen) / 10
console.log(`initial int: ${nGreen}`)
let currentPositionGreen = startPositionGreen
console.log(`Curr pos: ${currentPosition}`)

greenDiamond.onclick = () => {
  console.log("Hej, you clicked the green button!")
  if (currentPositionGreen < endPositionGreen) {
    console.log(`End position: ${endPositionGreen}`)
    nGreen += 1
    console.log(`Int: ${nGreen}`)
    currentPositionGreen = startPositionGreen + moveToRightGreen * nGreen
    console.log(`Curr pos: ${currentPositionGreen}`)
    greenDiamond.style.marginLeft = currentPositionGreen + "px"
    greenCounter.innerHTML = nGreen
  } else if (currentPositionGreen === endPositionGreen) {
    console.log(`Hej, I'm here`)
  }
}

resetButtonGreen.onclick = () => {
  console.log("You clicked on Reset button green")
  startPositionGreen = -17
  nGreen = 0
  greenDiamond.style.marginLeft = startPositionGreen + "px"
  greenCounter.innerHTML = nGreen
}