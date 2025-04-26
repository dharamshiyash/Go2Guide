from django.db import models
from tinymce.models import HTMLField


# Create your models here.
class City(models.Model):
    name=models.CharField(max_length=50)
    image=models.FileField(upload_to="city/", max_length=500,null=True, default=None)
    category=models.CharField(max_length=50)
    description=HTMLField()