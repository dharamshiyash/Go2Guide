from django.db import models

# Create your models here.
class authentication(models.Model):
    name=models.CharField(max_length=100)
    email=models.CharField(max_length=100)
    phone=models.IntegerField()
    birth_date=models.CharField(max_length=20)
    gender=models.CharField(max_length=100)
    verification_code=models.IntegerField(blank=True, null=True)
    password=models.CharField(max_length=100,blank=True, null=True)