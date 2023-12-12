import express from 'express'

import { registerUser, loginUser } from '../controllers/user.controller.js';

const router = express.Router();

router.get("/",(req,res,next) => {
    res.send("Hello world")
})
// /api/v1/user/signup
router.post('/signup',registerUser)

// /api/v1/user/signin
router.post('/signin',loginUser)


export default router