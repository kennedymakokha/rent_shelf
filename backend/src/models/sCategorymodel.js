import mongoose from "mongoose";

const Schema = mongoose.Schema;
const typeSchema = new Schema({
    name: { type: String, },
    description: { type: String },
    category_id: { type: Schema.Types.ObjectId, ref: 'tb_category' },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
const Scategory = mongoose.model('tb_sub_categories', typeSchema);
export default Scategory