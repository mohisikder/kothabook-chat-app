const express = require("express");
const dotenv = require("dotenv");

const { chats } = require("./data/data");
const connectDB = require("./config/db");

dotenv.config();
connectDB();
const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.get("/api/chat", (req, res) => {
  res.send(chats);
});

app.get("/api/chat/:id", (req, res) => {
  const id = req.params.id;
  const singleChat = chats.find((c) => c._id === id);
  res.send(singleChat);
});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server Started on port", ${port}`));
