import baseRoutes from "./baseRoutes";
import { auth } from "../middlewares/authMiddleware";
import articleController from "../controllers/article.controller";


class articleRoute extends baseRoutes {
    public routes(): void {
        this.router.get("/", articleController.index);
        this.router.post("/", articleController.store);
        this.router.get("/:id", articleController.show);
        this.router.put("/:id", articleController.update);
        this.router.delete("/:id", articleController.destroy);
    }
}

export default new articleRoute().router;
