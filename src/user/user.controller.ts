import { UserService } from './user.service';
import { User } from './model/user.entity';
import { Controller, Get } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  async all(): Promise<User[]> {
    return this.userService.all();
  }
}
