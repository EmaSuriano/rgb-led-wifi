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
    return color;
  }

  async setColor(color) {
    await this.storage.setColor(color);

    return color;
  }
}
