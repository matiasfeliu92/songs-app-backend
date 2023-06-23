import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { ArtistsService } from '../services/artists.service';

@Controller('artists')
export class ArtistsController {
  constructor(private artistService: ArtistsService) {}

  @Get('')
  async findAll() {
    return this.artistService.getAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    const artist = await this.artistService.getOneById(id);
    if (!artist) {
      throw new NotFoundException('Artist not found');
    }
    return artist;
  }
}
