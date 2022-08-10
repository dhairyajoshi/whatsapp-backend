const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;
require('dotenv').config();
const server = http.createServer(app);

const io = require("socket.io")(server, { cors: { origin: "*" } });

server.listen(port);

io.use()

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.broadcast.emit("event", "this is the broadcast");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });
});
