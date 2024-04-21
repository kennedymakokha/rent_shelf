

import express from 'express'
import { getSubCategory, getSubCategorys, getSingleSubCategory,updateSubCategory, deleteSubCategory, registerSubCategory } from '../controllers/subController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/category/:id')
    .get(protect, getSingleSubCategory)
router.route('/:id')
    .delete(protect, deleteSubCategory)
    .put(protect, updateSubCategory)
    .get(protect, getSubCategory)

router.route('/')
    .post(protect, registerSubCategory)
    .get( getSubCategorys)

export default router 