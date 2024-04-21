import mongoose from "mongoose";

const Schema = mongoose.Schema;
const abuseSchema = new Schema({
    claim: { type: String, },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    perpetuator: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const abuse = mongoose.model('tb_abuse', abuseSchema);
export default abuse