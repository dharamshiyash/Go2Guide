from django.db import models
from tinymce.models import HTMLField
# Create your models here.
class Destination(models.Model):
    name = models.CharField(max_length=255)
    city=models.CharField(max_length=100)
    description =HTMLField()
    image = models.ImageField(upload_to='destinations/', max_length=500,null=True, default=None)
    location = models.CharField(max_length=255)
    latitude = models.FloatField()
    longitude = models.FloatField()
    rating = models.FloatField()
    precautions = models.TextField()
    duration_hours = models.FloatField(default=2.0, help_text="Average time (in hours) a visitor spends here.")

    def __str__(self):
        return self.name