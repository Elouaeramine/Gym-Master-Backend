import { UserService } from './../user/user.service';
import { Body, Controller, Post } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';

@Controller()
export class AuthController {
  constructor(private userService: UserService) {}
  @Post('register')
  async register(@Body() body) {
    const hashed = await bcrypt.hash(body.password, 12);
    return this.userService.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: hashed,
    });
  }
}
