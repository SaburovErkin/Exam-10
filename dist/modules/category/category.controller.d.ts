import { CategoryService } from './category.service';
import { CreateCategoryDto } from './dto/category.create.dto';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    findAll(): Promise<import("../../entities/category.entity").Category[]>;
    create(createCategoryDto: CreateCategoryDto): Promise<import("../../entities/category.entity").Category>;
}
