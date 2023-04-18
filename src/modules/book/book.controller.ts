import { Body, Controller, Get, Param, Post, Put, Delete, HttpCode, HttpStatus, UseInterceptors, UploadedFile, FileTypeValidator, MaxFileSizeValidator, ParseFilePipe } from '@nestjs/common';
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book.create.dto';
import { UpdateBookDto } from './dto/book.update.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { resolve } from 'dns';
import { diskStorage } from 'multer';
import { ApiTags } from '@nestjs/swagger';


@Controller('books')
@ApiTags('books')
export class BookController {
    constructor(private readonly bookService: BookService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll() {
        return this.bookService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() body: CreateBookDto) {
        return this.bookService.create(body);
    }

    @Get(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    getOne(@Param('id') bookId: string) {
        return this.bookService.findOne(parseInt(bookId));
    }

    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') id:string, @Body()body: UpdateBookDto) {
        return this.bookService.update(parseInt(id), body);
    }

    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') bookId:string) {
        return this.bookService.delete(parseInt(bookId));
    }

    @Post('upload')
    @UseInterceptors(
        FileInterceptor('file', {
            storage: diskStorage({
                destination: 'uploads',
                filename: (req, file, cb) => {
                    const fileNameSplit = file.originalname.split('.');
                    const fileExt = fileNameSplit[fileNameSplit.length - 1];
                    cb(null, `${Date.now()}.${fileExt}`);
                }
            })
        })
    )
    uploadFile(@UploadedFile(
        new ParseFilePipe({
            validators: [
              new FileTypeValidator({ fileType: 'png'}),
            ],
          }),
    ) file: Express.Multer.File) {
        return file.filename        
    }
}