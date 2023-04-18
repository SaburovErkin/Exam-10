import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Put, Req, UseGuards } from '@nestjs/common';
import { PostService } from './post.service';
import { CreatePostDto } from './dto/post.create.dto';
import { UpdatePostDto } from './dto/post.update.dto'
import { ApiTags } from '@nestjs/swagger';

@Controller('posts')
@ApiTags('posts')
export class PostController {
    constructor(private readonly postService: PostService) {}

    @Get()
    @HttpCode(HttpStatus.OK)
    getAll() {
        return this.postService.findAll()
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Req() req: Request, @Body() body: CreatePostDto) {
        return this.postService.create(body);
    }



    @Put(':id')
    @HttpCode(HttpStatus.OK)
    update(@Param('id') postId:string, @Body()body: UpdatePostDto) {
        return this.postService.update(parseInt(postId), body);
    }
    
    @Delete(':id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id') postId:string) {
        return this.postService.delete(parseInt(postId));
    }
}
