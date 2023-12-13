import express from 'express'
import { createWorker, deleteWorkerById, getAllWorkers, getSignleWorker, updateWorker } from '../controllers/worker.controller.js';
const router = express.Router();


// /api/v1/worker/worker
router.post('/',createWorker)

// get single user by id
router.get('/:id',getSignleWorker)

// get single user by id
router.get('/',getAllWorkers)

// update single user
router.put('/',updateWorker)

// delete single user
router.delete('/:id',deleteWorkerById)



export default router