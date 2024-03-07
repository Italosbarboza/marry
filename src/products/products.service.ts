import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';
import { ProductDTO } from './interfaces/createProductDTO';
@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find();
  }

  async findOne(id: number): Promise<Products> {
    const categories = await this.productsRepository.findOneBy({ id });
    if (!categories) {
      throw new NotFoundException(`Category with ID ${id} not found`);
    }
    return categories;
  }

  async create(createProductDto: ProductDTO): Promise<Products> {
    const newProduct = this.productsRepository.create(createProductDto);
    return await this.productsRepository.save(newProduct);
  }

  async update(
    id: number,
    updateProductDto: ProductDTO,
  ): Promise<Products | null> {
    const existingProduct = await this.productsRepository.findOneBy({ id });

    if (!existingProduct) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    existingProduct.name = updateProductDto.name;

    return await this.productsRepository.save(existingProduct);
  }

  async remove(id: number): Promise<void> {
    const product = await this.productsRepository.findOneBy({ id });

    if (!product) {
      throw new NotFoundException(`Product with ID ${id} not found`);
    }

    await this.productsRepository.delete(id);
  }
}
