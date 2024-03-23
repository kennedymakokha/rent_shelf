import express from 'express'
import { login_user, activate_User, updateUserProfile, getroleUsers, EditUserDetails, register_User, logoutUser, getUserProfile, getUser } from '../controllers/usersController.js'
import { isAuth, protect } from '../middlewares/authMiddleware.js'

const router = express.Router()
router.post('/', protect, register_User)

router.get('/role-users/:role', protect, getroleUsers)
router.route('/:id').put(protect, EditUserDetails).get(protect, getUser)
router.route('/activate/:id').put(protect, activate_User)

router.post('/login', login_user)
router.post('/logout', logoutUser)
router.route('/user/profile')
    .get(protect, getUserProfile)
    .put(protect, updateUserProfile)

export default router 