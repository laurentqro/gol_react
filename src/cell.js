export default class Cell {
  constructor(...coordinates) {
    this.coordinates = coordinates;
    this.state = 'unborn';
  }

  isAlive() {
    return this.state === 'alive';
  }

  setAlive() {
    this.state = 'alive';
  }
}
