import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    findAll(): Promise<import("../../entities/user.entity").User[]>;
    findOne(userId: string): Promise<import("../../entities/user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("../../entities/user.entity").User>;
    update(userId: string, updateUserDto: UpdateUserDto): Promise<import("../../entities/user.entity").User>;
    delete(userId: string): Promise<import("typeorm").DeleteResult>;
}
