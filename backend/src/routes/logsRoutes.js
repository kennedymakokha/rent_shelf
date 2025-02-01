

import express from 'express'
import { registerSMSlog, getSmsLogs, getUserLogs, getLoginLogs } from '../controllers/logsController.js'
import Logs, { SignInLogs } from './../models/logsmodel.js'

import { protect } from '../middlewares/authMiddleware.js'
import Paginate from './../paginators/logspaginator.js'
const router = express.Router()

router.route('/smslogs')
    .post(registerSMSlog)
    .get([Paginate(Logs)], protect, getSmsLogs)

router.route('/smslogs/:id')
    .get(protect, getUserLogs)
router.route('/login-logs').get([Paginate(SignInLogs)], protect, getLoginLogs)

export default router 