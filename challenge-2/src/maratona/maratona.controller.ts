import { Controller, Get, Post, Body } from '@nestjs/common';

import { MaratonaService } from './maratona.service';
import { Maratona } from './maratona.entity';

@Controller('maratona')
export class MaratonaController {

  constructor(
    private maratonaService: MaratonaService,
  ) { }

  @Get()
  index(): Promise<Maratona[]> {
    return this.maratonaService.findAll();
  }

  @Post()
  save(@Body() maratona: Maratona): Promise<any> {
    return this.maratonaService.create(maratona);
  }
}
