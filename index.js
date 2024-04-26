//imports
require("dotenv").config();
const express = require("express");
const cors = require("cors");
const db = require("./src/Database");
const router = require("./src/Router");
const http = require("http");
const socketio = require("socket.io");

//env
const PORT = process.env.PORT;

//express
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json());

//socketio
const server = http.Server(app);
const io = socketio(server);
server.listen(80);
io.sockets.on("connection", function (socket) {
    socket.on("joinArea", function (room) {
        socket.join(room);
    });

    socket.on("joinMap", function (room) {
        socket.join(room);
    });
});

//db
db.on("error", console.error.bind(console, "MongoDB connection error:"));

//socketio inside routes
app.use((req, _, next) => {
    req.io = io;

    return next();
});

//routes
app.use("/api", router);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
