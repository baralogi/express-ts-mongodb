"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependency
var express_1 = __importDefault(require("express"));
var dotenv_1 = require("dotenv");
var mongoose_1 = __importDefault(require("./config/mongoose"));
var compression_1 = __importDefault(require("compression"));
var morgan_1 = __importDefault(require("morgan"));
var helmet_1 = __importDefault(require("helmet"));
var cors_1 = __importDefault(require("cors"));
// Routes
var authRoutes_1 = __importDefault(require("./routes/authRoutes"));
var userRoutes_1 = __importDefault(require("./routes/userRoutes"));
var topic_route_1 = __importDefault(require("./routes/topic.route"));
var article_route_1 = __importDefault(require("./routes/article.route"));
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.plugins();
        this.routes();
    }
    App.prototype.plugins = function () {
        this.app.use(express_1.default.json({ limit: '50mb' }));
        this.app.use(express_1.default.urlencoded({ extended: true, limit: '50mb' }));
        this.app.use(morgan_1.default("dev"));
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use(cors_1.default());
        dotenv_1.config();
    };
    App.prototype.routes = function () {
        this.app.route("/api/hello").get(function (req, res) {
            res.send("Hello World!");
        });
        this.app.use("/api/v1/auth", authRoutes_1.default);
        this.app.use("/api/v1/users", userRoutes_1.default);
        this.app.use("/api/v1/topics", topic_route_1.default);
        this.app.use("/api/v1/articles", article_route_1.default);
    };
    App.prototype.start = function () {
        var port = 3000;
        this.app.listen(port, function () {
            console.log("Server is listenning on port " + port);
        });
    };
    return App;
}());
var mongoose = new mongoose_1.default();
var app = new App();
app.start();
