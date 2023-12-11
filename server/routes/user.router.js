import express from 'express'

import { registerUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/",(req,res,next) => {
    res.send("Hello world")
})
// /api/v1/user/signup
router.post('/signup',registerUser)

export default router