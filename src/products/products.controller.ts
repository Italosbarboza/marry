import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ProductDTO } from './interfaces/createProductDTO';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  findAll(): Promise<Products[]> {
    return this.productsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Products> {
    return this.productsService.findOne(+id);
  }

  @Post()
  create(@Body() createProductDto: ProductDTO): Promise<Products> {
    return this.productsService.create(createProductDto);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateProductDto: ProductDTO,
  ): Promise<Products> {
    return this.productsService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<any> {
    return this.productsService.remove(+id);
  }
}
