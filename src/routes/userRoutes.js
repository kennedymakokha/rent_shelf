import express from 'express'
import { login_user, activate_User,ResendActivation, getAffiliateCounts, Whatsap, getUsers1, updateUserProfile, getroleUsers, EditUserDetails, register_User, logoutUser, getUserProfile, getUser } from '../controllers/usersController.js'
import { isAuth, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.post('/', register_User)
router.get('/whatasap', Whatsap)

router.get('/', protect, getUsers1)
router.get('/affiliates', protect, getAffiliateCounts)

router.get('/role-users/:role', protect, getroleUsers)
router.route('/:id').put(protect, EditUserDetails).get(protect, getUser)
router.route('/sms/resend-activation-key/:id').post( ResendActivation)
router.route('/activate/:id').put(protect, activate_User)

router.post('/login', login_user)
router.post('/logout', protect, logoutUser)
router.route('/user/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router 