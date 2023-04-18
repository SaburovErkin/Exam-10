import { Post } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/post.create.dto';
import { UpdatePostDto } from './dto/post.update.dto';
export declare class PostService {
    private readonly postRepo;
    constructor(postRepo: Repository<Post>);
    findAll(): Promise<Post[]>;
    create(data: CreatePostDto): Post;
    update(id: number, body: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
