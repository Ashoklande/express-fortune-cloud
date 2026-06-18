const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to home page");

})

app.listen(3000,function(){
    console.log(`server start at port ${3000}`);
})