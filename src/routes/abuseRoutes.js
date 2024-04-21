

import express from 'express'
import { getAbuses, getlordAbuses, registerAbuse } from '../controllers/abuseController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .get(protect, getlordAbuses)
router.route('/')
    .post(protect, registerAbuse)
    .get(protect, getAbuses)
export default router 