from django.urls import path 
from .views import student , Teacher
urlpatterns=[
    path("Teacher/" , Teacher , name='Teacher'),
    path("student/",student , name='student'),
]