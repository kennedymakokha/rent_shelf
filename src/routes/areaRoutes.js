

import express from 'express'
import { getArea, getAreas, updateArea, deleteArea, getTownAreas, registerArea } from '../controllers/areaController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteArea)
    .put(protect, updateArea)
    .get(protect, getArea)
router.route('/town/:id').get( getTownAreas)
router.route('/')
    .post(protect, registerArea)
    .get( getAreas)

export default router 