const express = require("express");
const mongoose = require("mongoose");
const MoviesModel = require("./model/Movie");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("welcome to my web this is srinu desetti");
});

app.get("/api/v1/movies", async (req, res) => {
  try {
    let movieData = await MoviesModel.find();
    if (!movieData) {
      throw "movie Data is not found!";
    }
    res.status(200).json({
      status: "success",
      data: movieData,
    });
  } catch (err) {
    res.status(403).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.get("/api/v1/movies/:id", async (req, res) => {
  try {
    let movieData = await MoviesModel.findById(req.params.id);
    if (!movieData) {
      throw "movie Data is not found!";
    }
    res.status(200).json({
      status: "success",
      data: movieData,
    });
  } catch (err) {
    res.status(403).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.post("/api/v1/movies", async (req, res) => {
  try {
    console.log(req.body);
    let movieData = await MoviesModel.create(req.body);
    if (!movieData) {
      throw "movie Data is not found!";
    }
    res.status(200).json({
      status: "success",
      data: movieData,
    });
  } catch (err) {
    res.status(403).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.delete("/api/v1/movies/:id", async (req, res) => {
  try {
    let movieData = await MoviesModel.findByIdAndDelete(req.params.id);
    if (!movieData) {
      throw "movie Data is not found!";
    }
    res.status(200).json({
      status: "success",
      message: "movie delete successfully",
      data: movieData,
    });
  } catch (err) {
    res.status(403).json({
      status: "fail",
      message: err.message,
    });
  }
});

app.all("*", (req, res, next) => {
  let message = `this page ${req.originalUrl} is not found!`;
  res.status(404).json({
    status: "Fial",
    message,
  });
});

mongoose
  .connect("mongodb+srv://webdevelopersrinu9:sAzVbS2Tq9TcphYT@cluster0.4hn8y.mongodb.net/aha")
  .then(() => console.log("db connection is success"))
  .catch(() =>
    console.log("db connection is not success some error is occurred!")
  );

const PORT = process.env.PORT || 3890;
app.listen(PORT, () => {
  console.log("server is start runing...");
});
