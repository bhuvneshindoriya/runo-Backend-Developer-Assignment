import userModel from '../models/userModel'
exports.createUser =  function(req,res){
try{
const data = req.body
let {Name,PhoneNumber,Age,Pincode,AadharNo}=data
if(!Name) return res.status(400).send({status:false,message:"Please Enter Name"})
if(!PhoneNumber) return res.status(400).send({status:false,message:"Please Enter PhoneNumber"})
if(!Age) return res.status(400).send({status:false,message:"Please Enter Age"})
if(!Pincode) return res.status(400).send({status:false,message:"Please Enter Pincode"})
if(!AadharNo) return res.status(400).send({status:false,message:"Please Enter AadharNo"})


}catch(error){
    return res.status(500).send({status:false,message:error.message})
}
}
