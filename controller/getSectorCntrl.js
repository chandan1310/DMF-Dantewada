const GetSector =require('../model/getSectorModel');
const GetVillage =require('../model/villages');



const getSector =async(req,res)=>{
    
    try{
        const result = await GetSector.find();
        console.log('check account',result);
    
        if (!result || result.length === 0) {
        
            return res.status(200).send({
                status:true,
                sms:"Data not found !",
                data:null

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

const getVillage =async(req,res)=>{
    
    try{
        const result = await GetVillage.find();
        console.log('check account',result);
    
        if (!result || result.length === 0) {
        
            return res.status(200).send({
                status:true,
                sms:"Data not found !",
                data:null

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

module.exports  ={
    getSector,
    getVillage
};