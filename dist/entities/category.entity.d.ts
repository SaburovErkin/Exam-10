import { BaseEntity } from 'typeorm';
import { Book } from './book.entity';
export declare class Category extends BaseEntity {
    id: number;
    categories: string;
    book: Book[];
}
