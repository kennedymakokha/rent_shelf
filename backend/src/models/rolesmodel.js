import mongoose from "mongoose";

const Schema = mongoose.Schema;
const roleSchema = new Schema({
    name: { type: String, },
    display_name: { type: String },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const role = mongoose.model('tb_role', roleSchema);
export default role