import expressAsyncHandler from "express-async-handler"
import User from './../models/usersModel.js'
import Role from '../models/rolesmodel.js'
import UserAfiliate from '../models/userAffiliatemodel.js'

import bcrypt from 'bcryptjs';
import generateToken from "../utils/generateToken.js";
import { GenActivationCode } from "../utils/GenerateActivationCode.js";
import { CustomError } from "../middlewares/customErr.js";
import { validateUserInput } from "../Validators/usersValidator.js";

import jwt from "jsonwebtoken";
import { SendMessage } from "../utils/sms_sender.js";
import Format_phone_number from "../utils/FormatPhonNumber.js";



const login_user = expressAsyncHandler(async (req, res) => {
    try {

        const { email, password } = req.body;
        let phone = await Format_phone_number(email)
        const user = await User.findOne({ $or: [{ email: email }, { ID_no: email }, { phone: phone }] }).populate('role', 'name')
        // 
        if (user && (await user.matchPassword(password))) {

            let token = generateToken(res, user._id)
            user.tokens.push(req.body.token)
            user.tokens.indexOf(req.body.token) === -1 ? user.tokens.push(req.body.token) : console.log("This item already exists");

            await User.findOneAndUpdate({ $or: [{ email }, { ID_no: email }] }, { tokens: user.tokens }, { new: true, useFindAndModify: false })
            return res.status(201).json({
                id: user._id,
                name: user.name,
                token: token,
                email: user.email,
                role: user?.role?.name,
                onduty: user.onduty,
                tokens: user.tokens
            })


        } else {

            return res.status(401).json({ message: "Invalid email or password" })

        }
    } catch (error) {

        return res.status(401).json({ message: "Invalid password  or email entered " })

    }

})
const register_User = expressAsyncHandler(async (req, res) => {
    try {

        const { ID_no } = req.body
        let PhoneNumber = await Format_phone_number(req.body.phone)
        const UserExists = await User.findOne({ $or: [{ ID_no: ID_no }, { phone: PhoneNumber }] })
        if (UserExists) {
            return res.status(401).json({ message: "User Exists" })
        }
        CustomError(validateUserInput, req.body, res)
        req.body.verification_code = GenActivationCode(5)
        req.body.referal_no = GenActivationCode(6)
        let roleName = "customer"
        if (req.body.role) {
            roleName = req.body.role
        }
        let role = await Role.findOne({ name: roleName })
        req.body.role = role._id
        if (req?.user) {
            req.body.createdBy = req?.user?._id
        }
        let userobj = await User.create(req.body)
        let { _id } = userobj
        if (req.body.referal_no) {
            let affiliate = await User.findOne({ referal_no: req.body.ref_no })

            await UserAfiliate.create({ user: userobj._id, affiliate: affiliate._id })
        }
        let textbody
        if (roleName === "affiliate") {
            textbody = { address: `${req.body.phone}`, Body: `Hi \nYour referal link is http://localhost:3000?affiliate=${req.body.referal_no}  ` }

        } else {
            textbody = { address: `${req.body.phone}`, Body: `Hi \nYour Account Activation Code for Rent a shelf is  ${req.body.verification_code}\nand your referal code is ${req.body.referal_no}  ` }
        }

        // await SendMessage(textbody)
        return res.status(200).json({ message: "User created Successfully", _id })
    } catch (error) {
        console.log(error)
        return res.status(401).json({ message: error.message })

    }

})
const activate_User = expressAsyncHandler(async (req, res) => {
    try {

        const user = await User.findOne({ _id: req.params.id })

        if (parseInt(user.verification_code) !== parseInt(req.body.code)) {
            return res.status(400).json({ message: "Wrong Code kindly re-enter the code correctly" });
        } else {
            let userObj = await User.findOneAndUpdate(
                { _id: req.params.id },
                { activated: true },
                { new: true, useFindAndModify: false }
            );
            const token = await jwt.sign(
                { email: userObj.email, _id: user._id },
                process.env.JWT_SECRET
            );
            return res
                .status(200)
                .json({
                    message: "User Activated successfully and can now login !!",
                    token,
                });
        }
    } catch (error) {

        return res
            .status(400)
            .json({ success: false, message: "operation failed ", error });
    }
});
const getUserProfile = expressAsyncHandler(async (req, res) => {
    const user = {
        _id: req.user._id,
        name: req.user.name,
        email: req.user.email,
        phone: req.user.phone
    }
    return res.status(200).json(user)
})
const getAffiliateCounts = expressAsyncHandler(async (req, res) => {
    let Affiliates = await UserAfiliate.find().populate("affiliate", "name").populate("user", "name")
    let affiliatesArray = []
    for (let index = 0; index < Affiliates.length; index++) {
        const i = affiliatesArray.findIndex(e => e.id === Affiliates[index].affiliate._id);
        if (i > -1) {
            affiliatesArray[i].affiliates.push({ id: Affiliates[index].user._id, name: Affiliates[index].user.name })
            affiliatesArray[i].y = affiliatesArray[i].y + 1
        }
        else {

            affiliatesArray.push({ id: Affiliates[index].affiliate._id, y: 1, label: Affiliates[index].affiliate.name, affiliates: [{ id: Affiliates[index].user._id, name: Affiliates[index].user.name }] })
        }

    }
    // console.log(affiliatesArray)
    return res.status(200).json(affiliatesArray)
})
const getUsers1 = expressAsyncHandler(async (req, res) => {

    const users = await User.find({})
        .populate('role', 'name').sort({ createdAt: -1 }).limit(100)
    return res.status(200).json(users)

})
const getUsers = expressAsyncHandler(async (req, res) => {
    if (req.query.searchKey) {
        var searchKey = new RegExp(`${req.query.searchKey}`, 'i')
        let packages = await User.find({
            deletedAt: null, $or: [
                { ID_no: searchKey },
                { name: searchKey },
                { name: searchKey }]
        }).sort({ createdAt: -1 }).limit(100)
        return res.status(200).json(packages);
    } else {
        const users = await User.find({})
            .populate('role', 'name').sort({ createdAt: -1 }).limit(100)
        return res.status(200).json(users)
    }
})


