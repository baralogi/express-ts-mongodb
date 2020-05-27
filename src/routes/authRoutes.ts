import baseRoutes from "./baseRoutes";
import { auth } from "../middlewares/authMiddleware";
import { validateSignup, validateSignin } from "../middlewares/authValidator";

// Controllers
import authController from "../controllers/authControllers";

class authRoutes extends baseRoutes {
    public routes(): void {
        this.router.post("/signup", validateSignup, authController.signup);
        this.router.get("/signin", validateSignin, authController.signin);
        this.router.get("/profile", auth, authController.profile);
    }
}

export default new authRoutes().router;
