import baseRoutes from "./baseRoutes";
import { auth } from "../middlewares/authMiddleware";
import { validateTopic } from "../middlewares/topic.validator";
import topicController from "../controllers/topic.controller";


class topicRoute extends baseRoutes {
    public routes(): void {
        this.router.get("/", topicController.index);
        this.router.post("/", validateTopic, topicController.store);
        this.router.get("/:id", topicController.show);
        this.router.put("/:id", topicController.update);
        this.router.delete("/:id", topicController.destroy);
    }
}

export default new topicRoute().router;
