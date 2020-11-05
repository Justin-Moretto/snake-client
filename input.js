let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', (key) => handleUserInput(key));
  return stdin;
};
//setupInput();

const handleUserInput = function(key) {
  // \u0003 maps to ctrl+c input which exits the process
  console.log(key);
  if (key === '\u0003') {
    process.exit();
  } else if (key === 'w') connection.write('Move: up');
  else if (key === 'a') connection.write('Move: left');
  else if (key === 's') connection.write('Move: down');
  else if (key === 'd') connection.write('Move: right');
  else if (key === 'f') connection.write('Say: sssSSss');
  else if (key === 'g') connection.write('Say: gg wp');
};

module.exports = {setupInput};