const expect = require('chai').expect;
import World from '../src/world';

describe('World', () => {
  it('is empty on creation', () => {
    let world = new World();
    world.seedWithSize(3);

    expect(world.isEmpty()).to.equal(true);
  });

  it('is not empty after cell was created', () => {
    let world = new World();
    world.seedWithSize(3);
    world.createCellAtLocation({ x: 1, y: 1 });

    expect(world.isEmpty()).to.equal(false);
  });
});

describe('Cell', () => {
  it('with one or no neighbors dies, as if by solitude', () => {
    let world = new World();
    world.seedWithSize(3);
    world.createCellAtLocation({ x: 1, y: 1 });
    let newWorld = world.tick();

    expect(newWorld.getCellAtCoordinates({ x: 1, y: 1 }).isDead()).to.equal(true);
  });

  it('with four or more neighbors dies, as if by overpopulation', () => {
    let world = new World();
    world.seedWithSize(3);
    world.createCellAtLocation({ x: 1, y: 1 });

    world.createCellAtLocation({ x: 0, y: 0 });
    world.createCellAtLocation({ x: 0, y: 1 });
    world.createCellAtLocation({ x: 0, y: 2 });
    world.createCellAtLocation({ x: 1, y: 0 });

    let newWorld = world.tick();

    expect(newWorld.getCellAtCoordinates({ x: 1, y: 1 }).isDead()).to.equal(true);
  });
});
