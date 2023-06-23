import { Global, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Genre } from '../entities/genre.entity';

@Injectable()
@Global()
export class GenresService {
  constructor(
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
  ) {}

  async getAll() {
    return this.genreRepository.find();
  }

  async getOneById(id: number): Promise<Genre> {
    return this.genreRepository.findOne({ where: { id } });
  }

  async getOneByName(name: string): Promise<Genre> {
    return this.genreRepository.findOne({ where: { name } });
  }
}
