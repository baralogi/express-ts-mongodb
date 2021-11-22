import mongoose, { Schema, Document } from "mongoose";


export enum articleStatus {
    DRAFT = 'draft',
    DELETED = 'deleted',
    PUBLISHED = 'published'
}

export interface IArticle extends Document {
    title: string;
    description: string;
    status: articleStatus;
    topics: Array<string>
}

const articleSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    status: {
        type: String,
        required: true,
        enum: Object.values(articleStatus),
        default: articleStatus.DRAFT
    },
    topics: [
        {
            type: Schema.Types.ObjectId,
            ref: "Topic"
        }
    ]
}, {
    timestamps: true
});

articleSchema.path('title').validate(async (value: string) => {
    const titleCount = await mongoose.models.Article.countDocuments({ name: value });
    return !titleCount;
}, 'Topic name already exists');

export default mongoose.model<IArticle>('Article', articleSchema);