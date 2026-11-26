from django.db import models


# Create your models here.
class signup_student(models.Model):
    fname=models.CharField()
    lname=models.CharField()
    email=models.EmailField()
    education=models.CharField()
    interest=models.CharField()
    password=models.CharField()
    phone_number=models.CharField(max_length=10)

class signup_teacher(models.Model):
    first_name=models.CharField()
    last_name=models.CharField()
    teacher_email=models.EmailField()
    subject=models.CharField()
    experience=models.CharField()
    teacher_password=models.CharField()
    teacher_phone_number=models.CharField(max_length=10)
    



