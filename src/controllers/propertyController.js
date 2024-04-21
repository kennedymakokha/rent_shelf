import expressAsyncHandler from "express-async-handler"
import SubCategory from '../models/Subcategorymodel.js'
import Property from '../models/propertymodel.js'
import { CustomError } from "../middlewares/customErr.js";
import { validateSubCategoryInput } from "../Validators/categoryValidator.js";


const getPropertys = expressAsyncHandler(async (req, res) => {
    try {

        const Propertys = await Property.find({ deletedAt: null }).populate("category_id")
        return res.status(200).json(Propertys)
    } catch (error) {
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})

const addMultiples = expressAsyncHandler(async (req, res) => {
    const Sub = await SubCategory.find({ category_id: req.params.id })
    for (let index = 0; index < Sub.length; index++) {
        const element = Sub[index];
        let props = await Property.findOne({ category_id: element._id, name: req.body.name })
        if (props) {
            return null
        } else {
            req.body.category_id = element._id
            req.body.createdBy = req.user._id,
                await Property.create(req.body)
        }

    }
    return res.status(200).json(Sub)
})

const registerProperty = expressAsyncHandler(async (req, res) => {
    try {
        CustomError(validateSubCategoryInput, req.body, res)
        req.body.createdBy = req.user._id,
            await Property.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})

const getProperty = expressAsyncHandler(async (req, res) => {

    const Property = await Property.findById()
    return res.status(200).json(Property)
})

const getSubproperties = expressAsyncHandler(async (req, res) => {

    const Sub = await Property.find({ category_id: req.params.id })
    return res.status(200).json(Sub)
})
const getSingleSubProperty = expressAsyncHandler(async (req, res) => {

    const Sub = await Property.find({ category_id: req.params.id })
    return res.status(200).json(Sub)
})
const updateProperty = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Property.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Property Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Property Updated failed ' })
    }
})
const deleteProperty = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Property.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getProperty,getSingleSubProperty, addMultiples, getSubproperties, getPropertys, updateProperty, deleteProperty, registerProperty
}