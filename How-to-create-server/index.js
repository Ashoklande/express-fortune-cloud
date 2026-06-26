const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to express");
});
                            
app.use((req, res) => {
  res.send("URL not found");
});

app.listen(2000);
