import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './Database/db.connect.js';
import mentRouter from './Routers/mentor.router.js';
import stuRouter from './Routers/student.router.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api/mentor',mentRouter);
app.use('/api/student',stuRouter);
connectDB();

const port = process.env.PORT;

app.listen(port,()=>{
    console.log("App running in port -", port);
})