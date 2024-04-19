import mongoose from "mongoose";

const Schema = mongoose.Schema;
const townSchema = new Schema({
    name: { type: String, },
    building: { type: String, },
    description: { type: String, },
    files: { type: Array, },
    price: { type: Number, },
    location: {
        lng: {
            type: Number,
        },
        lat: {
            type: Number,

        },
    },
    ratings: { type: Number, default: 2 },
    features:
        [{ type: Schema.Types.ObjectId, ref: 'tb_feature' }]
    ,
    featured: { type: Boolean, default: false },
    published: { type: Boolean, default: true },
    warehouse: { type: Boolean, default: false },
    deletedAt: { type: Date, default: null },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    area: { type: String },
    town_id: { type: Schema.Types.ObjectId, ref: 'tb_town' },
    type_id: [
        { type: Schema.Types.ObjectId, ref: 'tb_types' }
    ],
}, { timestamps: true });
const town = mongoose.model('tb_shelf', townSchema);
export default town