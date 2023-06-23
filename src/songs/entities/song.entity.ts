import { Artist } from 'src/artists/entities/artist.entity';
import { Genre } from 'src/genres/entities/genre.entity';
import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Song extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 250, nullable: false, unique: true })
  title: string;

  @ManyToOne((type) => Artist, {
    eager: true,
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'artist' })
  artist?: Artist;

  @Column({ type: 'varchar', length: 250, nullable: true })
  album: string;

  @ManyToOne((type) => Genre, {
    eager: true,
    cascade: true,
    nullable: false,
  })
  @JoinColumn({ name: 'genre' })
  genre?: Genre;

  @Column({ type: 'varchar', length: 5, nullable: false })
  duration: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  you_tube: string;

  @Column({ type: 'varchar', length: 250, nullable: true })
  image: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
