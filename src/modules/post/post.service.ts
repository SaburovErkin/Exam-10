import { Injectable } from '@nestjs/common';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { Post } from 'src/entities/post.entity';
import { Repository } from 'typeorm';
import { CreatePostDto } from './dto/post.create.dto';
import { UpdatePostDto } from './dto/post.update.dto';

@Injectable()
export class PostService {
    constructor(
        @InjectRepository(Post) private readonly postRepo: Repository<Post>,
    ) {}

    findAll() {
        return this.postRepo.find()
    }

    create(data: CreatePostDto) {
        const post = this.postRepo.create(data);
        this.postRepo.save(post);
        return post
    }

    async update(id: number, body: UpdatePostDto) {
        return await this.postRepo.update({id}, body);
    }

    async delete(id: number) {
        return await this.postRepo.delete({id});
    }
}
