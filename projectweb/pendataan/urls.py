from django.urls import path
from .views import Pendataan

app_name = 'pendataan'
urlpatterns = [
    path("", Pendataan.as_view(), name="index"),
]
