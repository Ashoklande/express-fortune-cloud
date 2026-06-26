const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();


const connectDb = require('./config/db');
const userroute = require('./routes/userroutes');

dotenv.config();
connectDb();  //connection to mongodb

app.use(express.json());
app.use(cors());


app.get("/", (req, res) => {
  return res.send("Api hit");
});

app.use('/api',userroute);

app.listen(process.env.PORT, () => {
  console.log(`SERVER START ON PROT ${process.env.PORT}`);
});
