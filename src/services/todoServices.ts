import { Request, Response } from "express";
import Todo, { ITodo } from "../models/todoModels";

class TodoService {
    auth: { id: string };
    body: Request['body'];
    params: Request['params'];

    constructor(req: Request) {
        this.auth = req.app.locals.user;
        this.body = req.body;
        this.params = req.params;
    }

    getAll = async () => {
        const { id } = this.auth;
        const todo = await Todo.find({ createdBy: id });

        return todo
    }

    store = async () => {
        const { id } = this.auth;
        const { activity, description } = this.body;

        const todo = new Todo({ createdBy: id, activity, description });
        await todo.save();

        return todo;
    }

    show = async () => {
        const { id } = this.params;
        const todo = await Todo.findOne({ _id: id });
        
        return todo;
    }

    update = async () => {
        const { id } = this.params;
        const todo = await Todo.findOneAndUpdate({ _id: id }, { $set: this.body });

        return todo;
    }

    destroy = async () => {
        const { id } = this.params;
        const todo = await Todo.findOneAndDelete({ _id: id });

        return todo;
    }
}

export default TodoService