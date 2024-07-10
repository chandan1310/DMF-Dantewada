const AccController =require('../model/accountModel');
const StudentProfile =require("../model/studentProfileModel");


const getAccount =async(req,res)=>{
    
    try{
        const result = await AccController.findOne();
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


const getaAccWithStdProfile = async(req,res)=>{
    try{
        const accountDetail = await AccController.aggregate([
            {
                $lookup: {
                    from:"studentprofiles", // The name of the collection to join with
                    localField: 'uID', // Field from the users collection
                    foreignField: 'uID', // Field from the orders collection
                    as: 'studentprofiles' // The name of the array field in the output documents
                }
            }
        ]);
        console.log('Users with their orders:', accountDetail);
        res.status(200).send({
            status:true,
            sms:"Done !",
            data:accountDetail[0]
        })
        return accountDetail;
        
    }
    catch(error){
        console.log(error);

    }

}

const getaPopulateFunction = async (req, res) => {
    try {
        const accountDetail = await StudentProfile.findOne().populate('name').exec();

        if (!accountDetail) {
            return res.status(200).send({
                status: true,
                sms: "Data not found!",
                data: {
                    id: "",
                    student: []
                }
            });
        }

        const responseData = {
            id: accountDetail._id,
            student: accountDetail
        };

        console.log('Users with their student profiles:', responseData);
        
        res.status(200).send({
            status: true,
            sms: "Done!",
            data: responseData
        });
    } catch (error) {
        console.log('Error fetching account with student profile:', error);
        res.status(500).send({
            status: false,
            sms: "An error occurred!",
            data: null
        });
    }
};


module.exports  ={
    getAccount,
    getaAccWithStdProfile,
    getaPopulateFunction
};