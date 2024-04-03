import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GuestGifts } from './guest-gifts.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GuestGiftsService {
    constructor(
        @InjectRepository(GuestGifts)
        private guestGiftsRepository: Repository<GuestGifts>,
      ) {}
    

    async create(guestGiftsDto: GuestGifts): Promise<GuestGifts> {
        const newUser = this.guestGiftsRepository.create(guestGiftsDto);
        return await this.guestGiftsRepository.save(newUser);
      }
}
