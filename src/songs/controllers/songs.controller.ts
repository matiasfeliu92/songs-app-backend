import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { SongsService } from '../services/songs.service';
import { CreateNewSong } from '../dtos/CreateNewSong.dto';

@Controller('songs')
export class SongsController {
  constructor(private songService: SongsService) {}

  @Get('')
  async findAll() {
    return await this.songService.getAll();
  }

  @Get('/:id')
  async findOneById(@Param('id') id: number) {
    const song = await this.songService.getOneById(id);
    if (!song) {
      throw new NotFoundException('Song not found');
    }
    return song;
  }

  @Get('/:title')
  async findOneByTitle(@Param('title') title: string) {
    const song = await this.songService.getOneByName(title);
    if (!song) {
      throw new NotFoundException('Song not found');
    }
    return song;
  }

  @Post('')
  async create(@Body() payload: CreateNewSong) {
    return this.songService.createNew(payload);
  }
}
