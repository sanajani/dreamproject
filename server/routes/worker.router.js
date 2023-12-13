import express from 'express'
import { createWorker, deleteWorkerById, getSignleWorker, updateWorker } from '../controllers/worker.controller.js';
const router = express.Router();


// /api/v1/worker/worker
router.post('/worker',createWorker)

// get single user by id
router.get('/worker/:id',getSignleWorker)

// update single user
router.put('/worker',updateWorker)

// delete single user
router.delete('/worker/:id',deleteWorkerById)



export default router