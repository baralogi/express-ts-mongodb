// Dependency
import express, { Application, Request, Response } from "express";
import { config as dotenv } from "dotenv";
import Mongoose from "./config/mongoose";
import compression from "compression";
import bodyParser from "body-parser";
import morgan from "morgan";
import helmet from "helmet";
import cors from "cors";

// Routes
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";
import topicRoute from "./routes/topic.route";

class App {
    public app: Application;

    constructor() {
        this.app = express();
        this.plugins();
        this.routes();
    }

    public plugins(): void {
        this.app.use(express.json({ limit: '50mb' }))
        this.app.use(express.urlencoded({ extended: true, limit: '50mb' }))
        this.app.use(morgan("dev"));
        this.app.use(compression());
        this.app.use(helmet());
        this.app.use(cors());
        dotenv();
    }

    public routes(): void {
        this.app.route("/api/hello").get((req: Request, res: Response) => {
            res.send("Hello World!");
        });

        this.app.use("/api/v1/auth", authRoutes);
        this.app.use("/api/v1/users", userRoutes);
        this.app.use("/api/v1/topics", topicRoute);
    }

    public start(): void {
        const port: number = 3000
        this.app.listen(port, () => {
            console.log(`Server is listenning on port ${port}`);
        });
    }
}

const mongoose = new Mongoose();
const app = new App();
app.start();
