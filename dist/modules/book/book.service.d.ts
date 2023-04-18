import { Book } from 'src/entities/book.entity';
import { Repository } from 'typeorm';
import { CreateBookDto } from './dto/book.create.dto';
import { UpdateBookDto } from './dto/book.update.dto';
export declare class BookService {
    private readonly bookRepo;
    constructor(bookRepo: Repository<Book>);
    findAll(): Promise<Book[]>;
    create(data: CreateBookDto): Book;
    findOne(id: number): Promise<Book>;
    update(id: number, body: UpdateBookDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
