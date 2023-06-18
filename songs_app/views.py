from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from songs_app.models import Song, Artist, Genre
from songs_app.serializers import SongSerializer, ArtistSerializer, GenreSerializer

class SongViewSet(viewsets.ModelViewSet):
    queryset = Song.objects.select_related('artist', 'genre').all()
    serializer_class = SongSerializer

    @action(detail=True, methods=['put'])
    def update_song(self, request, pk=None):
        song = self.get_object()
        serializer = self.get_serializer(song, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data)

    @action(detail=True, methods=['delete'])
    def delete_song(self, request, pk=None):
        song = self.get_object()
        song.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class ArtistViewSet(viewsets.ModelViewSet):
    queryset = Artist.objects.all()
    serializer_class = ArtistSerializer

    @action(detail=True, methods=['put'])
    def update_artist(self, request, pk=None):
        artist = self.get_object()
        serializer = self.get_serializer(artist, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    
    @action(detail=True, methods=['delete'])
    def delete_artist(self, request, pk=None):
        artist = self.get_object()
        artist.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)

class GenreViewSet(viewsets.ModelViewSet):
    queryset = Genre.objects.all()
    serializer_class = GenreSerializer

    @action(detail=True, methods=['put'])
    def update_genre(self, request, pk=None):
        genre = self.get_object()
        serializer = self.get_serializer(genre, data=request.data, partial=True)
        serializer.is_valid(raise_exception=True)
        serializer.save()
        return Response(serializer.data, status=status.HTTP_202_ACCEPTED)
    
    @action(detail=True, methods=['delete'])
    def delete_genre(self, request, pk=None):
        genre = self.get_object()
        genre.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)