import World from './world';

const GOL = {
  createWorld: function createWorld(width, height) {
    return new World(width, height);
  }
}

export { GOL };
