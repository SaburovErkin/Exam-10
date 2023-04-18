/// <reference types="multer" />
import { BookService } from './book.service';
import { CreateBookDto } from './dto/book.create.dto';
import { UpdateBookDto } from './dto/book.update.dto';
export declare class BookController {
    private readonly bookService;
    constructor(bookService: BookService);
    getAll(): Promise<import("../../entities/book.entity").Book[]>;
    create(body: CreateBookDto): import("../../entities/book.entity").Book;
    getOne(bookId: string): Promise<import("../../entities/book.entity").Book>;
    update(id: string, body: UpdateBookDto): Promise<import("typeorm").UpdateResult>;
    delete(bookId: string): Promise<import("typeorm").DeleteResult>;
    uploadFile(file: Express.Multer.File): string;
}
