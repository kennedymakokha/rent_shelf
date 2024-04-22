import mongoose from "mongoose";

const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: { type: String, },
    description: { type: String },
    category_id: { type: Schema.Types.ObjectId, ref: 'tb_category' },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
const category = mongoose.model('tb_sub_category', categorySchema);
export default category