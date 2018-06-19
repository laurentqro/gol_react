import Cell from './cell';

export default class World {
  constructor(cells) {
    this.cells = cells || [];
  }

  seedWithSize(size) {
    let rows = Array.from(Array(size).keys());
    let columns = Array.from(Array(size).keys());

    rows.forEach((row, xCoordinate) => {
      columns.forEach((column, yCoordinate) => {
        this.cells.push(new Cell({ x: xCoordinate, y: yCoordinate }));
      });
    });
  }

  tick() {
    let cells = this.cells.map((cell) => cell.isAliveInNextGeneration(this));
    console.log('after tick: ', cells);
    return new World(cells);
  }

  isEmpty() {
    console.log(this.cells);
    return this.cells.every((cell) => !cell.isAlive());
  }

  createCellAtLocation(coordinates) {
    this.getCellAtCoordinates(coordinates).setAlive();
  }

  getCellAtCoordinates(coordinates) {
    return this.cells
      .find((cell) => cell.coordinates.x === coordinates.x && cell.coordinates.y === coordinates.y);
  }
}
