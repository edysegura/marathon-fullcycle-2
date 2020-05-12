import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { join } from 'path';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('sender')
  sender(@Res() response: Response) {
    response.sendFile(join(__dirname, '../public/send.html'));
  }

  @Get('receiver')
  receiver(@Res() response: Response) {
    response.sendFile(join(__dirname, '../public/receive.html'));
  }

}
