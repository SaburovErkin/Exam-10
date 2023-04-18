import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(@InjectRepository(User)private readonly userRepo: Repository<User>,) {}
    async findAll() {
        return await this.userRepo.find();
    }

    async create(createUserDto: CreateUserDto) {
        const user = this.userRepo.create(createUserDto);
        await this.userRepo.save(user);
        return user;
    }
    
    async findOne(id: number) {
        return await this.userRepo.findOneBy({ id });
    }
    
    async update(id: number, updateUserDto: UpdateUserDto) {
        await this.userRepo.update({ id }, updateUserDto);
        return await this.userRepo.findOneBy({ id });
    }
    
    async delete(id: number) {
        return await this.userRepo.delete({ id });
    }
}
