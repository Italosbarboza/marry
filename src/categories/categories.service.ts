import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Categories } from './categories.entity';
import { Category } from './interfaces/createCategoryDTO';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectRepository(Categories)
    private categoriesRepository: Repository<Categories>,
  ) {}

  findAll(): Promise<Categories[]> {
    return this.categoriesRepository.find();
  }

  async findOne(id: number): Promise<Categories> {
    const categories = await this.categoriesRepository.findOneBy({ id });
    if (!categories) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return categories;
  }

  async create(createUserDto: Category): Promise<Categories> {
    const newUser = this.categoriesRepository.create(createUserDto);
    return await this.categoriesRepository.save(newUser);
  }

  async update(
    id: number,
    updateUserDto: Category,
  ): Promise<Categories | null> {
    const existingCategory = await this.categoriesRepository.findOneBy({ id });

    if (!existingCategory) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    // Update user properties
    existingCategory.name = updateUserDto.name;

    return await this.categoriesRepository.save(existingCategory);
  }

  async remove(id: number): Promise<void> {
    const user = await this.categoriesRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }

    await this.categoriesRepository.delete(id);
  }
}
