import env from './env';

const j5 = require('johnny-five');
// const EtherPort = require('etherport');

// const board = new j5.Board({
//   port: new EtherPort(3030),
//   timeout: 1e5,
//   repl: false,
// });
// var Firmata = require("firmata").Board;
var EtherPortClient = require('etherport-client').EtherPortClient;

const board = new j5.Board({
  port: new EtherPortClient({
    host: env.CLIENT_IP,
    port: env.PORT,
  }),
  timeout: 1e5,
  repl: false,
});

// var board = new Firmata(
//   new EtherPortClient({
//     host: '192.168.1.104',
//     port: 3030,
//   }),
// );

console.log('START LISTENING SERVER');

board.on('ready', () => {
  console.log('CONNECTION HAS BEEN SUCCESSFULLY ESTABLISHED');
  process.exit(0);
});

board.on('error', error => {
  console.error(error);
  process.exit(1);
});
