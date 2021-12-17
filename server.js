import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRouter from "./src/routes/userroutes";
import tourRouter from "./src/routes/tourroutes"


dotenv.config("./.env")

const app= express();


app.use(bodyParser.json());

app.use("/user",userRouter);
app.use("/tour",tourRouter);

app.use("/",(req,res)=> res.status(200).json({
    message:"This is tour API"
}));


const dbUrl=process.env.DATABASEURL;
mongoose.connect(dbUrl).then(()=> console.log("Database connected successfully"));

app.listen(3030,()=>{
    console.log(`Server is running on Port 3030`);
})


export default app;