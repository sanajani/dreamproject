import express from 'express'
import { createWorker, getSignleWorker, updateWorker } from '../controllers/worker.controller.js';
const router = express.Router();


// /api/v1/worker/worker
router.post('/worker',createWorker)
// get single user by id
router.get('/worker/:id',getSignleWorker)
// update single user
router.put('/worker',updateWorker)



export default router