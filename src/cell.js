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
    if (this.solitude()) {
      this.die();
    }
    return this;
  }

  solitude() {
    return this.neighbours().length <= 1;
  }

  neighbours() {
    return [];
  }

  die() {
    this.state = 'dead';
  }

  isDead() {
    return this.state === 'dead';
  }
}
