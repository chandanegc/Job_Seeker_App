import 'express-async-errors';
import express from 'express';
const app = express();
import mongoose from "mongoose";
import jobRouter from './Router/jobRouter.js';
import errorHandlerMiddleware from './Middleware/ErrorHandler.js';
import authRouter from './Router/authRouter.js';
import cookieParser from 'cookie-parser';
import userRouter from "./Router/userRouter.js"
import {v2 as cloudinary} from 'cloudinary';

import {dirname} from "path";
import { fileURLToPath } from 'url';
import path from 'path';

//midleware
app.use(cookieParser());
app.use(express.json());

// Router 
app.use("/api/v1/jobs" , jobRouter); 
app.use("/api/v1/auth" ,authRouter);
app.use("/api/v1/user", userRouter)

app.use(errorHandlerMiddleware);


const __dirname = dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.resolve(__dirname , './public')));
app.use(express.static(path.resolve(__dirname, './client/dist'))); //optional

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './public', 'index.html'));
});


try {
    mongoose.connect();
    // mongoose.connect("mongodb://127.0.0.1:27017/JonSeeker");
    app.listen(process.env.PORT || 5100 , () => {
      console.log('server running.... 5100');
    });
} catch (error) {
  console.log(error); 
  process.exit(1);
}

