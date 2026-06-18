const express = require("express");

const app = express();
const router = express.Router();
const path = require('path');

app.use(express.static('public'));
router.use((req, res, next) => {
  console.log("poster Loaded");
  setTimeout(() => {
    next();
  }, 5000);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname,"public/index.htm"));
});

app.listen(3000, function () {
  console.log(`server start at port ${3000}`);
});
