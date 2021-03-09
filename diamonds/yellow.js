const yellowDiamond = new Diamond()
const yellowButton = document.getElementById("yellowButton")
const yellowCounter = document.getElementById("yellowScore")


yellowButton.onclick = () => {
  yellowDiamond.click()
  yellowButton.style.marginLeft = yellowDiamond.currentPosition + "px"
  yellowCounter.innerHTML = yellowDiamond.n
}
