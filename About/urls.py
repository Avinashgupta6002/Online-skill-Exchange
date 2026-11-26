from django.urls import path
from .views import about,explore

urlpatterns=[
    path("about/" , about , name='about'),
    path("explore/" , explore , name='explore')
]