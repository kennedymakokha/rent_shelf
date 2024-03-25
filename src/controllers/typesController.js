import expressAsyncHandler from "express-async-handler"

import Type from '../models/typesmodel.js'
import { CustomError } from "../middlewares/customErr.js";

import { validateTypeInput } from "../Validators/typesValidator.js";

const getTypes = expressAsyncHandler(async (req, res) => {
    try {
        const Types = await Type.find({ deletedAt: null })
        return res.status(200).json(Types)
    } catch (error) {
        return res.status(404);
        throw new Error("Fetching Failed ")
    }
})
const registerType = expressAsyncHandler(async (req, res) => {
    try {
        await CustomError(validateTypeInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Type.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getType = expressAsyncHandler(async (req, res) => {

    const Type = await Type.findById()
    return res.status(200).json(Type)
})

const updateType = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Type.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Type Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Type Updated failed ' })
    }
})
const deleteType = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Type.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getType, getTypes, updateType, deleteType, registerType
}