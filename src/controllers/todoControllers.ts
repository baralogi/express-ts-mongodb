// Dependency
import { Request, Response } from "express";
import Todo, { ITodo } from "../models/todoModels";
import IController from "./interfaceControllers";

class todoController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("Halaman Index");
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
    show(req: Request, res: Response): Response {
        return res.send("");
    }
    update(req: Request, res: Response): Response {
        return res.send("");
    }
    destroy(req: Request, res: Response): Response {
        return res.send("");
    }

}

export default new todoController();
