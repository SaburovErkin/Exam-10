import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator'


export class CreateAuthorDto {
    @ApiProperty({
        default: "Alisher"
    })
    @IsString()
    firstName: string;
  
    @ApiProperty({
        default: "Navoi"
    })
    @IsString()
    lastName: string;
  
    @ApiProperty({
        default: "1441"
    })
    @IsString()
    dateOfBirth: string;
  
    @ApiProperty({
        default: "1501"
    })
    @IsString()
    dateOfDeath: string;
  
    @ApiProperty({
        default: "Uzbekistan"
    })
    @IsString()
    country: string;
  
    @ApiProperty({
        default: "Komil inson"
    })
    @IsString()
    bio: string;

    @ApiProperty()
    @IsString()
    image: string;
}