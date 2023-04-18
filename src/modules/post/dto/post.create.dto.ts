import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator'

export class CreatePostDto {
    @ApiProperty({
        default: "0000000000000"
    })
    @IsString()
    post: string;
}