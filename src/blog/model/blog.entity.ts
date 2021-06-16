import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity('blog')
export class BlogEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  imageUrl: string;
  @Column()
  title: string;
  @Column()
  author: string;
  @Column({ length: 2000 })
  article: string;
  @Column()
  coverImageUrl: string;
  @Column()
  summary: string;
}
