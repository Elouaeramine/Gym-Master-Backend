import { GymEntity } from './gym.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class PackEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column({ type: 'float', precision: 10, scale: 6 })
  price: number;
  @Column()
  description: string;
  @ManyToOne(() => GymEntity, (gym) => gym.packs)
  @JoinColumn({ name: 'gym_id' })
  gym: GymEntity;
}
