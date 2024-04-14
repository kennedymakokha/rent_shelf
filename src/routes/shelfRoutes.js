

import express from 'express'
import { getShelf, getShelfs, publishUnpublishShelf, updateShelf, deleteShelf, getUsershelves, registerShelf } from '../controllers/shelfController.js'
import { protect } from '../middlewares/authMiddleware.js'
import multer from 'multer';
import path from 'path'; ``
import { v4 } from 'uuid'

import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, __dirname + './../../public/uploads/files');
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, v4() + '-' + fileName)
    }
});
var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "image/png" || file.mimetype == "image/webp" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
            cb(null, true);
        } else {
            cb(null, false);

            return cb(new Error('Only .jpg and .png are allowed'));
        }
    }
});
const router = express.Router()
router.route('/publish/:id').put(protect, publishUnpublishShelf)
router.route('/:id')
    .delete(protect, deleteShelf)
    .put(protect, updateShelf)
    .get(getShelf)
router.route('/user/:id').get(protect, getUsershelves)


router.route('/')
    .post([upload.array('files'), protect], registerShelf)
    .get(getShelfs)

export default router 