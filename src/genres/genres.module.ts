import { Global, Module } from '@nestjs/common';
import { GenresController } from './controllers/genres.controller';
import { GenresService } from './services/genres.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Genre } from './entities/genre.entity';

@Global()
@Module({
  imports: [TypeOrmModule.forFeature([Genre])],
  controllers: [GenresController],
  providers: [GenresService],
  exports: [GenresService],
})
export class GenresModule {}
