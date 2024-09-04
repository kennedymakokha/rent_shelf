import expressAsyncHandler from "express-async-handler"

// import SubCategory from '../models/Subcategorymodel.js'
import { CustomError } from "../middlewares/customErr.js";
import { validateSubCategoryInput } from "../Validators/categoryValidator.js";


const getSubCategorys = expressAsyncHandler(async (req, res) => {
    try {
        // const SubCategorys = await SubCategory.find({ deletedAt: null }).populate("category_id")
        // return res.status(200).json(SubCategorys)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        // CustomError(validateSubCategoryInput, req.body, res)
        // req.body.createdBy = req.user._id,
        //     await SubCategory.create(req.body)
        // return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getSubCategory = expressAsyncHandler(async (req, res) => {

    // const Sub = await SubCategory.find({category_id:req.params.id})
    // return res.status(200).json(Sub)
})

const getSingleSubCategory = expressAsyncHandler(async (req, res) => {

    // const Sub = await SubCategory.findById(req.params.id)
    // return res.status(200).json(Sub)
})


const updateSubCategory = expressAsyncHandler(async (req, res) => {
    try {
        // let updates = await SubCategory.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        // return res.status(200).json({ message: 'SubCategory Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'SubCategory Updated failed ' })
    }
})
// const deleteSubCategory = expressAsyncHandler(async (req, res) => {
//     try {
//         // let deleted = await SubCategory.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
//         // return res.status(200).json({ message: ' deleted successfully ', deleted })
//     } catch (error) {
//         return res.status(404);
//         console.log(error)
//         throw new Error("deletion Failed ")
//     }
// })

export {
    getSubCategory, getSubCategorys, getSingleSubCategory, updateSubCategory, registerSubCategory
}