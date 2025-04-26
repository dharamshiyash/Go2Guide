from django.contrib import admin
from authentication.models import authentication 
# Register your models here.

class LoginAdmin(admin.ModelAdmin):
    list_display=('name','email','phone','birth_date','gender')

admin.site.register(authentication,LoginAdmin)