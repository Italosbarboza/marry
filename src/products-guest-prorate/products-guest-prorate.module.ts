import { Module } from '@nestjs/common';
import { ProductsGuestProrateController } from './products-guest-prorate.controller';
import { ProductsGuestProrateService } from './products-guest-prorate.service';

@Module({
  controllers: [ProductsGuestProrateController],
  providers: [ProductsGuestProrateService],
})
export class ProductsGuestProrateModule {}
