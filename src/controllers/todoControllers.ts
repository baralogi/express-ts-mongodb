// Dependency
import { Request, Response } from "express";
import Todo, { ITodo } from "../models/todoModels";
import IController from "./interfaceControllers";

class todoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.user;

        const todo = await Todo.find({ createdBy: id });
        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been loaded",
            todo
        });
    }
    store = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.app.locals.user;
        const { activity, description } = req.body;

        const todo = new Todo({ createdBy: id, activity, description });
        await todo.save();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "New todo created",
            todo
        });

    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        try {
            const todo = await Todo.findOne({ _id: id });
            return res.send({
                status: res.statusCode,
                success: true,
                messages: "Todo has been loaded",
                todo
            });
        } catch (error) {
            return res.status(404).send({
                status: res.statusCode,
                success: false,
                messages: "Todo not found",
            });
        }
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        const todo = await Todo.findOneAndUpdate({ _id: id }, { $set: req.body });
        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been updated",
            todo
        });
    }
    destroy = async (req: Request, res: Response): Promise<Response> => {
        const { id } = req.params;

        const todo = await Todo.findOneAndDelete({ _id: id });
        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been updated",
            todo
        });
    }

}

export default new todoController();
