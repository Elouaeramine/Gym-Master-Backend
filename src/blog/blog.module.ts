import { BlogEntity } from './model/blog.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BlogService } from './blog.service';
import { BlogController } from './blog.controller';
import { Module } from '@nestjs/common';

@Module({
  controllers: [BlogController],
  providers: [BlogService],
  imports: [TypeOrmModule.forFeature([BlogEntity])],
})
export class BlogModule {}
