import { BadRequestException, HttpException, HttpStatus, Injectable, NotFoundException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';



@Injectable()
export class AuthService {
    constructor(
    @InjectRepository(User) private readonly userRepo: Repository<User>,
        private readonly jwtService: JwtService,
    ) {}
        
    validateUser(email: string, password: string) {
        return this.userRepo.findOne({where: {email, password}})
    }

    create(data) {
        User.push(data)
        const token = this.jwtService.sign({userId: data.userId })
        return { access_token: token };
    }
}