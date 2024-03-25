import mongoose from "mongoose";

const Schema = mongoose.Schema;
const townSchema = new Schema({
    name: { type: String, },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    town_id: { type: Schema.Types.ObjectId, ref: 'tb_town' },
}, { timestamps: true });
const town = mongoose.model('tb_area', townSchema);
export default town