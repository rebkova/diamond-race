
//Costructor Function
class Diamond {

  constructor() {

    this.end = 583
    this.start = -17
    this.n = 0
    this.moveRight = (this.end - this.start) / 10

  }

  click() {

    if (this.start < this.end && this.n < 10) {
      this.n = this.n + 1
      this.currentPosition = this.start + this.moveRight * this.n
    }

  }

  reset() {

    this.currentPosition = this.start
    this.n = 0

  }
}
