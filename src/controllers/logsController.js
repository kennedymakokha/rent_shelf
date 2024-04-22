import expressAsyncHandler from "express-async-handler"
import Logs from '../models/logsmodel.js'



const getSmsLogs = expressAsyncHandler(async (req, res) => {
    try {
        const e = res.paginate
        res.status(200).json(e)

    } catch (error) {
        res.status(500).json(error)
    }
    // try {
    //     const { skip, limit } = req.query
    //     let count = await Logs.find()
    //     const smslogs = await Logs.find().populate("target", "name").limit(limit).skip(skip)
    //     return res.status(200).json({ data: smslogs, count: count.length })
    // } catch (error) {
    //     console.log(error)
    //     return res.status(400).json({ message: "Error Ocured try again", error })


    // }
})
const registerSMSlog = expressAsyncHandler(async (req, res) => {
    try {
        await Logs.create(req.body)
        return res.status(200).json({ message: 'Created Successfull' })
    } catch (error) {
        console.log(error)
    }
})
const getUserLogs = expressAsyncHandler(async (req, res) => {
    const { today } = req.query
    if (today) {
        var start = new Date();
        start.setHours(0, 0, 0, 0);
        var end = new Date();
        end.setHours(23, 59, 59, 999);
        const role = await Logs.find({ target: req.params.id, createdAt: { $gte: start, $lt: end } })
        return res.status(200).json(role)
    } else {
        const role = await Logs.find({ target: req.params.id })
        return res.status(200).json(role)
    }
})
export {
    registerSMSlog, getUserLogs, getSmsLogs

}