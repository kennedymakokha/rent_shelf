import expressAsyncHandler from "express-async-handler"

import Town from '../models/townsmodel.js'
import { CustomError } from "../middlewares/customErr.js";

import { validateTypeInput } from "../Validators/typesValidator.js";
import { TownsArray } from "./towns.js";

const getTowns = expressAsyncHandler(async (req, res) => {
    try {
        const Towns = await Town.find({ deletedAt: null })
        return res.status(200).json(Towns)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerTown = expressAsyncHandler(async (req, res) => {
    try {
        console.log(TownsArray.length)
        for (let index = 0; index < TownsArray.length; index++) {
            const element = TownsArray[index];
            req.body.createdBy = req.user._id
            req.body.name = element.name
            req.body.location = {
                lng: element.lng,
                lat: element.lat
            }
          
            await Town.create(req.body)
        }
        // await CustomError(validateTypeInput, req.body, res)

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