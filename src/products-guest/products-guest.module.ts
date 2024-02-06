import { Module } from '@nestjs/common';
import { ProductsGuestController } from './products-guest.controller';
import { ProductsGuestService } from './products-guest.service';

@Module({
  controllers: [ProductsGuestController],
  providers: [ProductsGuestService],
})
export class ProductsGuestModule {}
