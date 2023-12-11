import express from 'express'
import DB_CONNECTION from './db/db.connect.js';

import userRouter from './routes/user.router.js'

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 9808;

app.listen(PORT,() => {
    DB_CONNECTION();
    console.log(`http://localhost:${PORT}`);
})

app.use('/api/v1/user',userRouter)

// Error handling middleware
app.use((err, req, res, next) => {
    // Handle custom errors
    if (err instanceof BadRequestError || err instanceof NotFoundError) {
      return res.status(err.statusCode).json({ error: err.message });
    }
    // Handle other errors
    console.error(err);
    res.status(500).json({ error: 'Internal Server Error' });
  });