import { PackEntity } from './model/pack.entity';
import { GymEntity } from './model/gym.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Module } from '@nestjs/common';
import { GymController } from './gym.controller';
import { GymService } from './gym.service';

@Module({
  controllers: [GymController],
  providers: [GymService],
  imports: [TypeOrmModule.forFeature([GymEntity, PackEntity])],
})
export class GymModule {}
