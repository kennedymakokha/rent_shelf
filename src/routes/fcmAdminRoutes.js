
import expressAsyncHandler from "express-async-handler"

import express from 'express'
import { SubscribeToTopic } from '../controllers/fcmAdmincontroller.js'
import { protect } from '../middlewares/authMiddleware.js'

const router = express.Router()

router.route('/subscribe')
    .post(SubscribeToTopic)


export default router 