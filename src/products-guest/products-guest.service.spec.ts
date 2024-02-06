import { Test, TestingModule } from '@nestjs/testing';
import { ProductsGuestService } from './products-guest.service';

describe('ProductsGuestService', () => {
  let service: ProductsGuestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductsGuestService],
    }).compile();

    service = module.get<ProductsGuestService>(ProductsGuestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
