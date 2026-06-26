const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const  ConnectDb  = require('./config/ConnectDb');

const studentroute = require('./routes/students');

dotenv.config() //server file 
ConnectDb();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api',studentroute);

app.get('/' , ()=>{
    console.log(`api hit`);
}) 

app.listen(process.env.PORT, () =>{
    console.log(`server started at port ${process.env.PORT}`);
    
})