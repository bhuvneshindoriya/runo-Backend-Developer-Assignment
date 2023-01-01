import mongoose from "mongoose";

const userSchema =  new mongoose.Schema({
Name :{type:String,require:true},
PhoneNumber :{type :Number,require:true},
Age:{type:Number,require:true},
Pincode:{type:Number,require:true},
AadharNo :{type:Number,require:true}
})
module.exports = mongoose.model(user,userSchema)