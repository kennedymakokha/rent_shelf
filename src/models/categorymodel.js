import mongoose from "mongoose";

const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: { type: String, },
    display_name: { type: String },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
const category = mongoose.model('tb_category', categorySchema);
export default category