/// <reference types="passport" />
import { AuthService } from './auth.service';
import { Request } from 'express';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signup(req: Request, body: any): {
        access_token: string;
    };
    signin(req: Request, body: any): Express.User;
}
