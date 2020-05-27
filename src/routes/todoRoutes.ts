// Dependency
import baseRoutes from "./baseRoutes";
import { auth } from "../middlewares/authMiddleware";
import { validateTodo } from "../middlewares/todoValidator";

// Controllers
import todoController from "../controllers/todoControllers";

class authRoutes extends baseRoutes {
    public routes(): void {
        this.router.get("/", auth, todoController.index);
        this.router.post("/", auth, validateTodo, todoController.store);
        this.router.get("/:id", auth, todoController.show);
        this.router.put("/:id", auth, validateTodo, todoController.update);
        this.router.put("/:id", auth, todoController.destroy);
    }
}

export default new authRoutes().router;
