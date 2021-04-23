const yellowDiamond = new Diamond()
const yellowButton = document.getElementById("yellowButton")
const yellowCounter = document.getElementById("yellowScore")


yellowButton.onclick = () => {
  yellowDiamond.move()
  yellowButton.style.marginLeft = yellowDiamond.currentPosition + "px"
  yellowCounter.innerHTML = yellowDiamond.count
}
