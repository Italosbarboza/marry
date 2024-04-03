import { Module } from '@nestjs/common';
import { GuestGiftsController } from './guest-gifts.controller';
import { GuestGiftsService } from './guest-gifts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestGifts } from './guest-gifts.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestGifts]), GuestGifts],
  controllers: [GuestGiftsController],
  providers: [GuestGiftsService],
})
export class GuestGiftsModule {}
