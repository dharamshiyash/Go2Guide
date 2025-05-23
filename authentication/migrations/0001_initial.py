# Generated by Django 5.1.1 on 2025-01-23 14:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='authentication',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('email', models.CharField(max_length=100)),
                ('phone', models.IntegerField()),
                ('birth_date', models.CharField(max_length=20)),
                ('gender', models.CharField(max_length=100)),
                ('verification_code', models.IntegerField(blank=True, null=True)),
                ('password', models.CharField(blank=True, max_length=100, null=True)),
            ],
        ),
    ]
