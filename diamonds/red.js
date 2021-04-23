const redDiamond = new Diamond()
const redButton = document.getElementById("redButton")
const redCounter = document.getElementById("redScore")


redButton.onclick = () => {
  redDiamond.move()
  redButton.style.marginLeft = redDiamond.currentPosition + "px"
  redCounter.innerHTML = redDiamond.count
}