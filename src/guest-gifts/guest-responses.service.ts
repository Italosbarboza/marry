import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GuestResponses } from './guest-responses.entity';

@Injectable()
export class GuestResponsesService {
  constructor(
    @InjectRepository(GuestResponses)
    private readonly guestResponsesRepository: Repository<GuestResponses>,
  ) {}

  async create(createGuestResponseDto: GuestResponses): Promise<GuestResponses> {
    const guestResponse = this.guestResponsesRepository.create(createGuestResponseDto);
    return await this.guestResponsesRepository.save(guestResponse);
  }
}
