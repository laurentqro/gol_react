const expect = require('chai').expect;
import World from '../src/world';

describe('World', () => {
  it('is empty on creation', () => {
    let world = new World(3, 3);
    expect(world.isEmpty()).to.equal(true);
  });

  it('is not empty after cell was created', () => {
    let world = new World(3, 3);
    world.createCellAtLocation(1, 1);
    expect(world.isEmpty()).to.equal(false);
  });
});
