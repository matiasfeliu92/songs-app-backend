import { Artist } from 'src/artists/entities/artist.entity';
import { Genre } from 'src/genres/entities/genre.entity';

export class CreateNewSong {
  readonly id: number;
  readonly title: string;
  readonly artist: string;
  readonly album: string;
  readonly duration: string;
  readonly genre: string;
  readonly image: string;
  readonly you_tube: string;
}
