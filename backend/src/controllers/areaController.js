import expressAsyncHandler from "express-async-handler"

import Area from '../models/areamodel.js'
import { CustomError } from "../middlewares/customErr.js";

import { validateAreaInput } from "../Validators/areaValidator.js";

const getAreas = expressAsyncHandler(async (req, res) => {
    try {
        const Areas = await Area.find({ deletedAt: null }).populate("town_id","name")
        return res.status(200).json(Areas)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerArea = expressAsyncHandler(async (req, res) => {
    try {
        CustomError(validateAreaInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Area.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getArea = expressAsyncHandler(async (req, res) => {

    const Area = await Area.findById()
    return res.status(200).json(Area)
})

const getTownAreas = expressAsyncHandler(async (req, res) => {

    const Areas = await Area.find({ town_id: req.params.id })
    return res.status(200).json(Areas)
})

const updateArea = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Area.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Area Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Area Updated failed ' })
    }
})
const deleteArea = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Area.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getArea, getAreas, updateArea, deleteArea, getTownAreas, registerArea
}