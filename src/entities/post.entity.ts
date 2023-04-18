import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';
import { User } from './user.entity';




@Entity({name: 'posts'})
export class Post extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    post:string;
    
    
    
    
    @ManyToOne(() => Book, (book) => book.post)
    book: Book;
    
    @ManyToOne(() => User, (user) => user.post)
    user: User;
}