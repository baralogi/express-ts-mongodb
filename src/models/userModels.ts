import mongoose, { Schema, Document, Model } from "mongoose";

export interface IUser extends Document {
    email: string,
    password: string,
    username: string,
    name: string,
    about: string,
    avatar: string
}

const userSchema = new Schema({
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true, trim: true },
    username: { type: String, required: true, unique: true, lowercase: true, trim: true },
    name: { type: String, trim: true },
    about: { type: String, trim: true, default: 'Available' },
    avatar: { type: String, trim: true, default: null },
});

export default mongoose.model<IUser>('User', userSchema);