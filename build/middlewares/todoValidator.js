"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateTodo = void 0;
var express_validator_1 = require("express-validator");
exports.validateTodo = [
    express_validator_1.check('activity').isString(),
    express_validator_1.check('description').isString(),
    function (req, res, next) {
        var err = express_validator_1.validationResult(req);
        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() });
        }
        return next();
    }
];
exports.default = { validateTodo: exports.validateTodo };
