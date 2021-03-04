//Factory Function
// function createDiamond(color) {
//   return {
//     color,
//     startPosition: -17,
//     endPosition: 583,
//     currentPosition: function () {
//       console.log("current position function from class invoked")
//     },
//     restart: function () {

//     }

//   }
// }

// const bluDiamond = createDiamond("blue")

//Costructor Function
class Diamond {

  constructor(color) {
    console.log('this is:', this)
    this.color = color
    this.end = 583
    this.start = -17
    this.n = 0
    this.moveRight = (this.end - this.start) / 10
    this.currentPosition = this.start

  }

  click() {

    if (this.start < this.end) {
      this.n = n + 1
      this.currentPosition = this.start + this.moveRight * this.n
    }

  }

  restart() {
    this.currentPosition = this.start
    this.n = 0
  }
}


const grenDiamond = new Diamond("green")
console.log(grenDiamond)
