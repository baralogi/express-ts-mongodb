import { Router } from "express";
import IRouter from "./interfaceRoutes";

abstract class baseRoutes implements IRouter {
    public router: Router;

    constructor() {
        this.router = Router();
        this.routes();
    }

    abstract routes(): void;

}

export default baseRoutes;
