const Websocket = require('ws');

const server = new Websocket.Server({ port: 8080, host: '0.0.0.0' })

server.on('connection', function(ws) {
    ws.on('open', function() {

    });

    ws.on('message', function(data) {
        console.log(data);
    });
});