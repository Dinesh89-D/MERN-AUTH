import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();
mongoose.connect(process.env.MONG0_DB).then(()=>{
    console.log('Connected to MONGODB');
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.listen(3000,()=>{
    console.log('Sever listening on port 3000!');
})