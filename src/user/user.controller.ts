import { JwtAuthGuard } from './../auth/guards/jwt-auth.guard';
import { UserService } from './user.service';
import { UserEntity } from './model/user.entity';
import { User } from '../utilities/user.decorator';
import { Controller, Get, UseGuards } from '@nestjs/common';

@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}
  @Get()
  @UseGuards(JwtAuthGuard)
  async all(@User() user: any): Promise<UserEntity[]> {
    console.log(user);
    return this.userService.all();
  }
}
