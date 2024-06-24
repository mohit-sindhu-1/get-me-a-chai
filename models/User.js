import mongoose from "mongoose";
const { Schema, model } = mongoose;

const UserSchema = new Schema({
    email: { type: String, required: true },
    name: { type: String },
    username: { type: String, required: true },
    profile_pic: { type: String },
    cover_pic: { type: String },
    razorpayId: { type: String },
    razorpaySecret: { type: String },
    createdAt: { type: Date, default: Date.now },
    updateAt: { type: Date, default: Date.now }
});

export default mongoose.models.User || model('User', UserSchema);