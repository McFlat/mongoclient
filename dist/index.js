"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
exports.default = (config) => {
    const conf = config || config_1.default;
    require('mongoose').connect(conf.mongo.uri, conf.mongo.auth, (err) => {
        if (err)
            conf.logger.error("Failed to connect to MongoDB with config " + JSON.stringify(conf.mongo));
        else
            conf.logger.info("Successfully connected to MongoDB database " + conf.mongo.uri);
    });
};
//# sourceMappingURL=index.js.map