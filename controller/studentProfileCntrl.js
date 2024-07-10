const StudentDetail =require('../model/studentProfileModel');
console.log('run student module');
const addProfile =async(req,res)=>{
    try{
       const save = StudentDetail({
            name:req.body.name,
            email:req.body.email,
            phone_No:req.body.phone_No,
            designation:req.body.designation
        });
       const result =await save.save();
       console.log('check result ',result);
       res.status(200).send({
        status:true,
        sms:"Done !",
        data:result
       })
       
    }catch(e){
        console.log('catch part');
        res.send(e)

    }
    // let StudentDetail = await StudentDetail.find();
    

}
const getProfile =async(req,res)=>{
    try{
        const result = await StudentDetail.find();
        
        if (!result || result.length === 0) {
           
            return res.status(200).send({
                status:true,
                sms:"Data not found !",
                data:[]

            });
        }
      
        res.status(200).send({
            status:true,
            sms:"Done !",
            data:result
        });

    }catch(error){
        console.log('check',error);
    }

}

module.exports = {
    addProfile,
    getProfile
}