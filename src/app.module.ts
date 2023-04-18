import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BookModule } from './modules/book/book.module';
import { AuthorModule } from './modules/author/author.module';
import { UserModule } from './modules/user/user.module';
import { config } from './config/index';
import { AuthModule } from './modules/auth/auth.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [ConfigModule.forRoot(config), 
  TypeOrmModule.forRoot({
    type: 'postgres',
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: 5432,
    username: process.env.DB_USER,
    entities: [__dirname + '\\entities\\*.entity.{js,ts}'],
    synchronize: true
  }),
  BookModule, AuthorModule, UserModule, AuthModule, CategoryModule],
  controllers: [],
  providers: [],
})
export class AppModule{}