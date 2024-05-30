import { Body, Controller, Post } from '@nestjs/common';
import { GuestResponses } from './guest-responses.entity';
import { GuestResponsesService } from './guest-responses.service';

@Controller('guest-responses')
export class GuestResponsesController {
  constructor(private readonly guestResponsesService: GuestResponsesService) {}

  @Post()
  create(@Body() createGuestResponseDto: GuestResponses): Promise<GuestResponses> {
    return this.guestResponsesService.create(createGuestResponseDto);
  }
}
