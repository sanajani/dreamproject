import express from 'express'
import DB_CONNECTION from './db/db.connect.js';
import dotenv from 'dotenv'
dotenv.config()

import userRouter from './routes/user.router.js'
import workerRouter from './routes/worker.router.js'
import { globalErrorHandler } from './controllers/error.controller.js';

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 9808;

app.listen(PORT,() => {
    DB_CONNECTION();
    console.log(`http://localhost:${PORT}`);
})

app.use('/api/v1/user',userRouter)
app.use('/api/v1/worker',workerRouter)


// global page not found
app.all("*",(req,res,next) => {
  const error = new Error(`Can't find ${req.originalUrl} on the server`);
  error.status = 'fail'
  error.statusCode = 404
  next(error)
})

// Error handling middleware
app.use(globalErrorHandler);