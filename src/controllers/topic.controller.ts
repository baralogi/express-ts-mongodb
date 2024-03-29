// Dependency
import { Request, Response } from "express";
import IController from "./interfaceControllers";
import TopicService from "../services/topic.service";

class topicController implements IController {
    index = async (req: Request, res: Response): Promise<Response> => {
        const services: TopicService = new TopicService(req);
        const data = await services.getAll();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data found",
            data
        });
    }
    store = async (req: Request, res: Response): Promise<Response> => {
        const services: TopicService = new TopicService(req);
        const data = await services.store();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data created",
            data
        });
    }
    show = async (req: Request, res: Response): Promise<Response> => {
        try {
            const services: TopicService = new TopicService(req);
            const data = await services.show();

            return res.send({
                status: res.statusCode,
                success: true,
                messages: "Data found",
                data
            });
        } catch (error) {
            return res.status(404).send({
                status: res.statusCode,
                success: false,
                messages: "Data not found"
            });
        }
    }
    update = async (req: Request, res: Response): Promise<Response> => {
        const services: TopicService = new TopicService(req);
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
        const services: TopicService = new TopicService(req);
        const data = await services.destroy();

        return res.send({
            status: res.statusCode,
            success: true,
            messages: "Data deleted",
        });
    }

}

export default new topicController();
