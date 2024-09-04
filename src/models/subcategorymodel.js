// import mongoose from "mongoose";

// const Schema = mongoose.Schema;
// const SubcategorySchema = new Schema({
//     name: { type: String, },
//     description: { type: String },
//     category_id: { type: Schema.Types.ObjectId, ref: 'tb_category' },
//     deletedAt: { type: Date, default: null },
// }, { timestamps: true });
// const SubCategory = mongoose.model('tb_sub_categories', SubcategorySchema);
// export default SubCategory

import mongoose from "mongoose";

const Schema = mongoose.Schema;
const sbSchema = new Schema({
    name: { type: String, },
    description: { type: String },
    category_id: { type: Schema.Types.ObjectId, ref: 'tb_category' },
    deletedAt: { type: Date, default: null },
}, { timestamps: true });
const SB = mongoose.model('tb_sub_categories', sbSchema);
export default SB