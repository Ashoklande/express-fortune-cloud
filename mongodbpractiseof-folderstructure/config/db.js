
const mongoose = require('mongoose');

const connectDb = async () =>{

    await mongoose.connect(process.env.MONGO_URI).
            then((res) =>{
                console.log('mongodb connected.');
                
            }).
            catch((err)=>{
                console.log('Mongodb err : ',err);
            })

}

module.exports = connectDb;