import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PayloadInterface } from 'src/auth/interfaces/payload.interface';
import { Repository } from 'typeorm';
import { UserEntity } from './model/user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity)
    private readonly userRepository: Repository<UserEntity>,
  ) {}

  async all(): Promise<UserEntity[]> {
    return this.userRepository.find();
  }

  async create(data): Promise<UserEntity[]> {
    return this.userRepository.save(data);
  }

  async findOne(condition): Promise<UserEntity> {
    return this.userRepository.findOne(condition);
  }

  async findByPayload(payload: PayloadInterface) {
    const { id } = payload;
    console.log(payload);

    return await this.userRepository.findOne({ id });
  }
}
