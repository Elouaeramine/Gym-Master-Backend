import { User } from './model/user.entity';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  @Get()
  async all(): Promise<User[]> {
    return;
  }
}
