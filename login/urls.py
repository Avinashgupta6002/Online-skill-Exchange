from django.urls import path
from .views import login ,teacher,student

urlpatterns=[
    path("login/" , login , name='login'),
    path("signup/" , student , name='signup_student'),
    path("signup_teacher/" ,teacher,name="signup_teacher")
]