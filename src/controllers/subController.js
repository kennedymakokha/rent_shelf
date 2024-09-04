import expressAsyncHandler from "express-async-handler"
// import SubCategory from '../models/subcategorymodel.js'

import { CustomError } from "../middlewares/customErr.js";
import { validateSubCategoryInput } from "../Validators/categoryValidator.js";
import Scategory from "../models/sCategorymodel.js";



const getSubCategorys = expressAsyncHandler(async (req, res) => {
    try {

        const SubCategorys = await Scategory.find({ deletedAt: null }).populate("category_id")
        return res.status(200).json(SubCategorys)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        CustomError(validateSubCategoryInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Scategory.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        const Sub = await Scategory.find({ category_id: req.params.id })
        return res.status(200).json(Sub)
    } catch (error) {
        console.log(error)
    }
})

const getSingleSubCategory = expressAsyncHandler(async (req, res) => {
    console.log(req.params)
    const Sub = await Scategory.findById(req.params.id)
    return res.status(200).json(Sub)
})


const updateSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Scategory.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'SubCategory Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'SubCategory Updated failed ' })
    }
})
const deleteSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Scategory.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getSubCategory, getSubCategorys, getSingleSubCategory, updateSubCategory, registerSubCategory, deleteSubCategory
}