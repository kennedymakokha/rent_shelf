

import express from 'express'
import { getFeature, getFeatures, updateFeature, deleteFeature, registerFeature } from '../controllers/featuresController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteFeature)
    .put(protect, updateFeature)
    .get(protect, getFeature)

router.route('/')
    .post(protect, registerFeature)
    .get(protect, getFeatures)

export default router 