import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Post } from './post.entity';


@Entity({name: 'users'})
export class User extends BaseEntity {
    static push(data: any) {
        throw new Error('Method not implemented.');
    }
    @PrimaryGeneratedColumn()
    id: number;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    firstName: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    lastName: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    phone: string;
    
    @Column({
        type: 'varchar',
        length: 32,
        nullable: true,
    })
    email:string;
    
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
    password:string;
    
    
    
    
    @OneToMany(() => Post, (post) => post.user)
    post: Post[];
}