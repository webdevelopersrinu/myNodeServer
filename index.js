const express = require("express");
const { productsList } = require("./productsList");
const app = express();

const products = productsList;

app.get("/", (req, res) => {
  res.status(200).send("welcome to my web this is srinu desetti");
});

app.get("/products", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: products,
    });
  } catch (err) {
    res.status(404).json({
      status: "Fial",
      message: err.message,
    });
  }
});

const PORT = process.env.PORT || 3890;
app.listen(PORT, () => {
  console.log("server is start runing...");
});
