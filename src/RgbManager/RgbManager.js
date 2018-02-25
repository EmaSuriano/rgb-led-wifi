import Storage from './Storage';
// import Board from './board';
// import env from './env';

export default class RgbManager {
  constructor() {
    // this.board = new Board();
    this.storage = new Storage();
  }

  async getColor() {
    const color = await this.storage.getColor();
    console.log(color);
    // console.log(this.storage.color);
    return color;
  }

  async setColor(color) {
    await this.storage.setColor(color);

    return color;
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
