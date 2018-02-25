import datastore from 'nedb-promise';
// import { withDebugHOF } from './utils';
// const { ERROR_MESSAGE, DEBUG } = require('./constants');

export default class Storage {
  constructor() {
    this.db = datastore({
      filename: './database.db',
      autoload: true,
    });
  }

  async getColor() {
    try {
      const [record] = await this.db
        .cfind({})
        .sort({ dateTime: -1 })
        .limit(1)
        .exec();

      return record.color;
    } catch (error) {
      throw new Error(error);
    }
  }

  // get color() {
  //   return new Promise((res, rej) => {
  //     this.db
  //       .cfind({})
  //       .sort({ dateTime: -1 })
  //       .limit(1)
  //       .exec()
  //       .then(([{ color }]) => {
  //         console.log(color);
  //         res(color);
  //       });
  //   });
  // }

  async setColor(color) {
    const colorRecord = { color, dateTime: Date.now() };
    console.log(colorRecord);
    try {
      await this.db.insert(colorRecord);
    } catch (error) {
      throw new Error(error);
    }
    // return new Promise((res, rej) => {
    //   this.db.insert(colorRecord).then(res => color);
    // });
  }

  // const getPosition = async () => {
  //   try {
  //     const document = await db
  //       .cfind({})
  //       .sort({ dateTime: -1 })
  //       .limit(1)
  //       .exec();

  //     return document[0].position;
  //   } catch (error) {
  //     throw new Error(ERROR_MESSAGE.DATABASE_GET_ERROR);
  //   }
  // };

  // const setPosition = async position => {
  //   try {
  //     const newPositionRecord = { position, dateTime: Date.now() };
  //     await db.insert(newPositionRecord);
  //     return position;
  //   } catch (error) {
  //     throw new Error(ERROR_MESSAGE.DATABASE_INSERT_ERROR);
  //   }
  // };
}

// export default {
//   getPosition: withDebugHOF(getPosition),
//   setPosition: withDebugHOF(setPosition),
// };

// export default {
//   getPosition,
//   setPosition,
// };
