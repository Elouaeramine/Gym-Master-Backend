import { GymEntity } from './model/gym.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class GymService {
  constructor(
    @InjectRepository(GymEntity)
    private readonly gymRepository: Repository<GymEntity>,
  ) {}

  async all(): Promise<GymEntity[]> {
    return this.gymRepository.find();
  }

  async create(data): Promise<GymEntity[]> {
    return this.gymRepository.save(data);
  }

  async findOne(condition): Promise<GymEntity> {
    return this.gymRepository.findOne(condition);
  }
}
