from rest_framework import serializers
from .models import Song, Artist, Genre

class SongSerializer(serializers.ModelSerializer):
    artist = serializers.CharField(source='artist.name')
    genre = serializers.CharField(source='genre.name')

    class Meta:
        model = Song
        fields = '__all__'

    def create(self, validated_data):
        artist_name = validated_data.pop('artist')['name']
        genre_name = validated_data.pop('genre')['name']

        artist, _ = Artist.objects.get_or_create(name=artist_name)
        genre, _ = Genre.objects.get_or_create(name=genre_name)

        song = Song.objects.create(artist=artist, genre=genre, **validated_data)
        return song

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
