import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { HttpExceptionFilter } from './filter/http-exception.filter';
import { ConfigService } from '@nestjs/config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
    const app = await NestFactory.create(AppModule);
    app.useGlobalPipes(new ValidationPipe({ whitelist: true}));
    app.useGlobalFilters(new HttpExceptionFilter())
    
    const config = app.get(ConfigService)
    
    const port = config.getOrThrow<number>('app.port')
    const host = config.getOrThrow<string>('app.host')
    
    
    const configsw = new DocumentBuilder()
    .setTitle('Book shop')
    .setDescription('The book API description')
    .setVersion('1.0')
    .build();
    const document = SwaggerModule.createDocument(app, configsw);
    SwaggerModule.setup('api', app, document);
    
    
    await app.listen(port, host);
}
bootstrap();
