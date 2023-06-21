from rest_framework import serializers
from .models import Song, Artist, Genre

class SongSerializer(serializers.ModelSerializer):
    artist = serializers.PrimaryKeyRelatedField(queryset=Artist.objects.all())
    genre = serializers.PrimaryKeyRelatedField(queryset=Genre.objects.all())

    class Meta:
        model = Song
        fields = '__all__'

    def create(self, validated_data):
        artist = validated_data.pop('artist')
        genre = validated_data.pop('genre')
        artist_id = artist.id
        genre_id = genre.id
        song = Song.objects.create(artist_id=artist_id, genre_id=genre_id, **validated_data)
        return song

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
