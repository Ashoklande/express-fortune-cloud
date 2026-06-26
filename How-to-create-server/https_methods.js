const express = require("express");

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome to express");
});

app.post('/register',(req,res) =>{
      const {name}=  req.body  ;
    console.log(name);
    res.send("completed");
})
                                          
app.put('/update-all',(req,res) =>{
     
    res.send("updated");
})
                                          
app.patch('/updateprofile',(req,res) =>{
    res.send("partially updated");
})

app.delete('/delete-record',(req,res) =>{
    res.send("data deleted.")
})
                                          
app.use((req, res) => {
  res.send("URL not found");
});

app.listen(2000);
