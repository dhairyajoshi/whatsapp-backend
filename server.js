const http = require("http");
const app = require("./app");
const port = process.env.PORT || 3000;

const server = http.createServer(app);

const io = require("socket.io")(server, { cors: { origin: "*" } });

io.on("connection", () => {
  console.log(socket.id);
});

server.listen(port);
