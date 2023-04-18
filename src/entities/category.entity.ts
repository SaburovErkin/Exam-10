import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';


@Entity({name: 'categories'})
export class Category extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    categories: string;
    
    @OneToMany(() => Book, (book) => book.category)
    book: Book[];
}