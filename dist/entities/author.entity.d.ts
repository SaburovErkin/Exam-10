import { BaseEntity } from 'typeorm';
import { Book } from './book.entity';
export declare class Author extends BaseEntity {
    id: number;
    firstName: string;
    lastName: string;
    dateOfBirth: string;
    dateOfDeath: string;
    country: string;
    bio: string;
    image: string;
    bookId: number;
    books?: Book[];
}
