var j5 = require('johnny-five');
var EtherPortClient = require('etherport-client').EtherPortClient;

console.log('START LISTENING SERVER');

new j5.Board({
  port: new EtherPortClient({
    host: '192.168.1.254',
    port: 3030,
  }),
  timeout: 1e5,
}).on('ready', function () {
  console.log('CONNECTION HAS BEEN SUCCESSFULLY ESTABLISHED');
  var led = new j5.Led.RGB({
    pins: {
      green: 14, //D5
      red: 12, //D6
      blue: 13, //D7
    },
  });

  this.repl.inject({
    on: () => led.on(),
    red: () => led.color('#FF0000'),
    blue: () => led.color('#0000FF'),
    green: () => led.color('#00FF00'),
    off: () => led.off(),
    led,
  });
});
