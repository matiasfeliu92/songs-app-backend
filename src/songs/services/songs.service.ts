import { Global, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeepPartial } from 'typeorm';
import { Repository } from 'typeorm';
import { AllSongs } from '../entities/allSongs.entity';
import { CreateNewSong } from '../dtos/CreateNewSong.dto';
import { ArtistsService } from 'src/artists/services/artists.service';
import { GenresService } from 'src/genres/services/genres.service';
import { Song } from '../entities/song.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Genre } from 'src/genres/entities/genre.entity';

@Global()
@Injectable()
export class SongsService {
  constructor(
    @InjectRepository(AllSongs) private allSongRepository: Repository<AllSongs>,
    @InjectRepository(Song) private songRepository: Repository<Song>,
    @InjectRepository(Artist) private artistRepository: Repository<Artist>,
    @InjectRepository(Genre) private genreRepository: Repository<Genre>,
    private artistService: ArtistsService,
    private genreService: GenresService,
  ) {}

  async getAll() {
    return this.allSongRepository.find();
  }

  // async getOneById(id: number): Promise<AllSongs> {
  //   return this.allSongRepository.findOne({ where: { id } });
  // }

  async getOneByName(title: string): Promise<AllSongs> {
    return this.allSongRepository.findOne({ where: { title } });
  }

  async createNew(data: CreateNewSong) {
    let artist: Artist;
    let genre: Genre;

    if (data.artist) {
      artist = await this.artistService.getOneByName(data.artist);
      if (!artist) {
        // Si el artista no existe, crea un nuevo artista
        artist = await this.artistRepository.create({ name: data.artist });
        await this.artistRepository.save(artist);
      }
    }

    if (data.genre) {
      genre = await this.genreService.getOneByName(data.genre);
      if (!genre) {
        // Si el género no existe, crea un nuevo género
        genre = await this.genreRepository.create({ name: data.genre });
        await this.genreRepository.save(genre);
      }
    }

    const newSong: DeepPartial<Song> = {
      title: data.title,
      artist: artist ? { id: artist.id } : undefined,
      album: data.album,
      duration: data.duration,
      genre: genre ? { id: genre.id } : undefined,
      image: data.image,
      you_tube: data.you_tube,
    };

    return this.songRepository.save(newSong);
  }
}
