import mongoose from "mongoose";

const Schema = mongoose.Schema;
const featureSchema = new Schema({
    name: { type: String, },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const feature = mongoose.model('tb_feature', featureSchema);
export default feature