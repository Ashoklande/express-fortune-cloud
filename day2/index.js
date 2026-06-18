const express = require('express');

const app = express();

app.use(express.json());

//data send in the URL
app.get('/profile/:username/:password' ,(req,res)=>{
    const username  = req.params.username;
    const password  = req.params.password;

    if(username === "admin" && password === "12345"){
        res.send("login sucessful")
    }else{
        res.send("login failed");
    }
})


app.post('/login' ,(req,res) =>{
        const {username,password} = req.body;

         if(username === "admin" && password === "12345"){
        res.send("login sucessful")
    }else{
        res.send("login failed");
    }
})

app.listen(2000);