var j5 = require('johnny-five');
var EtherPortClient = require('etherport-client').EtherPortClient;

var board = new j5.Board({
  port: new EtherPortClient({
    host: '192.168.1.254',
    port: 3030,
  }),
  timeout: 1e5,
  repl: false,
});

console.log('START LISTENING SERVER');

board.on('ready', () => {
  console.log('CONNECTION HAS BEEN SUCCESSFULLY ESTABLISHED');
  process.exit(0);
});

board.on('error', error => {
  console.error(error);
  process.exit(1);
});
