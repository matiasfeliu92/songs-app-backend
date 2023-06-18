from django.urls import include, path
from rest_framework import routers
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('songs', views.get_all_songs, name='get_all_songs'),
    path('artists', views.get_all_artists, name='get_all_artists'),
    path('genres', views.get_all_genres, name='get_all_genres'),
    path('songs/<int:id>', views.get_one_song, name='get_one_song'),
    path('songs/new', views.new_song, name='new_song'),
    path('artists/new', views.new_artist, name='new_artist'),
    path('genres/new', views.new_genre, name='new_genre'),
]