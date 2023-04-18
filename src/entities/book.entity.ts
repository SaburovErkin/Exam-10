import { BaseEntity, Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Author } from './author.entity';
import { Post } from './post.entity';
import { Category } from './category.entity';


@Entity({name: 'books'})
export class Book extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    title: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    pages: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    year: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    price: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    country: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    description: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    image: string;


    
    @ManyToMany(() => Author, (author) => author.books)
    authors: Author[];
    
    @OneToMany(() => Post, (post) => post.book)
    post: Post[];

    @OneToMany(() => Category, (category) => category.book)
    category: Category[];
}