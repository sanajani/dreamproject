import express from 'express'
import { createWorker } from '../controllers/worker.controller.js';
const router = express.Router();


// /api/v1/worker/worker
router.post('/worker',createWorker)

// /api/v1/worker/signin
// router.post('/signin',loginUser)


export default router