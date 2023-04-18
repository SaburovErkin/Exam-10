import { IsNumber, IsString } from 'class-validator'

export class UpdateUserDto {
    @IsString()
    firstName: string;

    @IsString()
    lastName: string;

    @IsString()
    phone: string;

    @IsString()
    email: string;

    @IsString()
    image: string;

    @IsString()
    password: string;

    @IsNumber()
    bookId: number

    @IsNumber()
    postId: number
}