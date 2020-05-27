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
        // const { id: createdBy } = req.app.locals.user;
        const id = req.params.id;

        const todo = await Todo.findOne({ createdBy: id });
        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been loaded",
            todo
        });
    }
    update(req: Request, res: Response): Response {
        return res.send("");
    }
    destroy(req: Request, res: Response): Response {
        return res.send("");
    }

}

export default new todoController();
