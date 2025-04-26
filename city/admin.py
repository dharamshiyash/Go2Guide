from django.contrib import admin
from city.models import City
# Register your models here.
class CityAdmin(admin.ModelAdmin):
    list_display=('name', 'image', 'category', 'description')

admin.site.register(City, CityAdmin)
