import { Module } from '@nestjs/common';
import { GuestGiftsController } from './guest-gifts.controller';
import { GuestGiftsService } from './guest-gifts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GuestGifts } from './guest-gifts.entity';
import { GuestResponsesController } from './guest-responses.controller';
import { GuestResponsesService } from './guest-responses.service';
import { GuestResponses } from './guest-responses.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GuestGifts, GuestResponses]), GuestGifts],
  controllers: [GuestGiftsController, GuestResponsesController],
  providers: [GuestGiftsService, GuestResponsesService],
})
export class GuestGiftsModule {}
