const Location =require('../model/locationMode');


const getLocation =async(req,res)=>{
    try{
        const result = await Location.find();
        
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


module.exports  ={getLocation};