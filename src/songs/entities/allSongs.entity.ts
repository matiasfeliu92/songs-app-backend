import { ViewEntity, ViewColumn } from 'typeorm';
import { Song } from './song.entity';
import { Artist } from 'src/artists/entities/artist.entity';
import { Genre } from 'src/genres/entities/genre.entity';

@ViewEntity({
  name: 'all_songs',
  expression: (connection: any) =>
    connection
      .createQueryBuilder()
      .select('song.id', 'id')
      .addSelect('song.title', 'title')
      .addSelect('artist.name', 'artist')
      .addSelect('song.album', 'album')
      .addSelect('song.duration', 'duration')
      .addSelect('genre.name', 'genre')
      .addSelect('song.image', 'image')
      .addSelect('song.you_tube', 'you_tube')
      .from(Song, 'song')
      .leftJoin(Artist, 'artist', 'artist.id = song.artist')
      .leftJoin(Genre, 'genre', 'genre.id = song.genre')
      .orderBy('title'),
})
export class AllSongs {
  @ViewColumn()
  id: number;

  @ViewColumn()
  title: string;

  @ViewColumn()
  artist: string;

  @ViewColumn()
  album: string;

  @ViewColumn()
  duration: string;

  @ViewColumn()
  genre: string;

  @ViewColumn()
  image: string;

  @ViewColumn()
  you_tube: string;
}
