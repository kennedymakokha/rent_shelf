import mongoose from "mongoose";

const Schema = mongoose.Schema;
const useraffilaiteSchema = new Schema({

    deletedAt: { type: Date, default: null },
    user: { type: Schema.Types.ObjectId, ref: 'tb_user' },
    affiliate: { type: Schema.Types.ObjectId, ref: 'tb_user' },
}, { timestamps: true });
const userFiliate = mongoose.model('tb_user_affiliate', useraffilaiteSchema);
export default userFiliate