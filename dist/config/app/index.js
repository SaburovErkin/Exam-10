"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppConfig = void 0;
const config_1 = require("@nestjs/config");
exports.AppConfig = (0, config_1.registerAs)('app', () => ({
    host: process.env.APP_HOST || undefined,
    port: Number(process.env.APP_PORT) || undefined,
}));
//# sourceMappingURL=index.js.map