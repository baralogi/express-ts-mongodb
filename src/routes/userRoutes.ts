import { auth } from "../middlewares/authMiddleware";
import baseRoutes from "./baseRoutes";

// Controllers
import userController from "../controllers/userControllers";

class userRoutes extends baseRoutes {
    public routes(): void {
        this.router.get("/profile", auth, userController.profile);
    }
}

export default new userRoutes().router;
