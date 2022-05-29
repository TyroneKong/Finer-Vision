const express = require("express");
const app = express();
const PORT = 8080;
const mongoose = require("mongoose");
require("dotenv").config();
const formRoute = require("./routes/form");
const cors = require("cors");

// connect to mongodb

//URI = "mongodb+srv://tyrone:NOJLBxz52xuif1vz@cluster0.mcjuo.mongodb.net/?retryWrites=true&w=majority"
const uri = process.env.URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection successfull");
});

//middleware
app.use(express.json());
app.use(cors());

app.use("/", (req, res, next) => {
  console.log("incoming request");
  next();
});

app.use("/", formRoute);

//routes

app.get("/", (req, res) => {
  res.json("welcome to my api");
});

app.post("/", (req, res) => {
  res.json("You have posted!");
});

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`listening on port ${PORT}`);
  } else {
    console.log(err);
  }
});
