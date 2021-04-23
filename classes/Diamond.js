
//Costructor Function
class Diamond {

  constructor() {

    this.end = 583
    this.start = -17
    this.count = 0
    this.moveRight = (this.end - this.start) / 10

  }

  move() {

    if (this.start < this.end && this.count < 10) {
      this.count = this.count + 1
      this.currentPosition = this.start + this.moveRight * this.count
    }

  }

  reset() {

    this.currentPosition = this.start
    this.count = 0

  }
}
