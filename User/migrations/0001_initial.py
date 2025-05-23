# Generated by Django 5.1.1 on 2025-01-25 12:45

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('username', models.CharField(max_length=150, unique=True)),
                ('email', models.EmailField(max_length=254, unique=True)),
                ('password', models.CharField(max_length=128)),
                ('is_verified', models.BooleanField(default=False)),
                ('verification_code', models.CharField(blank=True, max_length=6, null=True)),
            ],
        ),
    ]
