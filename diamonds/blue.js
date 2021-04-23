
const blueDiamond = new Diamond()
const blueButton = document.getElementById("blueButton")
const blueCounter = document.getElementById("blueScore")


blueButton.onclick = () => {
  blueDiamond.move()
  blueButton.style.marginLeft = blueDiamond.currentPosition + "px"
  blueCounter.innerHTML = blueDiamond.count
}