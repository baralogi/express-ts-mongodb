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
var baseRoutes_1 = __importDefault(require("./baseRoutes"));
var article_controller_1 = __importDefault(require("../controllers/article.controller"));
var articleRoute = /** @class */ (function (_super) {
    __extends(articleRoute, _super);
    function articleRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    articleRoute.prototype.routes = function () {
        this.router.get("/", article_controller_1.default.index);
        this.router.post("/", article_controller_1.default.store);
        this.router.get("/:id", article_controller_1.default.show);
        this.router.put("/:id", article_controller_1.default.update);
        this.router.delete("/:id", article_controller_1.default.destroy);
    };
    return articleRoute;
}(baseRoutes_1.default));
exports.default = new articleRoute().router;
