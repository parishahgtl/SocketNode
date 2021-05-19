const express = require("express");
const app = express();
const port = 1111;
var server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");

app.use(cors());

var clients = {};

io.on("connection", function(client) {
    console.log("connected")
    setTimeout(() => {
        console.log("in msg")
        client.emit("msg", "Hi Janvi")
    }, 8000);

    client.on('sendMsg', function(data) {
        console.log(data)
    })
    client.on("disconnect", function() {
        console.log("disconnect")
    });
});

server.listen(port, () =>
    console.log(`Example app listening on port ${port}!`)
);