"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateSignin = exports.validateSignup = void 0;
var express_validator_1 = require("express-validator");
exports.validateSignup = [
    express_validator_1.check('username').isString(),
    express_validator_1.check('email').isEmail(),
    express_validator_1.check('password').isLength({ min: 6 }),
    function (req, res, next) {
        var err = express_validator_1.validationResult(req);
        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() });
        }
        return next();
    }
];
exports.validateSignin = [
    express_validator_1.check('email').isEmail(),
    express_validator_1.check('password').isLength({ min: 6 }),
    function (req, res, next) {
        var err = express_validator_1.validationResult(req);
        if (!err.isEmpty()) {
            return res.status(422).send({ errors: err.array() });
        }
        return next();
    }
];
exports.default = { validateSignup: exports.validateSignup, validateSignin: exports.validateSignin };
