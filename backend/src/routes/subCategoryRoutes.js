

import express from 'express'
import { fetch_sub_category, fetch_sub_categories, fetch_single_category,updateSubCategory, registerSubCategory, deleteSubCategory } from '../controllers/subController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/category/:id')
    .get( fetch_single_category)
router.route('/:id')
    .delete(protect, deleteSubCategory)
    .put(protect, updateSubCategory)
    .get(protect, fetch_sub_category)

router.route('/')
    .post(protect, registerSubCategory)
    .get(protect, fetch_sub_categories)

export default router 