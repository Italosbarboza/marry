import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Categories } from './categories.entity';
import { CategoryDTO } from './interfaces/createCategoryDTO';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  @Get()
  findAll(): Promise<Categories[]> {
    return this.categoriesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Categories> {
    return this.categoriesService.findOne(+id);
  }

  @Post()
  create(@Body() createUserDto: CategoryDTO): Promise<Categories> {
    return this.categoriesService.create(createUserDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateCategoryDto: CategoryDTO,
  ): Promise<Categories> {
    return this.categoriesService.update(+id, updateCategoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.categoriesService.remove(+id);
  }
}
