require('dotenv').config();
const express = require('express');
const http = require('http');
const startSignaling = require('./public/src/signaling');

const app = express();

const server = http.createServer(app);
const port = process.env.PORT || 3000;

startSignaling(server);

server.listen(port, () => {
  console.log('Signaling server running on port ' + port);
});
