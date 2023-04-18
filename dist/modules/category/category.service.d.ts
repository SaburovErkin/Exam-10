import { Repository } from 'typeorm';
import { Category } from '../../entities/category.entity';
import { CreateCategoryDto } from './dto/category.create.dto';
export declare class CategoryService {
    private readonly categoryRepo;
    constructor(categoryRepo: Repository<Category>);
    findAll(): Promise<Category[]>;
    create(createCategoryDto: CreateCategoryDto): Promise<Category>;
}
