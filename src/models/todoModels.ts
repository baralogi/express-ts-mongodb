// Dependency
import mongoose, { Schema, Document } from "mongoose";

// Model
import User, { IUser  } from "./userModels";

// Interface
export interface ITodo extends Document {
    activity: string;
    description: string;
    createdBy: IUser['_id'];

}

const todoSchema = new Schema({
    activity: { type: String, required: true, lowercase: true, trim: true },
    description: { type: String, required: true, trim: true },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },

}, {
    timestamps: true
});

export default mongoose.model<ITodo>('Todo', todoSchema);