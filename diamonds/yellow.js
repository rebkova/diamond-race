const yellowDiamond = document.getElementById("yellowButton")
const yellowCounter = document.getElementById("yellowScore")


let nYellow = 0
const startPositionYellow = -17
const endPositionYellow = 583
const moveToRightYellow = (endPositionYellow - startPositionYellow) / 10
console.log(`initial int: ${nYellow}`)
let currentPositionYellow = startPositionYellow
console.log(`Curr pos: ${currentPositionYellow}`)

yellowDiamond.onclick = () => {
  console.log("Hej, you clicked the yellow button!")
  if (currentPositionYellow < endPositionYellow) {
    console.log(`End position: ${endPositionYellow}`)
    nYellow += 1
    console.log(`Int: ${nYellow}`)
    currentPositionYellow = startPositionYellow + moveToRightYellow * nYellow
    console.log(`Curr pos: ${currentPositionYellow}`)
    yellowDiamond.style.marginLeft = currentPositionYellow + "px"
    yellowCounter.innerHTML = nYellow
  } else if (currentPositionYellow === endPositionYellow) {
    console.log(`Hej, I'm here`)
  }
}