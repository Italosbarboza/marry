import { Test, TestingModule } from '@nestjs/testing';
import { ProductsGuestController } from './products-guest.controller';

describe('ProductsGuestController', () => {
  let controller: ProductsGuestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsGuestController],
    }).compile();

    controller = module.get<ProductsGuestController>(ProductsGuestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
