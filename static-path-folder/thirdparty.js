const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(morgan("dev"));

app.get("/" ,(req,res)=>{
    res.send("welcome to Home page")
})

app.listen(8080,()=>{
    console.log(`server start ${8080} `);
});