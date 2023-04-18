import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString } from 'class-validator'

export class CreateUserDto {
    @ApiProperty({
        default: "Ali"
    })
    @IsString()
    firstName: string;

    @ApiProperty({
        default: "Valiyev"
    })
    @IsString()
    lastName: string;

    @ApiProperty({
        default: "99890000000"
    })
    @IsString()
    phone: string;

    @ApiProperty({
        default: "ali@gmail.com"
    })
    @IsString()
    email: string;

    @ApiProperty()
    @IsString()
    image: string;

    @ApiProperty({
        default: "123456789"
    })
    @IsString()
    password: string;
}