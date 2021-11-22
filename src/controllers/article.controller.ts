// Dependency
import { Request, Response } from "express";
import IController from "./interfaceControllers";
import ArticleService from "../services/article.service";

class articleController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const services: ArticleService = new ArticleService(req);
        const data = await services.getAll();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data found",
            data
        });
    }
    store = async (req: Request, res: Response): Promise<Response> => {
        const services: ArticleService = new ArticleService(req);
        const data = await services.store();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data created",
            data
        });
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        const services: ArticleService = new ArticleService(req);
        const data = await services.show();

        if (!data) {
            return res.status(404).send({
                status: res.statusCode,
                success: false,
                messages: "Data not found"
            });
        }

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data found",
            data
        });

    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const services: ArticleService = new ArticleService(req);
        const dataUpdate = await services.update();
        const data = await services.show();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data updated",
            data
        });
    }
    destroy = async (req: Request, res: Response): Promise<Response> => {
        const services: ArticleService = new ArticleService(req);
        const data = await services.destroy();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data deleted",
        });
    }

}

export default new articleController();
