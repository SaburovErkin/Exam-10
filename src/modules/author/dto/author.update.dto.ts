import { IsNumber, IsString } from 'class-validator'

export class UpdateAuthorDto {
    @IsString()
    firstName: string;
  
    @IsString()
    lastName: string;
  
    @IsString()
    dateOfBirth: string;
  
    @IsString()
    dateOfDeath: string;
  
    @IsString()
    country: string;
  
    @IsString()
    bio: string;

    @IsString()
    image: string;

    @IsNumber()
    bookId: number;
}