import { Global, Module } from '@nestjs/common';
import { ArtistsController } from './controllers/artists.controller';
import { ArtistsService } from './services/artists.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Artist } from './entities/artist.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Artist])],
  controllers: [ArtistsController],
  providers: [ArtistsService],
  exports: [ArtistsService],
})
export class ArtistsModule {}
