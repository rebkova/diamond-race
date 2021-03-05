
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

    if (this.start < this.end && this.n < 10) {
      this.n = this.n + 1
      console.log(`the value of this.n: ${this.n}`)
      this.currentPosition = this.start + this.moveRight * this.n
      console.log(`current position after click: ${this.currentPosition}`)
    }

  }

  reset() {
    this.currentPosition = this.start
    this.n = 0
  }
}

// module.exports = { Diamond }
