import { Request, Response } from "express";
import Topic, { ITopic } from "../models/Topic";

class TopicService {
    auth: { id: string };
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.auth = req.app.locals.user;
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const { name } = this.body;
        const topic = await Topic.find({}).sort({ name });

        return topic
    }

    store = async () => {
        const { name } = this.body;

        const topic = new Topic({ name });
        await topic.save();

        return topic;
    }

    show = async () => {
        const { id } = this.params;
        const topic = await Topic.findOne({ _id: id });

        return topic;
    }

    update = async () => {
        const { id } = this.params;
        const topic = await Topic.findOneAndUpdate({ _id: id }, { $set: this.body });

        return topic;
    }

    destroy = async () => {
        const { id } = this.params;
        const topic = await Topic.findOneAndDelete({ _id: id });

        return topic;
    }
}

export default TopicService