from django.contrib import admin
from django.urls import path, include
from .views import index, Home

urlpatterns = [
    path('pendataan/', include('pendataan.urls', namespace='pendataan')),
    path("home/", Home.as_view(), name="home"),
    path('', index, name='index'),
    path('admin/', admin.site.urls),
]
