import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('books')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('one')
  getHello(): string {
    return this.appService.getHello();
  }
}
