

import express from 'express'
import { getRole, getRoles, updateRole, deleteRole, registerRole } from './../controllers/rolesController.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.route('/:id')
    .delete(protect, deleteRole)
    .put(protect, updateRole)
    .get(protect, getRole)

router.route('/')
    .post( registerRole)
    .get(protect, getRoles)

export default router 