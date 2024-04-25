import dotenv from 'dotenv';
dotenv.config();


import express from 'express';
import cors from 'cors';

import foodRouter from './routers/food.router'
import userRouter from './routers/user.router'
import { dbConnect } from './configs/database.config';
import orderRouter from './routers/order.router';
dbConnect();

const app = express();
// express to receive data in json, as it does not support by default
app.use(express.json());

app.use(cors({
    credentials:true,
    origin:["http://localhost:4200"]
}))

app.use("/api/foods", foodRouter)
app.use("/api/users", userRouter)
app.use("/api/orders", orderRouter)


const port = 5000;

app.listen(port,()=>{
    console.log("website served on http://localhost:" + port);
})