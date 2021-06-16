import { GymService } from './gym.service';
import { Get, Param } from '@nestjs/common';
import { Controller } from '@nestjs/common';

@Controller('gym')
export class GymController {
  constructor(private gymService: GymService) {}

  @Get()
  async getAll() {
    return this.gymService.all();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    return this.gymService.findOne(id);
  }

  @Get('/:id/packs')
  async getPacks(@Param('id') id: number) {
    return this.gymService.getPacks(id);
  }
}
