import Cell from './cell';

export default class World {
  constructor(width, height) {
    this.cells = [];

    let rows = Array.from(Array(width).keys());
    let columns = Array.from(Array(height).keys());

    rows.forEach((row, xCoordinate) => {
      this.cells.push([]);
      columns.forEach((column, yCoordinate) => {
        let cell = new Cell(xCoordinate, yCoordinate);
        this.cells[xCoordinate].push(cell);
      });
    });
  }

  isEmpty() {
    return this.cells
      .reduce((accumulator, currentCell) => accumulator.concat(currentCell), [])
      .every((cell) => !cell.isAlive());
  }

  createCellAtLocation(...coordinates) {
    this.getCellAtCoordinates(...coordinates).setAlive();
  }

  getCellAtCoordinates(...coordinates) {
    console.log("coords", coordinates);
    return this.cells[coordinates[0]][coordinates[1]];
  }
}
