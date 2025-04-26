"""
URL configuration for pbl project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from pbl import views
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('admin/', admin.site.urls),
    path('', views.login_view, name='login'),
    path('register/', views.register_view, name='register'),
    path('verify/', views.verify_view, name='verify'),
    path('forgot_password/', views.forgot_password, name='forgot_password'),
    path('home/',views.Home, name='home'),
    path('profile/',views.profile, name='profile'),
    path('destinations/',views.destination, name='destination'),
    path('d/',views.des, name='d'),
    path('category_detail/<cat>',views.Cat_detail),
    path('city_detail/<C>',views.City_detail),
    path('location_detail/<l>',views.loc_detail),
    path('generate_itinerary/', views.generate_itinerary, name='generate_itinerary'),
    path('about-us/', views.about_us, name='about_us')
]

if settings.DEBUG:
    urlpatterns +=static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
