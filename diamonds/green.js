const greenDiamond = new Diamond()
const greenButton = document.getElementById("greenButton")
const greenCounter = document.getElementById("greenScore")


greenButton.onclick = () => {
  greenDiamond.click()
  greenButton.style.marginLeft = greenDiamond.currentPosition + "px"
  greenCounter.innerHTML = greenDiamond.n
}
