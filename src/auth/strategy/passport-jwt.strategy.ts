import { UserService } from './../../user/user.service';
import { PayloadInterface } from './../interfaces/payload.interface';
import { Repository } from 'typeorm';
import { ExtractJwt, Strategy, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { HttpStatus, Injectable, UnauthorizedException } from '@nestjs/common';
import { UserEntity } from '../../user/model/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { HttpException } from '@nestjs/common/exceptions';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private userService: UserService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secret',
    });
  }

  async validate(payload: PayloadInterface, done: VerifiedCallback) {
    // Fetching the User
    const user = await this.userService.findByPayload(payload);
    // If user exists  we return the user ( automatically its passed to the req)
    if (!user) {
      return done(
        new HttpException('Unauthorized Access ', HttpStatus.UNAUTHORIZED),
        false,
      );
    }
    return done(null, user, payload);
  }
}
