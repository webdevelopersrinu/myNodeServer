const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.status(200).send("welcome to my web this is srinu desetti");
});

const PORT = process.env.PORT || 3890;
app.listen(PORT, () => {
  console.log("server is start runing...");
});
