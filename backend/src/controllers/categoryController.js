import expressAsyncHandler from "express-async-handler"

import Category from '../models/categorymodel.js'
import { CustomError } from "../middlewares/customErr.js";
import { validateCategoryInput } from "../Validators/categoryValidator.js";


const getCategorys = expressAsyncHandler(async (req, res) => {
    try {
        const Categorys = await Category.find({ deletedAt: null })
        return res.status(200).json(Categorys)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerCategory = expressAsyncHandler(async (req, res) => {
    try {
        CustomError(validateCategoryInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Category.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getCategory = expressAsyncHandler(async (req, res) => {

    const Category = await Category.findById()
    return res.status(200).json(Category)
})


const updateCategory = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Category.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Category Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Category Updated failed ' })
    }
})
const deleteCategory = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Category.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getCategory, getCategorys, updateCategory, deleteCategory, registerCategory
}