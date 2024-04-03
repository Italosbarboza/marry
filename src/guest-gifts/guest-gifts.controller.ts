import { Body, Controller, Post } from '@nestjs/common';
import { GuestGifts } from './guest-gifts.entity';
import { GuestGiftsService } from './guest-gifts.service';

@Controller('guest-guifts')
export class GuestGiftsController {

    constructor(private readonly categoriesService: GuestGiftsService) {}

    @Post()
    create(@Body() createUserDto: GuestGifts): Promise<GuestGifts> {
        return this.categoriesService.create(createUserDto);
  }
}
