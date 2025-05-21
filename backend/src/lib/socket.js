import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "*",
  },
});

export function getReceiverSocketId(userId) {
  console.log("getReceiverSocketId called with userId:", userId);
  console.log(userSocketMap[userId])
  return userSocketMap[userId];
}

// used to store online users
const userSocketMap = {}; // {userId: socketId}

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id, "UserID:", socket.handshake.query.userId);

  const userId = socket.handshake.query.userId;
  if (userId) {
    userSocketMap[userId] = socket.id;
    // Broadcast updated online users list to all clients
    io.emit("getOnlineUsers", Object.keys(userSocketMap));
    console.log("Current online users:", Object.keys(userSocketMap));
  } else {
    console.error("UserID is undefined!");
  }

  // Handle getOnlineUsers request
  socket.on("getOnlineUsers", () => {
    socket.emit("getOnlineUsers", Object.keys(userSocketMap));
  });

  socket.on("disconnect", () => {
    console.log("A user disconnected", socket.id);
    if (userId) {
      delete userSocketMap[userId];
      // Broadcast updated online users list to all clients
      io.emit("getOnlineUsers", Object.keys(userSocketMap));
      console.log("Updated online users after disconnect:", Object.keys(userSocketMap));
    }
  });
});


export { io, app, server };