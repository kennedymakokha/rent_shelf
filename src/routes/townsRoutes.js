

import express from 'express'
import { getTown, getTowns, updateTown, deleteTown, registerTown } from '../controllers/townsController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteTown)
    .put(protect, updateTown)
    .get(protect, getTown)

router.route('/')
    .post(protect, registerTown)
    .get(protect, getTowns)

export default router 