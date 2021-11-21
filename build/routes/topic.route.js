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
var topic_validator_1 = require("../middlewares/topic.validator");
var topic_controller_1 = __importDefault(require("../controllers/topic.controller"));
var topicRoute = /** @class */ (function (_super) {
    __extends(topicRoute, _super);
    function topicRoute() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    topicRoute.prototype.routes = function () {
        this.router.get("/", topic_controller_1.default.index);
        this.router.post("/", topic_validator_1.validateTopic, topic_controller_1.default.store);
        this.router.get("/:id", topic_controller_1.default.show);
        this.router.put("/:id", topic_controller_1.default.update);
        this.router.delete("/:id", topic_controller_1.default.destroy);
    };
    return topicRoute;
}(baseRoutes_1.default));
exports.default = new topicRoute().router;