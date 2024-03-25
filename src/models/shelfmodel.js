import mongoose from "mongoose";

const Schema = mongoose.Schema;
const townSchema = new Schema({
    name: { type: String, },
    building: { type: String, },
    files: { type: Array, },
    price: { type: Number, },
    ratings: { type: Number, default: 2 },
    features: {
        type: Array,
    },
    featured: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    area_id: { type: Schema.Types.ObjectId, ref: 'tb_area' },
    town_id: { type: Schema.Types.ObjectId, ref: 'tb_town' },
    type_id: [
        { type: Schema.Types.ObjectId, ref: 'tb_types' }
    ],
}, { timestamps: true });
const town = mongoose.model('tb_shelf', townSchema);
export default town