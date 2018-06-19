export default class Cell {
  constructor(coordinates) {
    this.coordinates = coordinates;
    this.state = 'unborn';
  }

  isAlive() {
    return this.state === 'alive';
  }

  setAlive() {
    this.state = 'alive';
  }

  isAliveInNextGeneration(world) {
    if (this.solitude() || this.overpopulation()) {
      this.die();
    }
    return this;
  }

  solitude() {
    return this.neighbours().length <= 1;
  }

  neighbours() {
    return [1, 2, 3];
  }

  die() {
    this.state = 'dead';
  }

  isDead() {
    return this.state === 'dead';
  }

  overpopulation() {
    return this.neighbours().length >= 4;
  }
}
