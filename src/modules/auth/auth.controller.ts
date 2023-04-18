import { Controller, Post, Req, Body, UseGuards} from '@nestjs/common';
import { AuthService } from './auth.service';
import { Request } from 'express';
import { LocalGuards } from './guards/local.guards';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    signup(@Req() req: Request, @Body() body: any) {
        return this.authService.create(body)
    }

    @UseGuards(LocalGuards)
    @Post('signin')
    signin(@Req() req: Request, @Body() body: any) {
        return req.user
    }
}