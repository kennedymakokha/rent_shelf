

import express from 'express'
import { getCategory, getCategorys, updateCategory, deleteCategory, registerCategory } from '../controllers/categoryController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteCategory)
    .put(protect, updateCategory)
    .get(protect, getCategory)

router.route('/')
    .post(protect, registerCategory)
    .get( getCategorys)

export default router 