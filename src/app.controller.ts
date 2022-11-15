import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import  AppService  from './app.service';
import { User } from './entities/user.model';

@Controller('/hello')
export class AppController {
  constructor() {}

  @Post()
  getHello(@Body() body: User[], @Query('name') name: string): User[] {
    return null;
  }
}
