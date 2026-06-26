const studentmodel = require("../models/Student");

module.exports.registerStudent = async (req,res) =>{

    try{

        const stud = await studentmodel.create(req.body);

        return res.status(201).json({sucess : true , stud});

    }catch(err){
        return res.status(500).json({sucess : false ,message : err.message});
    }
}

//update the student record 

module.exports.updateStudent = async (req,res) =>{

    try{

       const result = await studentmodel.updateOne({name : req.body.name },
            req.body
        )

        if(!result){
            return res.status(404).json({sucess : false , message : "student not found."});
        }

        return res.status(200).json({sucess : true , result});
    }catch(err){
        return res.status(500).json({sucess : fasle , message :err.message})
    }
}

//only few student updating

module.exports.partialStudentUpdate = async (req,res)=>{

    try {
        const id = req.params.id;
        const data = req.body;

       const  result =  await studentmodel.findByIdAndUpdate(id,data);

       if(!result){
         return res.status(404).json({
                success: false,
                message: "Student not found"
            });
       }

       return res.status(200).json({
            success: true,
            result
        });
        
    } catch (error) {
        return res.status(500).json({sucess : false , message : error.message});
    }
}