from django.contrib import admin
from login.models import signup_student,signup_teacher

# Register your models here.
admin.site.register(signup_student)
admin.site.register(signup_teacher)