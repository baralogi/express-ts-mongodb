"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var userController = /** @class */ (function () {
    function userController() {
        this.profile = function (req, res) {
            return res.send(req.app.locals.user);
        };
    }
    return userController;
}());
exports.default = new userController();
