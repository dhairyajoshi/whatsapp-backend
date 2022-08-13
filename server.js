const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;
require('dotenv').config();
const server = http.createServer(app);

const io = require("socket.io")(server, { cors: { origin: "*" },rejectUnauthorized: false });

server.listen(port);

io.on('connect_error',(data)=>{
  console.log('yes');
})

io.on("connection", (socket) => {
  console.log(socket.id);
  socket.broadcast.emit("event", "this is the broadcast");

  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
  });

  socket.on('refresh',(data)=>{
    io.emit('refresh',data)
  })
});
