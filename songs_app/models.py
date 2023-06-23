from django.db import models

# Create your models here.
class Genre(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

class Artist(models.Model):
    name = models.CharField(max_length=200, unique=True)

    def __str__(self):
        return self.name

class Song(models.Model):
    title = models.CharField(max_length=200, unique=True)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, max_length=200)
    album = models.CharField(max_length=200)
    duration = models.CharField(max_length=10)
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE, max_length=200)
    image = models.CharField(max_length=500)
    you_tube = models.CharField(max_length=300)
    pub_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
