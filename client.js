const net = require('net');
const events = require('events');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  conn.on('connect', () => console.log('succesfully connected to game server'));
  conn.on('data', data => console.log(data));
  conn.setEncoding('utf8');
  conn.write('Name: JMO');
  //setInterval(() => conn.write('Move: up'), 500); 
  //setTimeout(() => conn.write('Move: up'), 1000); 
  //setTimeout(() => conn.write('Move: right'), 1500); 
  return conn;
};

module.exports = connect;
