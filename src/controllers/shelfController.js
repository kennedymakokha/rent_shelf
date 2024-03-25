import expressAsyncHandler from "express-async-handler"

import Shelf from '../models/shelfmodel.js'
import { CustomError } from "../middlewares/customErr.js";

import { validateShelfInput } from "../Validators/shelfValidator.js";

const getShelfs = expressAsyncHandler(async (req, res) => {
    try {
        const Shelfs = await Shelf.find({ deletedAt: null })
        return res.status(200).json(Shelfs)
    } catch (error) {
        return res.status(404);
        throw new Error("Fetching Failed ")
    }
})
const registerShelf = expressAsyncHandler(async (req, res) => {
    try {
        await CustomError(validateShelfInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Shelf.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
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