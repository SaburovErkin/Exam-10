import { IsString } from 'class-validator'

export class UpdatePostDto {
    @IsString()
    post: string;

    @IsString()
    bookId: number

    @IsString()
    userId: number
}