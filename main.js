const net = require('net');

const port = 6379

const server = net.createServer((connection) => {
  console.log('Client Connected');

  const PONG = '+PONG\r\n';

  connection.on('data', (data) => {
    console.log(`Recieved: \n${data}`);
    connection.write(PONG);
  });
});

server.listen(port,);
