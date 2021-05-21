class Dragon {
  constructor(name, rider) {
  this.name = name;
  this.rider = rider;
  this.hungry = true;
  this.counter = 0
  }

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    if (this.counter === 0 || this.counter === 1) {
      this.counter++
  } else if (this.counter === 2) {
      return this.hungry = false;
  }
}
}


module.exports = Dragon;
