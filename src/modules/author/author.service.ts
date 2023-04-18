import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Author } from 'src/entities/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/author.create.dto';
import { UpdateAuthorDto } from './dto/author.update.dto';
// import { Book } from 'src/entities/book.entity';

@Injectable()
export class AuthorService {
    constructor(
        @InjectRepository(Author) private readonly authorRepo: Repository<Author>,
        // @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    ) {}

    async findAll() {
        return await this.authorRepo.find()
    }

    async create(createAuthorDto: CreateAuthorDto, file: Express.Multer.File) {
        const author = this.authorRepo.create({...createAuthorDto, image: file.filename,});
        await this.authorRepo.save(author);
        return await author
    }

    async update(id: number, body: UpdateAuthorDto) {
        return await this.authorRepo.update({id}, body);
    }

    async delete(id: number) {
        return await this.authorRepo.delete({id});
    }


    async findOne(id: number) {
        return await this.authorRepo.findOne({ where: { id }})
    }
    
}
