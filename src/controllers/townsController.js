import expressAsyncHandler from "express-async-handler"

import Town from '../models/townsmodel.js'
import { CustomError } from "../middlewares/customErr.js";

import { validateTypeInput } from "../Validators/typesValidator.js";

const getTowns = expressAsyncHandler(async (req, res) => {
    try {
        const Towns = await Town.find({ deletedAt: null })
        return res.status(200).json(Towns)
    } catch (error) {
        return res.status(400).json({message:"Error Ocured try again",error})
    
    
    }
})
const registerTown = expressAsyncHandler(async (req, res) => {
    try {
        await CustomError(validateTypeInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Town.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getTown = expressAsyncHandler(async (req, res) => {

    const Town = await Town.findById()
    return res.status(200).json(Town)
})

const updateTown = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Town.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Town Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Town Updated failed ' })
    }
})
const deleteTown = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Town.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getTown, getTowns, updateTown, deleteTown, registerTown
}