

import express from 'express'
import { getType, getTypes, updateType, deleteType, registerType } from '../controllers/typesController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteType)
    .put(protect, updateType)
    .get(protect, getType)

router.route('/')
    .post(protect, registerType)
    .get( getTypes)

export default router 