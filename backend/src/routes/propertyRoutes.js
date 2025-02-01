

import express from 'express'
import { getProperty, addMultiples,getSingleSubProperty, getSubproperties, getPropertys, updateProperty, deleteProperty, registerProperty } from '../controllers/propertyController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteProperty)
    .put(protect, updateProperty)
    .get(protect, getProperty)
router.route('/multiple/:id')
    .post(protect, addMultiples)
router.route('/category/:id')
    .get(protect, getSingleSubProperty)
router.route('/')
    .post(protect, registerProperty)
    .get(getPropertys)

export default router 