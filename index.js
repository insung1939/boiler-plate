const express = require("express");
const app = express();
const port = 5000;

const mongoose = require("mongoose");
mongoose
  .connect(
    "mongodb+srv://insung:1939inin!!@boilerplate.rnyeo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("mongoDB connected..");
  })
  .catch(err => {
    console.log(err);
  });

app.get("/", (req, res) => {
  res.send("Hello Insung World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
