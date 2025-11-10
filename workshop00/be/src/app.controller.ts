import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('quote')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getQuote(): string {
    return this.appService.getQuote();
  }
}
