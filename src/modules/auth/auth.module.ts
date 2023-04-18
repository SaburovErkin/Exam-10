import { Module } from '@nestjs/common';
import { JwtModule, JwtService } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategy/jwt.strategy';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [PassportModule, TypeOrmModule.forFeature([User]), JwtModule.register({secret: 'olma'})], 
    controllers: [AuthController],
    providers: [AuthService, JwtService, JwtStrategy, LocalStrategy]
})
export class AuthModule {}