import { PackEntity } from './pack.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class GymEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;
  @Column({ type: 'float', precision: 10, scale: 6 })
  latitude: any;
  @Column({ type: 'float', precision: 10, scale: 6 })
  longitude: any;
  @Column({ type: 'float', precision: 10, scale: 6 })
  rating: number;
  @Column()
  imageUrl: string;
  @Column()
  coverImageUrl: string;

  @OneToMany(() => PackEntity, (pack) => pack.gym)
  packs: PackEntity[];
}
