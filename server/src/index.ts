import * as express from "express";
import * as http from "node:http";
import { Server } from "socket.io";

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const staticRoute = "/Users/jiangzhijian/openSource/chat/client/out";

app.use(express.static(staticRoute));

app.get("/", (req, res) => {
  res.sendFile(staticRoute + "/index.html");
});

io.on("connection", (socket) => {
  socket.on("chat message", (msg) => {
    console.log("message: " + msg);
  });
});

server.listen(3000, () => {
  console.log("listening on *:3000");
});
