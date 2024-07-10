require("dotenv").config();
const webSocket = require('ws');
const wss = new webSocket.Server({port: process.env.PORT})


wss.on('connection', (client) => {
    console.log("A client has connected!");

    client.send("Hello this is a message from the server! ");
});


