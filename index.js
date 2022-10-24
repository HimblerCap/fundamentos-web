const HTTP_PORT = 8080; 

const cors = require('cors');
const express = require('express');
const path = require('path');

var publicDirectory = path.resolve(__dirname, 'public');
var app = express();
app.use(cors()); 

// Website 
app.use(express.static(publicDirectory, {
    index: 'index.html',
    extensions: ['html']
}));

var server = require('http').createServer(app);
server.listen(HTTP_PORT);

console.log(`Servidor corriendo en http://localhost:${HTTP_PORT}`);

