"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const http_exception_filter_1 = require("./filter/http-exception.filter");
const config_1 = require("@nestjs/config");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new common_1.ValidationPipe({ whitelist: true }));
    app.useGlobalFilters(new http_exception_filter_1.HttpExceptionFilter());
    const config = app.get(config_1.ConfigService);
    const port = config.getOrThrow('app.port');
    const host = config.getOrThrow('app.host');
    const configsw = new swagger_1.DocumentBuilder()
        .setTitle('Book shop')
        .setDescription('The book API description')
        .setVersion('1.0')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, configsw);
    swagger_1.SwaggerModule.setup('api', app, document);
    await app.listen(port, host);
}
bootstrap();
//# sourceMappingURL=main.js.map