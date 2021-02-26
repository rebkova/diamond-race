const blueDiamond = document.getElementById("blueButton")
const blueCounter = document.getElementById("blueScore")
const resetButtonBlue = document.getElementById("resetButton")
console.log(blueCounter)

let n = 0
let startPosition = -17
const endPosition = 583
const moveToRight = (endPosition - startPosition) / 10
console.log(`initial int: ${n}`)
let currentPosition = startPosition
console.log(`Curr pos: ${currentPosition}`)

blueDiamond.onclick = () => {
  console.log("Hej, you clicked the blue button!")

  if (currentPosition < endPosition) {
    console.log(`End position: ${endPosition}`)
    n += 1
    console.log(`Int: ${n}`)
    currentPosition = startPosition + moveToRight * n
    console.log(`Curr pos: ${currentPosition}`)
    blueDiamond.style.marginLeft = currentPosition + "px"
    blueCounter.innerHTML = n
  } else if (currentPosition === endPosition) {
    console.log(`Hej, I'm here`)
  }
}

resetButtonBlue.onclick = () => {
  console.log("You clicked on Reset button blue")
  startPosition = -17
  n = 0
  blueDiamond.style.marginLeft = startPosition + "px"
  blueCounter.innerHTML = n
}