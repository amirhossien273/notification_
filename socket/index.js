const { Server } = require("socket.io");
const { config } = require("./config");
const {
  joinNotification,
  users,
  disconnect,
} = require("./untile/notification");

const io = new Server();
const PORT = config.port;

io.on("connection", (socket) => {
  joinNotification(socket.id);
  socket.join("notification");

  socket.on("disconnect", () => {
    disconnect(socket.id);
  });
});

io.listen(PORT, () => console.log(`server running on port ${PORT}`));
