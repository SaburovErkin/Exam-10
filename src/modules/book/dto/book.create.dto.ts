import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber } from 'class-validator'

export class CreateBookDto {
    @ApiProperty({
        default: "G'azal"
    })
    @IsString()
    title:string;

    @ApiProperty({
        default: "1000"
    })
    @IsNumber()
    pages: number;

    @ApiProperty({
        default: "999"
    })
    @IsNumber()
    year: number;

    @ApiProperty({
        default: "00"
    })
    @IsNumber()
    price: number;

    @ApiProperty({
        default: "Movorounnaxr"
    })
    @IsString()
    country: string;

    @ApiProperty({
        default: "nice Book"
    })
    @IsString()
    description: string;

    @ApiProperty()
    @IsString()
    image: string;
}