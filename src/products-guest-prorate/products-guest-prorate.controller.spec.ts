import { Test, TestingModule } from '@nestjs/testing';
import { ProductsGuestProrateController } from './products-guest-prorate.controller';

describe('ProductsGuestProrateController', () => {
  let controller: ProductsGuestProrateController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductsGuestProrateController],
    }).compile();

    controller = module.get<ProductsGuestProrateController>(ProductsGuestProrateController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
