from rest_framework import serializers
from .models import Song, Artist, Genre

class SongSerializer(serializers.ModelSerializer):
    artist = serializers.StringRelatedField()
    genre = serializers.StringRelatedField()

    class Meta:
        model = Song
        fields = '__all__'

class ArtistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Artist
        fields = '__all__'

class GenreSerializer(serializers.ModelSerializer):
    class Meta:
        model = Genre
        fields = '__all__'
