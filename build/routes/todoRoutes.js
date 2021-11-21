"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Dependency
var baseRoutes_1 = __importDefault(require("./baseRoutes"));
var authMiddleware_1 = require("../middlewares/authMiddleware");
var todoValidator_1 = require("../middlewares/todoValidator");
// Controllers
var todoControllers_1 = __importDefault(require("../controllers/todoControllers"));
var authRoutes = /** @class */ (function (_super) {
    __extends(authRoutes, _super);
    function authRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    authRoutes.prototype.routes = function () {
        this.router.get("/", authMiddleware_1.auth, todoControllers_1.default.index);
        this.router.post("/", authMiddleware_1.auth, todoValidator_1.validateTodo, todoControllers_1.default.store);
        this.router.get("/:id", authMiddleware_1.auth, todoControllers_1.default.show);
        this.router.put("/:id", authMiddleware_1.auth, todoValidator_1.validateTodo, todoControllers_1.default.update);
        this.router.delete("/:id", authMiddleware_1.auth, todoControllers_1.default.destroy);
    };
    return authRoutes;
}(baseRoutes_1.default));
exports.default = new authRoutes().router;
