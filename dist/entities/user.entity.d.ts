import { BaseEntity } from 'typeorm';
import { Post } from './post.entity';
export declare class User extends BaseEntity {
    static push(data: any): void;
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    image: string;
    password: string;
    post: Post[];
}
