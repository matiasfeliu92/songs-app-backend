import { Controller, Get, NotFoundException, Param } from '@nestjs/common';
import { GenresService } from '../services/genres.service';

@Controller('genres')
export class GenresController {
  constructor(private genreService: GenresService) {}

  @Get('')
  async findAll() {
    return this.genreService.getAll();
  }

  @Get('/:id')
  async findOne(@Param('id') id: number) {
    const genre = await this.genreService.getOneById(id);
    if (!genre) {
      throw new NotFoundException('Genre not found');
    }
    return genre;
  }
}
