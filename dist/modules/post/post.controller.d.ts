import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.create.dto';
import { UpdatePostDto } from './dto/post.update.dto';
export declare class PostController {
    private readonly postService;
    constructor(postService: PostService);
    getAll(): Promise<import("../../entities/post.entity").Post[]>;
    create(req: Request, body: CreatePostDto): import("../../entities/post.entity").Post;
    update(postId: string, body: UpdatePostDto): Promise<import("typeorm").UpdateResult>;
    delete(postId: string): Promise<import("typeorm").DeleteResult>;
}
