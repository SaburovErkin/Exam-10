"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtGuards = void 0;
const passport_1 = require("@nestjs/passport");
class JwtGuards extends (0, passport_1.AuthGuard)('jwt') {
}
exports.JwtGuards = JwtGuards;
//# sourceMappingURL=jwt.guards.js.map