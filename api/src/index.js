const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const todoRouter = require("./router");

const { PORT, MONGO_URL } = require("./config");

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", todoRouter);

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  mongoose.connect(MONGO_URL).then(() => {
    console.log("Db is connected");
  });
  console.info(`App started on:http://localhost:${PORT}`);
});
