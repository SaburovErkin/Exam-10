import { IsString, IsNumber } from 'class-validator'

export class UpdateBookDto {
    @IsString()
    title:string;

    @IsNumber()
    pages: number;

    @IsNumber()
    year: number;

    @IsNumber()
    price: number;

    @IsString()
    country: string;

    @IsString()
    description: string;

    @IsString()
    image: string;

    @IsNumber()
    categoryId: number;

    @IsNumber()
    authorId: number;
}