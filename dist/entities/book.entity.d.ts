import { BaseEntity } from 'typeorm';
import { Author } from './author.entity';
import { Post } from './post.entity';
import { Category } from './category.entity';
export declare class Book extends BaseEntity {
    id: number;
    title: string;
    pages: number;
    year: number;
    price: number;
    country: string;
    description: string;
    image: string;
    authors: Author[];
    post: Post[];
    category: Category[];
}
