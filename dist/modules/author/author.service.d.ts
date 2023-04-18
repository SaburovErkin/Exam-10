/// <reference types="multer" />
import { Author } from 'src/entities/author.entity';
import { Repository } from 'typeorm';
import { CreateAuthorDto } from './dto/author.create.dto';
import { UpdateAuthorDto } from './dto/author.update.dto';
export declare class AuthorService {
    private readonly authorRepo;
    constructor(authorRepo: Repository<Author>);
    findAll(): Promise<Author[]>;
    create(createAuthorDto: CreateAuthorDto, file: Express.Multer.File): Promise<Author>;
    update(id: number, body: UpdateAuthorDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
    findOne(id: number): Promise<Author>;
}
