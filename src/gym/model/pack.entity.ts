import { GymEntity } from './gym.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class PackEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  price: number;
  @Column()
  description: string;
  @ManyToOne(() => GymEntity, (gym) => gym.packs)
  gym: GymEntity;
}
