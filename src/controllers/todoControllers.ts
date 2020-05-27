// Dependency
import { Request, Response } from "express";

// Model
import Todo, { ITodo } from "../models/todoModels";

// Interface
import IController from "./interfaceControllers";

class todoController implements IController {
    index(req: Request, res: Response): Response {
        return res.send("Halaman Index");
    }
    store(req: Request, res: Response): Response {
        return res.send("");
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
