import expressAsyncHandler from "express-async-handler"
import multer from 'multer'
import { v4 } from 'uuid'
import Shelf from '../models/shelfmodel.js'
import path from 'path';
import { CustomError } from "../middlewares/customErr.js";
import multiparty from 'multiparty';
import { validateShelfInput } from "../Validators/shelfValidator.js";
import imagemin from 'imagemin';
import imageminMozJpeg from 'imagemin-mozjpeg';
import User from "../models/usersModel.js";
import role from "../models/rolesmodel.js";
import firebaseAdmin from "../../firebaseAdmin.js";
import { getMessaging } from "firebase-admin/messaging";


const getShelfs = expressAsyncHandler(async (req, res) => {
    try {
        const { town, area, featured, category, skip, subcategory, limit } = req.query
      
        let data = []
        // data = await Shelf.find({
        //     deletedAt: null,
        //     published: true,
        // }).populate("town_id", "name")

        //     .populate("type_id", "name")
        //     .populate("features", "name")

        // return res.status(200).json(data)
        if (town === "undefined" && featured === "false" && category === undefined && subcategory === undefined) {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
            }).populate("town_id", "name").limit(limit).skip(skip)
                .populate("type_id", "name")
                .populate("features", "name")

                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        } else if (town === "undefined" && featured === "true") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                featured: true,

            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town !== "undefined" && featured === "true") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                town_id: town,

                featured: true,
            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town === "undefined" && featured === "true") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                town_id: town,

                featured: true,
            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town !== "undefined" && featured === "true") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                town_id: town,

                featured: true,
            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town !== "undefined" && featured === "false") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                town_id: town,


            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town === "undefined" && featured === "false") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                area_id: area

            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town !== "undefined" && featured === "false") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                town_id: town,


            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }
        else if (town !== "undefined" && area == "undefined") {
            data = await Shelf.find({
                deletedAt: null,
                published: true,
                town_id: town,
                featured: featured,
            }).populate("town_id", "name")

                .populate("type_id", "name")
                .populate("features", "name")
                .populate("createdBy", "name phone email")

            return res.status(200).json(data)
        }

    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "Error Ocured try again", error })


    }
})
const registerShelf = expressAsyncHandler(async (req, res) => {
    try {
        // console.log("first")
        // return res.json('tailer')
        console.log(req.body)
        // const reqFiles = [];
        // const url = req.protocol + '://' + req.get('host')
        // // CustomError(validateShelfInput, req.body, res)
        // if (req.files.length < 4) {
        //     return res.status(400).json({ message: 'Kindly upload at least four  image ' })
        // }
        // for (var i = 0; i < req.files.length; i++) {
        //     reqFiles.push(url + '/public/uploads/files/' + req.files[i].filename);
        //     await imagemin(["public/uploads/files/" + req.files[i].filename], {
        //         destination: "public/uploads/files",
        //         plugins: [
        //             imageminMozJpeg({ quality: 30 })
        //         ]
        //     })

        // }
        // req.body.files = reqFiles
        // req.body.createdBy = req.user._id
        // req.body.location = {
        //     lat: req.body.lat,
        //     lng: req.body.lng,
        // }
        // let shel = await Shelf.create(req.body)
        // let rol = await role.findOne({ name: "owner" })
        // await User.findOneAndUpdate({ _id: req.user._id }, { role: rol._id }, { new: true, useFindAndModify: false })
        // res.status(200).json({ message: 'Shelf Updated successfully ', shel })
        // let adminRole = await role.findOne({ name: "admin" })
        // let admins = await User.find({ role: adminRole._id })
        // let tokensArray = []
        // for (let index = 0; index < admins.length; index++) {
        //     tokensArray = tokensArray.concat(admins[index].tokens)
        // }
        // let payload = {
        //     notification: {
        //         title: `New Shelf In Town `,
        //         body: `${shel.name} Has been Posted\nChcke it out and Publish `,
        //         image: `${shel.files[0]}`
        //     },
        //     "webpush": {
        //         "fcm_options": {
        //             "link": "https://dummypage.com"
        //         }
        //     },
        //     data: {
        //         url: 'http://localhost:3000/shelves'
        //     },

        //     tokens: tokensArray
        // }

        // let v = await firebaseAdmin.messaging().sendEachForMulticast(payload)
        console.log("kebbsy")
        return
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Failed ', error })
    }
})
const getShelf = expressAsyncHandler(async (req, res) => {

    const ShelV = await Shelf.findById(req.params.id)
    return res.status(200).json(ShelV)
})
const getUsershelves = expressAsyncHandler(async (req, res) => {

    try {
        const ShelV = await Shelf.find({ createdBy: req.params.id }).populate('town_id', 'name')
            // .populate('area_id', 'name')
            .populate('features', 'name')
            .populate('createdBy', 'name,phone')
            .populate('type_id', 'name')

        return res.status(200).json(ShelV)
    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})
const publishUnpublishShelf = expressAsyncHandler(async (req, res) => {
    try {
        let Shelve = await Shelf.findById(req.params.id)

        let Owner = await User.findById(Shelve.createdBy)
        let updates = await Shelf.findOneAndUpdate({ _id: req.params.id }, { published: !Shelve.published }, { new: true, useFindAndModify: false })

        // let updates = await Shelf.findOneAndUpdate({_id: req.params.id }, { $set: { published: !Shelve.published } }, { new: true })
        let payload = {
            notification: {
                title: `${updates.published ? "Published " : "Unpublished"}`,
                body: `${Shelve.name} Has been ${updates.published ? "Published" : "Unpublished"} `,
                image: `${Shelve.files[0]}`
            },
            "webpush": {
                "fcm_options": {
                    "link": "https://dummypage.com"
                }
            },
            data: {
                url: 'https://www.youtube.com'
            },

            tokens: Owner.tokens
        }

        await firebaseAdmin.messaging().sendEachForMulticast(payload)

        return res.status(200).json({ message: 'Shelf Updated successfully ', updates })
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: 'Shelf Updated failed ' })
    }
})

const updateShelf = expressAsyncHandler(async (req, res) => {
    try {
        let updates = await Shelf.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Shelf Updated successfully ', updates })
    } catch (error) {
        return res.status(400).json({ message: 'Shelf Updated failed ' })
    }
})
const deleteShelf = expressAsyncHandler(async (req, res) => {
    try {
        let deleted = await Shelf.findOneAndUpdate({ _id: req.params.id }, { deletedAt: Date() }, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: ' deleted successfully ', deleted })
    } catch (error) {
        return res.status(404);
        // console.log(error)
        throw new Error("deletion Failed ")
    }
})

export {
    getShelf, getShelfs, updateShelf, publishUnpublishShelf, getUsershelves, deleteShelf, registerShelf
}