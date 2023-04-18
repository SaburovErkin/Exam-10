import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';
import { CreateCategoryDto } from './dto/category.create.dto';

@Injectable()
export class CategoryService {
    constructor(
        @InjectRepository(Category) private readonly categoryRepo: Repository<Category>,
    ) {}


    findAll() {
        return this.categoryRepo.find()
    }

    async create(createCategoryDto: CreateCategoryDto) {
        const category = this.categoryRepo.create(createCategoryDto);
        await this.categoryRepo.save(category);
        return category
    }
}