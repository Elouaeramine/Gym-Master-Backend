import { BlogEntity } from './model/blog.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BlogService {
  constructor(
    @InjectRepository(BlogEntity)
    private readonly blogRepository: Repository<BlogEntity>,
  ) {}

  async all(): Promise<BlogEntity[]> {
    return this.blogRepository.find();
  }

  async findOne(condition): Promise<BlogEntity> {
    return this.blogRepository.findOne(condition);
  }
}