const getroleUsers = expressAsyncHandler(async (req, res) => {
    if (req.params.role === "all") {
        const users = await User.find({ deletedAt: null })
            .populate('role', 'name')
        return res.status(200).json(users)
    } else {
        let userRole = await Role.findOne({ name: req.params.role })
        const users = await User.find({ deletedAt: null, role: userRole._id })
            .populate('role', 'name')
        return res.status(200).json(users)
    }
})
const getUser = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.params.id)
        .populate('role', 'name').populate('station', 'name')
    return res.status(200).json(user)
})
const logoutUser = expressAsyncHandler(async (req, res) => {
    try {
        console.log(req.body)
        const user = await User.findOne({ _id: req.user._id })
        const index = user?.tokens.indexOf(req.body.token);
        if (index > -1) { // only splice array when item is found
            user?.tokens.splice(index, 1); // 2nd parameter means remove one item only
        }
        res.cookie('jwt', '', {
            httpOnly: true,
            expires: new Date(0)
        })

        return res.status(200).json({ message: 'logged out  User' })
    } catch (error) {
        console.log(error)
    }
})

const EditUserDetails = expressAsyncHandler(async (req, res) => {
    try {
        let assign = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, useFindAndModify: false })
        if (req.body.station) {
            await Station.create({
                station_id: assign._id,
                user_id: req.params.id
            })
        }
        return res.status(200).json({ message: ' successfully ', assign })
    } catch (error) {
        return res.status(400).json({ message: ' failed ', error })
    }
})


const updateUserProfile = expressAsyncHandler(async (req, res) => {
    const user = await User.findById(req.user._id)
    if (user) {
        let updatte = await User.findOneAndUpdate({ _id: user._id }, req.body, { new: true, useFindAndModify: false })
        return res.status(200).json({ message: 'Updated', updatte })

    } else {
        return res.status(404);
        throw new Error("User Not Found")
    }

})

export {
    login_user, activate_User, getAffiliateCounts, getUsers1, updateUserProfile, getroleUsers, EditUserDetails, register_User, getUser, getUsers, logoutUser, getUserProfile
}