

import express from 'express'
import { getShelf, getShelfs, updateShelf, deleteShelf, registerShelf } from '../controllers/shelfController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteShelf)
    .put(protect, updateShelf)
    .get(protect, getShelf)

router.route('/')
    .post(protect, registerShelf)
    .get(protect, getShelfs)

export default router 