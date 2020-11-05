const net = require('net');
const events = require('events');

const connect = function() {
  const conn = net.createConnection({
    host: '135.23.222.131',
    port: 50542
  });
  conn.on('connect', () => console.log('succesfully connected to game server'));
  conn.on('data', data => console.log(data));
  conn.setEncoding('utf8');
  conn.write('Name: JMO');
  return conn;
};

module.exports = connect;