# Generated by Django 4.2.2 on 2023-06-23 01:05

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('songs_app', '0005_alter_song_duration'),
    ]

    operations = [
        migrations.AlterField(
            model_name='song',
            name='duration',
            field=models.CharField(max_length=10),
        ),
    ]
