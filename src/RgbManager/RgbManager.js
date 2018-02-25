// import storage from './storage';
// import Board from './board';
// import env from './env';

export default class RgbManager {
  constructor() {
    // this.board = new Board();
    // this.storage = new Storage();
  }

  get color() {
    return 'red';
  }

  set color(color) {
    console.log(color);
  }
}

// const board = new Board();

// const getColor = storage.getColor;

// const changeColor = async color => {
//   if (!env.DISABLE_BOARD) await board.setColor(color);
//   await storage.saveColor(newPosition);
// };

// const getConnectionStatus = board.getStatus;

// export default {
//   getColor,
//   changeColor,
//   getConnectionStatus,
// };
