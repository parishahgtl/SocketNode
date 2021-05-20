const express = require("express");
const app = express();
const port = 1111;
var server = require("http").Server(app);
const io = require("socket.io")(server);
const cors = require("cors");
let interval;

app.use(cors());

io.on("connection", function(client) {
    console.log("connected")
    setInterval(() => {
        console.log("in msg")
        client.emit("msg", "Hi User..Welcome to React Client App!!")
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