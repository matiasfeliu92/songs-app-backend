import { Global, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from '../entities/artist.entity';
import { Repository } from 'typeorm';

@Injectable()
@Global()
export class ArtistsService {
  constructor(
    @InjectRepository(Artist) private artistRepository: Repository<Artist>,
  ) {}

  async getAll() {
    return this.artistRepository.find();
  }

  async getOneById(id: number): Promise<Artist> {
    return this.artistRepository.findOne({ where: { id } });
  }

  async getOneByName(name: string): Promise<Artist> {
    return this.artistRepository.findOne({ where: { name } });
  }
}
