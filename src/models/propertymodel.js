import mongoose from "mongoose";

const Schema = mongoose.Schema;
const categorySchema = new Schema({
    name: { type: String, },
   
    category_id: { type: Schema.Types.ObjectId, ref: 'tb_sub_category' },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
const category = mongoose.model('tb_properties', categorySchema);
export default category