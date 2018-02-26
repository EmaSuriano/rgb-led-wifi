var j5 = require('johnny-five');
var EtherPortClient = require('etherport-client').EtherPortClient;

// var board = new j5.Board({
//   port: new EtherPortClient({
//     host: '192.168.1.254',
//     port: 3030,
//   }),
//   timeout: 1e5,
//   // repl: true,
// });

console.log('START LISTENING SERVER');

new j5.Board({
  port: new EtherPortClient({
    host: '192.168.1.254',
    port: 3030,
  }),
  timeout: 1e5,
  // repl: true,
}).on('ready', function() {
  console.log('CONNECTION HAS BEEN SUCCESSFULLY ESTABLISHED');
  var led = new j5.Led.RGB({
    pins: {
      red: 14,
      green: 12,
      blue: 13,
    },
  });

  // This will grant access to the led instance
  // from within the REPL that's created when
  // running this program.
  // this.repl.inject({
  //   led: led,
  // });

  console.log(this);

  this.repl.inject({
    led: led,
  });

  // Turn it on and set the initial color
  led.on();
  led.color('#FF0000');

  led.blink(1000);
});

// board.on('error', error => {
//   console.error(error);
//   process.exit(1);
// });
