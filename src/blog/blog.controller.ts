import { BlogService } from './blog.service';
import { Controller, Get, Param } from '@nestjs/common';

@Controller('blog')
export class BlogController {
  constructor(private blogService: BlogService) {}

  @Get()
  async getAll() {
    return this.blogService.all();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.blogService.findOne(id);
  }
}
