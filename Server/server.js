const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on("connection", ws => {
    // displays when client connects to server
    console.log("New Client connected");
    
    // this function receives data from the client
    ws.on('message', function message(data, isBinary) {
        // this how the data is sent to the client
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
            client.send(data, { binary: isBinary });
            }
        });
    });

    ws.on('close', () => {
        // displays when client disconnects to server
        console.log("Client has disconnected");
    });

    
});