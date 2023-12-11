import express from 'express'
import DB_CONNECTION from './db/db.connect.js';

const app = express();

const PORT = process.env.PORT || 9808;

app.listen(PORT,() => {
    DB_CONNECTION();
    console.log(`http://localhost:${PORT}`);
})