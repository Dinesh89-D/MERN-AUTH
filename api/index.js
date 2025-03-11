import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv';
import userRoutes from './Routes/user.Route.js'
import authRoutes from './Routes/auth.route.js'
dotenv.config();
mongoose.connect(process.env.MONG0_DB).then(()=>{
    console.log('Connected to MONGODB');
}).catch((err)=>{
    console.log(err);
})

const app = express();
app.use(express.json());
app.listen(3000,()=>{
    console.log('Sever listening on port 3000!');
});

app.use("/api/user",userRoutes);
app.use("/api/auth",authRoutes);