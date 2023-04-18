import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/book.create.dto';
import { UpdateBookDto } from './dto/book.update.dto';

@Injectable()
export class BookService {
    constructor(
        @InjectRepository(Book) private readonly bookRepo: Repository<Book>,
    ) {}


    findAll() {
        return this.bookRepo.find()
    }

    create(data: CreateBookDto) {
        const book = this.bookRepo.create(data);
        this.bookRepo.save(book);
        return book
    }

    findOne(id: number) {
        return this.bookRepo.findOne({ where: { id }})
    }

    update(id: number, body: UpdateBookDto) {
        return this.bookRepo.update({id}, body);
    }

    delete(id: number) {
        return this.bookRepo.delete({id});
    }
}
