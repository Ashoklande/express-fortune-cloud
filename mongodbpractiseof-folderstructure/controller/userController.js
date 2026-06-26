const usermodel = require('../models/usermodel');

module.exports.registerUser = async(req,res) =>{

    try {

        if(!req.body){
            return res.status(404).json({sucess : false , message : "user data not found"});
        }

         const user = new usermodel({
            userName  : req.body.name,
            address : req.body.address
         })

         await user.save();

         return res.status(201).json({sucess : true , user});
         
    } catch (error) {
        return res.status(500).json({sucess : false , message : error.message});
    }
}