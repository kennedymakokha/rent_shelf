import mongoose from "mongoose";

const Schema = mongoose.Schema;
const roleSchema = new Schema({
    failure_reason: { type: String },
    sent_to: { type: String },
    subject: { type: String },
    success: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    target: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const sms_logs = mongoose.model('tb_sms_log', roleSchema);
export default sms_logs


const signInLogs = new Schema({
    failure_reason: { type: String, },
    success: { type: Boolean, default: false },
    gadget: { type: String },
    location: { type: String },
    type: { type: String, },
    deletedAt: { type: Date, default: null },
    target: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
export const role = mongoose.model('tb_sign_in_attempts', signInLogs);
