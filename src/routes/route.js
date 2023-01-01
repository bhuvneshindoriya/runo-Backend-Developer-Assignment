import {Router} from "express";
const router = Router()

export default router


router.get('/test-me',function(req,res) {
    res.status(200).send({status:true,message:"running perfect"})
    console.log("running");
})
// module.exports= router