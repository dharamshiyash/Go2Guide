from django.contrib import admin
from User.models import User

# Register your models here.
class LoginAdmin(admin.ModelAdmin):
    list_display=('username','email')


admin.site.register(User,LoginAdmin)