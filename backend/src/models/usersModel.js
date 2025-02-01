import mongoose from "mongoose";
import bcrypt from 'bcryptjs'

const Schema = mongoose.Schema;
const UserSchema = new Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true, unique: true, },
    ID_no: { type: String, unique: true, },
    referal_no: { type: String, unique: true, },
    pass_reset_code: { type: String },
    tokens: [{ type: String }],
    role: { type: Schema.Types.ObjectId, ref: 'tb_role' },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    email: { type: String },
    x: { type: String },
    insta: { type: String },
    fb: { type: String },
    tiktok: { type: String },
    youtube: { type: String },
    activated: { type: Boolean, default: false },
    verification_code: { type: String },
    password: { type: String, required: true },

}, { timestamps: true });
UserSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
        next();
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

UserSchema.methods.matchPassword = async function (enteredPass) {
    return await bcrypt.compare(enteredPass, this.password);
}

const User = mongoose.model('tb_user', UserSchema);

export default User