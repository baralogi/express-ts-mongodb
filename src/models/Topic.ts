import mongoose, { Schema, Document } from "mongoose";

export interface ITopic extends Document {
    name: string;
}

const topicSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
}, {
    timestamps: true
});

topicSchema.path('name').validate(async (value: string) => {
    const nameCount = await mongoose.models.Topic.countDocuments({ name: value });
    return !nameCount;
}, 'Topic name already exists');

export default mongoose.model<ITopic>('Topic', topicSchema);