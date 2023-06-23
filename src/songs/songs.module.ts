import { Global, Module } from '@nestjs/common';
import { SongsController } from './controllers/songs.controller';
import { SongsService } from './services/songs.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AllSongs } from './entities/allSongs.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import { Song } from './entities/song.entity';
import { Artist } from 'src/artists/entities/artist.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([AllSongs, Genre, Song, Artist])],
  controllers: [SongsController],
  providers: [SongsService],
})
export class SongsModule {}
