const http = require('http');
const app = require('./app');
const config = require('./configs/server.json');

const server = http.createServer(app);

const PORT = config.PORT || process.env.PORT || 5000;
const HOST = config.HOST || process.env.HOST || 'localhost';

server.listen(PORT, HOST, () => {
  console.log(`server started on ${HOST}:${PORT}`);
});
