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
var authValidator_1 = require("../middlewares/authValidator");
// Controllers
var authControllers_1 = __importDefault(require("../controllers/authControllers"));
var authRoutes = /** @class */ (function (_super) {
    __extends(authRoutes, _super);
    function authRoutes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    authRoutes.prototype.routes = function () {
        this.router.post("/signup", authValidator_1.validateSignup, authControllers_1.default.signup);
        this.router.get("/signin", authValidator_1.validateSignin, authControllers_1.default.signin);
    };
    return authRoutes;
}(baseRoutes_1.default));
exports.default = new authRoutes().router;
