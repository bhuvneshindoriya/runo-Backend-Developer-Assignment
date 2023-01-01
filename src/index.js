import express from "express"
import mongoose from "mongoose"
import route from './routes/route.js'
const app = express()



app.use(express.json())
mongoose.connect('mongodb+srv://bhanu:Bhanu08@cluster0.gu0q6pj.mongodb.net/runocompany',{useNewUrlParser:true})
.then(()=> console.log("MongoDb is conntected"))
.catch((err)=> console.log(err.message))

app.use('/',route)
app.listen(3000,console.log("running on 3000"))