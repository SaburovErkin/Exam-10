import { Controller, Get, Post, Body, Put, Param, Delete, ForbiddenException, UseFilters, HttpCode, HttpStatus} from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.create.dto';
import { UpdateUserDto } from './dto/user.update.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('users')
@ApiTags('users')
export class UserController {
    constructor(private readonly userService: UserService) {}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    findAll() {
        return this.userService.findAll();
    }

    @Get(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    findOne(@Param('id') userId: string) {
        return this.userService.findOne(parseInt(userId));
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') userId: string, @Body() updateUserDto: UpdateUserDto) {
        return this.userService.update(parseInt(userId), updateUserDto);
    }
    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') userId: string) {
        return this.userService.delete(parseInt(userId));
    }
}
