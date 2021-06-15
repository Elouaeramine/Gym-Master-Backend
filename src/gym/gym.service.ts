import { GymEntity } from './model/gym.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PackEntity } from './model/pack.entity';

@Injectable()
export class GymService {
  constructor(
    @InjectRepository(GymEntity)
    private readonly gymRepository: Repository<GymEntity>,
    @InjectRepository(PackEntity)
    private readonly packsRepository: Repository<PackEntity>,
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

  async getPacks(id): Promise<PackEntity[]> {
    // return this.packsRepository.find({ relations: ['gym_entity'] });

    const packs = await this.packsRepository
      .createQueryBuilder('gym')
      .relation(GymEntity, 'packs')
      .of(id)
      .loadMany();

    return packs;
  }
}
