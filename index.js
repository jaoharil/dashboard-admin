const http = require('http');
const hostName = '127.0.0.1';
const port = 2002;

const server = http.createServer(function (request, response) {
  response.end('hallo brooo');
});

server.listen(port, hostName, '', function () {
  console.log(`server menyala di ${hostName}:${port}`);
});
