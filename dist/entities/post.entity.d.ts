import { BaseEntity } from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';
export declare class Post extends BaseEntity {
    id: number;
    post: string;
    book: Book;
    user: User;
}
