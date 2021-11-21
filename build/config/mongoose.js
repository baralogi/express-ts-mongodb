"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = __importDefault(require("mongoose"));
var dotenv_1 = require("dotenv");
var Mongoose = /** @class */ (function () {
    function Mongoose() {
        this.config();
    }
    Mongoose.prototype.config = function () {
        dotenv_1.config();
        mongoose_1.default.connect(process.env.DB_CONNECTION + "://" + process.env.DB_HOST + ":" + process.env.DB_PORT + "/" + process.env.DB_DATABASE, {
            // authSource: process.env.DB_NAME,
            // user: process.env.DB_USERNAME,
            // pass: process.env.DB_PASSWORD,
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        }, function (err) {
            if (err)
                throw err;
            console.log('DB Connected Successfully');
        });
    };
    return Mongoose;
}());
exports.default = Mongoose;
