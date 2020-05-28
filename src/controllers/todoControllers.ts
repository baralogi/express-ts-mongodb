// Dependency
import { Request, Response } from "express";
import IController from "./interfaceControllers";
import TodoService from "../services/todoServices";
import Todo, { ITodo } from "../models/todoModels";

class todoController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todo = await services.getAll();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been loaded",
            todo
        });
    }
    store = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todo = await services.store();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "New todo created",
            todo
        });
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        try {
            const services: TodoService = new TodoService(req);
            const todo = await services.show();

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
                messages: "Todo not found"
            });
        }
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todo = await services.update();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been updated",
        });
    }
    destroy = async (req: Request, res: Response): Promise<Response> => {
        const services: TodoService = new TodoService(req);
        const todo = await services.destroy();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Todo has been deleted",
        });
    }

}

export default new todoController();
