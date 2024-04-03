import { Test, TestingModule } from '@nestjs/testing';
import { GuestGiftsService } from './guest-gifts.service';

describe('GuestGiftsService', () => {
  let service: GuestGiftsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GuestGiftsService],
    }).compile();

    service = module.get<GuestGiftsService>(GuestGiftsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
