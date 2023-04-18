import { BaseEntity, Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Book } from './book.entity';

@Entity({name: 'authors'})
export class Author extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    firstName:string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    lastName:string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    dateOfBirth: string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    dateOfDeath: string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    country:string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    bio:string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    image: string;

    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    bookId:number;

    

    @ManyToMany(() => Book, (book) => book.authors)
  @JoinTable({
    name: 'author_book',
    joinColumn: {
      name: 'author_id',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'book_id',
      referencedColumnName: 'id',
    },
  })
  books?: Book[]; 
}