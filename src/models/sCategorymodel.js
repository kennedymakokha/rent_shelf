import mongoose from "mongoose";

const Schema = mongoose.Schema;
const typeSchema = new Schema({
    name: { type: String, },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const Scategory = mongoose.model('tb_sub_categories', typeSchema);
export default Scategory