import mongoose from "mongoose";

const Schema = mongoose.Schema;
const townSchema = new Schema({
    name: { type: String, },
    deletedAt: { type: Date, default: null },
    location: {
        lng: {
            type: Number,
        },
        lat: {
            type: Number,

        },
    },
    createdBy: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const town = mongoose.model('tb_town', townSchema);
export default town