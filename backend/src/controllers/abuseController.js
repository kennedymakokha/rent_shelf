import expressAsyncHandler from "express-async-handler"

import Abuse from '../models/clientAbuse.js'
import { CustomError } from "../middlewares/customErr.js";
import { validateAbuseInput } from "../Validators/AbuseValidator.js";

// import { validateAbuseInput } from "../Validators/AbuseValidator.js";

const getAbuses = expressAsyncHandler(async (req, res) => {
    try {
        const Abuses = await Abuse.find({ deletedAt: null }).populate("createdBy", "name").populate("perpetuator", "name")
        return res.status(200).json(Abuses)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })
    }
})
const registerAbuse = expressAsyncHandler(async (req, res) => {
    try {
        console.log(req.body)
        CustomError(validateAbuseInput, req.body, res)

        req.body.createdBy = req.user._id,
            await Abuse.create(req.body)

        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getlordAbuses = expressAsyncHandler(async (req, res) => {
    const Abuses = await Abuse.find({ perpetuator: req.params.id })
    return res.status(200).json(Abuses)
})
export {
    getAbuses, getlordAbuses, registerAbuse
}