import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFile } from '@nestjs/common';
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/author.create.dto';
import { UpdateAuthorDto } from './dto/author.update.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { resolve } from 'path';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('authors')
@ApiTags('authors')
export class AuthorController {
    constructor(private readonly authorService: AuthorService) {}
    
    @Get()
    @HttpCode(HttpStatus.OK)
    getAll() {
        return this.authorService.findAll()
    }
    
    
    @Post()
    @HttpCode(HttpStatus.CREATED)
    @UseInterceptors(
        FileInterceptor('image', {
            storage: diskStorage({
                destination: resolve(process.cwd(), 'uploads'),
                filename: (req, file, cb) => {
                    const fileNameSplit = file.originalname.split('.');
                    const fileExt = fileNameSplit[fileNameSplit.length - 1];
                    cb(null, `${Date.now()}.${fileExt}`);
                }
            })
        })
    )
    create(
    @Body() createAuthorDto: CreateAuthorDto,
    @UploadedFile() file: Express.Multer.File,
    ) {
        return this.authorService.create(createAuthorDto, file);
    }
    
    
    @Get(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    getOne(@Param('id') authorId: string) {
        return this.authorService.findOne(parseInt(authorId));
    }
    
    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') authorId:string, @Body() updateAuthorDto: UpdateAuthorDto) {
        return this.authorService.update(parseInt(authorId), updateAuthorDto);
    }
    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') authorId:string) {
        return this.authorService.delete(parseInt(authorId));
    }
}
    