import { Test, TestingModule } from '@nestjs/testing';
import { GuestGiftsController } from './guest-gifts.controller';

describe('GuestGiftsController', () => {
  let controller: GuestGiftsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GuestGiftsController],
    }).compile();

    controller = module.get<GuestGiftsController>(GuestGiftsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
