"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const nconf_1 = __importDefault(require("nconf"));
const winston_1 = __importDefault(require("winston"));
const uri = `mongodb://127.0.0.1:27017/${nconf_1.default.get('MONGO_DB') || 'hello-world'}`;
const config = {
    mongo: {
        uri: nconf_1.default.get('MONGO_URI') || uri,
        auth: {
            user: nconf_1.default.get('MONGO_USER') || '',
            pass: nconf_1.default.get('MONGO_PASS') || '',
        },
        options: {
            server: {
                reconnectTries: Number.MAX_VALUE,
            },
        },
    },
    logger: new winston_1.default.Logger({
        level: nconf_1.default.get('LOG_LEVEL') || 'info',
        transports: [
            new winston_1.default.transports.Console({
                colorize: true,
                timestamp: false,
                json: true,
                handleExceptions: true,
            }),
        ],
        exitOnError: false,
    }),
};
exports.default = config;
//# sourceMappingURL=config.js.map