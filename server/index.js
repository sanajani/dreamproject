import express from 'express'

const app = express();

const PORT = process.env.PORT || 9808;

app.listen(PORT,() => {
    console.log(`http://localhost:${PORT}`);
})