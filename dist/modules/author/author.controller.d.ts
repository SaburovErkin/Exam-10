/// <reference types="multer" />
import { AuthorService } from './author.service';
import { CreateAuthorDto } from './dto/author.create.dto';
import { UpdateAuthorDto } from './dto/author.update.dto';
export declare class AuthorController {
    private readonly authorService;
    constructor(authorService: AuthorService);
    getAll(): Promise<import("../../entities/author.entity").Author[]>;
    create(createAuthorDto: CreateAuthorDto, file: Express.Multer.File): Promise<import("../../entities/author.entity").Author>;
    getOne(authorId: string): Promise<import("../../entities/author.entity").Author>;
    update(authorId: string, updateAuthorDto: UpdateAuthorDto): Promise<import("typeorm").UpdateResult>;
    delete(authorId: string): Promise<import("typeorm").DeleteResult>;
}
