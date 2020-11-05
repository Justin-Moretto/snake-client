// play.js
const connect = require('./client.js');
console.log('Connecting ...');
connect();


const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
}
setupInput();

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input which exits the process
  if (key === '\u0003') {
    process.exit();
  }
};

