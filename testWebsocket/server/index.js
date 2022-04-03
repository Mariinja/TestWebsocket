const Websocket = require("ws");

const wss = new Websocket.Server({port : 8082});

wss.on("connection", ws =>{
    console.log("New client connected");

    ws.on("message", data =>{
        console.log(`Client has sent us:  ${data}`);

        ws.send("Server received data, thanks");
    });

    ws.on("close", () =>{
        console.log("Client has disconnected");
    });
});


