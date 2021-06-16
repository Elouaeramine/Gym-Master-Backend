import { RegisterDto } from './models/register.dto';
import { UserService } from './../user/user.service';
import {
  BadRequestException,
  Body,
  Controller,
  NotFoundException,
  Post,
} from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { LoginDto } from './models/login.dto';
import { JwtService } from '@nestjs/jwt';

@Controller()
export class AuthController {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}
  @Post('register')
  async register(@Body() body: RegisterDto) {
    if (body.password !== body.password_confirm) {
      throw new BadRequestException('Passwords do not Match !');
    }
    const hashed = await bcrypt.hash(body.password, 12);
    return this.userService.create({
      first_name: body.first_name,
      last_name: body.last_name,
      email: body.email,
      password: hashed,
    });
  }

  @Post('login')
  async login(@Body() body: LoginDto) {
    const user = await this.userService.findOne({
      where: { email: body.email },
    });
    if (!user) {
      throw new NotFoundException('User Not Found !');
    }

    if (!(await bcrypt.compare(body.password, user.password))) {
      throw new BadRequestException('Invalid Credentials !');
    }

    const jwt = this.jwtService.signAsync({ id: user.id });
    return {
      ...user,  
      access_token: (await jwt).toString(),
    };
  }
}
