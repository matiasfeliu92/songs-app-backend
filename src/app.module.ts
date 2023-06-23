import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { ArtistsModule } from './artists/artists.module';
import { GenresModule } from './genres/genres.module';

@Module({
  imports: [SongsModule, ArtistsModule, GenresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
