import datastore from 'nedb-promise';
import { DatabaseError } from '../../constants/Errors';
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
      throw new DatabaseError("Can't retrieve the color ...");
    }
  }

  async setColor(color) {
    const colorRecord = { color, dateTime: Date.now() };
    try {
      await this.db.insert(colorRecord);
    } catch (error) {
      throw new DatabaseError("Can't save the color ...");
    }
  }
}
