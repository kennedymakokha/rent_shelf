import expressAsyncHandler from "express-async-handler"
import multer from 'multer'
import { v4 } from 'uuid'
import Shelf from '../models/shelfmodel.js'
import path from 'path';
import { CustomError } from "../middlewares/customErr.js";
import multiparty from 'multiparty';
import { validateShelfInput } from "../Validators/shelfValidator.js";
import imagemin from 'imagemin';
import imageminMozJpeg from 'imagemin-mozjpeg';
const getShelfs = expressAsyncHandler(async (req, res) => {
    try {


        let featured = await Shelf.find({ deletedAt: null, featured: true }).populate("town_id", "name")
            .populate("area_id", "name")
            .populate("type_id", "name")
            .populate("features", "name")
        let all = await Shelf.find({ deletedAt: null }).populate("town_id", "name")
            .populate("area_id", "name")
            .populate("type_id", "name")
            .populate("features", "name")

        return res.status(200).json({ all, featured })


    } catch (error) {

        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerShelf = expressAsyncHandler(async (req, res) => {
    try {
     
        const reqFiles = [];
        const url = req.protocol + '://' + req.get('host')
        CustomError(validateShelfInput, req.body, res)
        if (req.files.length === 0) {
            res.status(400).json({ message: 'Kindly upload at least one image ' })
            return
        }
        for (var i = 0; i < req.files.length; i++) {
            reqFiles.push(url + '/public/uploads/files/' + req.files[i].filename);
            await imagemin(["public/uploads/files/" + req.files[i].filename], {
                destination: "public/uploads/files",
                plugins: [
                    imageminMozJpeg({ quality: 30 })
                ]
            })

        }
        req.body.files = reqFiles
        req.body.createdBy = req.user._id
        let shel = await Shelf.create(req.body)
        res.status(200).json({ message: 'Shelf Updated successfully ', shel })
        return
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Failed ', error })
    }
})
const getShelf = expressAsyncHandler(async (req, res) => {

    const Shelf = await Shelf.findById()
    return res.status(200).json(Shelf)
})

const updateShelf = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Shelf.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Shelf Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Shelf Updated failed ' })
    }
})
const deleteShelf = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Shelf.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getShelf, getShelfs, updateShelf, deleteShelf, registerShelf
}