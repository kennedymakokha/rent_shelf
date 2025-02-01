import expressAsyncHandler from "express-async-handler"

import Feature from '../models/featuremodel.js'
import { CustomError } from "../middlewares/customErr.js";

import { validateTypeInput } from "../Validators/typesValidator.js";

const getFeatures = expressAsyncHandler(async (req, res) => {
    try {
        const Features = await Feature.find({ deletedAt: null })
        return res.status(200).json(Features)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })

    }
})
const registerFeature = expressAsyncHandler(async (req, res) => {
    try {
        CustomError(validateTypeInput, req.body, res)
        // req.body.createdBy = req.user._id,
        await Feature.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getFeature = expressAsyncHandler(async (req, res) => {

    const Feature = await Feature.findById()
    return res.status(200).json(Feature)
})

const updateFeature = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Feature.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Feature Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Feature Updated failed ' })
    }
})
const deleteFeature = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Feature.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getFeature, getFeatures, updateFeature, deleteFeature, registerFeature
}