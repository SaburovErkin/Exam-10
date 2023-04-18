"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalGuards = void 0;
const passport_1 = require("@nestjs/passport");
class LocalGuards extends (0, passport_1.AuthGuard)('local') {
}
exports.LocalGuards = LocalGuards;
//# sourceMappingURL=local.guards.js.map