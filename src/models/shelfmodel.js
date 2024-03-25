import mongoose from "mongoose";

const Schema = mongoose.Schema;
const townSchema = new Schema({
    name: { type: String, },
    building: { type: String, },
    file: { type: String, },
    price: { type: Number, },
    features: {
        type: Array,
    },
    featured: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    area_id: { type: Schema.Types.ObjectId, ref: 'tb_area' },
    town_id: { type: Schema.Types.ObjectId, ref: 'tb_town' },
    type_id: [
        { type: Schema.Types.ObjectId, ref: 'tb_type' }
    ],
}, { timestamps: true });
const town = mongoose.model('tb_shelf', townSchema);
export default town