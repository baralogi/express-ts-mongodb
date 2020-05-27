// Dependency
import mongoose, { Schema, Document } from "mongoose";

// Interface
export interface ITodo extends Document {
    activity: string,
    description: string,

}

const todoSchema = new Schema({
    activity: { type: String, required: true, lowercase: true, trim: true },
    description: { type: String, required: true, lowercase: true, trim: true },

}, {
    timestamps: true
});

export default mongoose.model<ITodo>('Todo', todoSchema);