const mongoose = require('mongoose');

 const ConnectDb = async () => {
        try{
           await mongoose.connect(process.env.MONGO_URI);
            console.log("Mongodb connected");
            
        }catch(err){
            console.log(err.message);
            process.exit(1);
        }
} 

module.exports = ConnectDb;