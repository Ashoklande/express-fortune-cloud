const express = require('express');
const app = express();


app.use((req,res,next)=>{
    console.log("poster Loaded");
    setTimeout(()=>{
        next();
    },5000);
});

app.get("/",(req,res)=>{
    res.send("welcome to home page");
})
     
app.listen(2000);