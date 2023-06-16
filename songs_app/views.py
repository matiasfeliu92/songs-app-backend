import json
from django.http import JsonResponse
from rest_framework import viewsets, permissions, status
from django.core import serializers
from rest_framework. response import Response
from django.views.decorators.csrf import csrf_exempt
from django.shortcuts import get_object_or_404, render
from .models import Song, Artist, Genre

## CRUD SONGS ##
def index(request):
    return JsonResponse({'message': 'Do you like listening to music?'})

def get_all_songs(request):
    all_songs = Song.objects.select_related('artist', 'genre').all()
    songs_data = []
    for song in all_songs:
        song_data = {
            'id': song.id,
            'title': song.title,
            'artist': song.artist.name,
            'album': song.album,
            'duration': song.duration,
            'genre': song.genre.name,
            'image': song.image,
            'you_tube': song.you_tube
        }
        songs_data.append(song_data)
    return JsonResponse(songs_data, status=200, safe=False)

def get_one_song(request, id):
    song = list(Song.objects.filter(pk=id))
    if song:
        return JsonResponse(song, status=200, safe=False)
    else:
        return JsonResponse({'message': 'song was not found'}, status=404)

@csrf_exempt
def new_song(request):
    artist = None
    genre = None
    artists_db = Artist.objects.all()
    genres_db = Genre.objects.all()
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        for artist_db in artists_db:
            if artist_db.name == data['artist']:
                artist = artist_db
                break
        for genre_db in genres_db:
            if genre_db.name == data['genre']:
                genre = genre_db
                break
        song = Song(title=data['title'], artist=artist, album=data['album'], duration=data['duration'], genre=genre, image=data['image'], you_tube=data['you_tube'])
        song.save()
        return JsonResponse({'message': 'new song was saved'}, status=200)


## CRUD ARTISTS ##
def get_all_artists(request):
    all_artists = list(Artist.objects.values())
    return JsonResponse(all_artists, status=200, safe=False)

@csrf_exempt
def new_artist(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        artist = Artist(name=data['name'])
        artist.save()
    return JsonResponse({'message': '...'}, status=200)

## CRUD GENRES ##
def get_all_genres(request):
    all_genres = list(Genre.objects.values())
    return JsonResponse(all_genres, status=200, safe=False)

@csrf_exempt
def new_genre(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        print(data)
        genre = Genre(name=data['name'])
        genre.save()
    return JsonResponse({'message': '...'}, status=200)