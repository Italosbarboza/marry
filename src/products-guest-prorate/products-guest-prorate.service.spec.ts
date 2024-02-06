import { Test, TestingModule } from '@nestjs/testing';
import { ProductsGuestProrateService } from './products-guest-prorate.service';

describe('ProductsGuestProrateService', () => {
  let service: ProductsGuestProrateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsGuestProrateService],
    }).compile();

    service = module.get<ProductsGuestProrateService>(ProductsGuestProrateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
